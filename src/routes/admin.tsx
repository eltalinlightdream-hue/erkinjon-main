import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Activity, Crown, KeyRound, Library, Loader2, Shield, Users } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudentsPanel } from "@/components/admin/students-panel";
import { CodesPanel } from "@/components/admin/codes-panel";
import { ContentPanel } from "@/components/admin/content-panel";
import { isWithinDays } from "@/components/admin/admin-format";
import { useAuth } from "@/hooks/use-auth";
import { isAdminEmail } from "@/lib/admin-config";
import {
  adminListCodes,
  adminListContentOverrides,
  adminListStudents,
  type AdminCode,
  type AdminContentOverride,
  type AdminStudent,
} from "@/lib/admin.functions";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel - Abduraimov Erkinjon" },
      { name: "description", content: "Private student administration panel." },
    ],
  }),
  component: Admin,
});

const ACTIVE_WINDOW_DAYS = 7;

function Admin() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const listStudentsFn = useServerFn(adminListStudents);
  const listCodesFn = useServerFn(adminListCodes);
  const listOverridesFn = useServerFn(adminListContentOverrides);

  const [students, setStudents] = useState<AdminStudent[]>([]);
  const [codes, setCodes] = useState<AdminCode[]>([]);
  const [overrides, setOverrides] = useState<AdminContentOverride[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const isAdmin = isAdminEmail(user?.email);

  const loadAll = useCallback(async () => {
    const [studentsResult, codesResult, overridesResult] = await Promise.allSettled([
      listStudentsFn(),
      listCodesFn(),
      listOverridesFn(),
    ]);
    if (studentsResult.status === "fulfilled") {
      setStudents(studentsResult.value);
    } else {
      toast.error("Could not load students.");
    }
    if (codesResult.status === "fulfilled") {
      setCodes(codesResult.value);
    } else {
      toast.error("Could not load activation codes.");
    }
    if (overridesResult.status === "fulfilled") {
      setOverrides(overridesResult.value);
    } else {
      toast.error("Could not load content overrides.");
    }
  }, [listStudentsFn, listCodesFn, listOverridesFn]);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth" });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user || !isAdmin) return;
    setIsLoadingData(true);
    void loadAll().finally(() => setIsLoadingData(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once per admin session
  }, [user?.id, isAdmin]);

  if (loading || !user) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
        </div>
      </SiteLayout>
    );
  }

  if (!isAdmin) {
    return (
      <SiteLayout>
        <section className="container mx-auto px-4 py-16 max-w-2xl">
          <Card className="p-8 text-center">
            <Shield className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">Admin access only</h1>
            <p className="text-sm text-muted-foreground">
              This page is private and can only be opened by the site owner.
            </p>
          </Card>
        </section>
      </SiteLayout>
    );
  }

  const premiumCount = students.filter((s) => s.is_premium).length;
  const activeCount = students.filter((s) =>
    isWithinDays(s.last_sign_in_at, ACTIVE_WINDOW_DAYS),
  ).length;
  const availableCodes = codes.filter((c) => !c.used_by).length;

  const stats = [
    {
      label: "Total students",
      value: students.length,
      icon: Users,
      iconClass: "bg-accent text-secondary",
    },
    {
      label: "Premium students",
      value: premiumCount,
      icon: Crown,
      iconClass: "bg-[#C07850]/10 text-[#C07850]",
    },
    {
      label: `Active last ${ACTIVE_WINDOW_DAYS} days`,
      value: activeCount,
      icon: Activity,
      iconClass: "bg-accent text-secondary",
    },
    {
      label: "Codes available",
      value: availableCodes,
      icon: KeyRound,
      iconClass: "bg-gold/10 text-gold",
    },
  ];

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-10 max-w-6xl space-y-6">
        <div className="bento-card rounded-3xl p-6 flex flex-wrap items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">Admin Panel</h1>
            <p className="font-mono text-xs text-muted-foreground tracking-wide mt-0.5">
              Manage students, premium access and activation codes.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setIsLoadingData(true);
              void loadAll().finally(() => setIsLoadingData(false));
            }}
            disabled={isLoadingData}
            className="font-mono text-xs tracking-wide"
          >
            {isLoadingData ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bento-card rounded-2xl p-5 flex items-center gap-4">
              <span
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.iconClass}`}
              >
                <stat.icon className="w-5 h-5" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[11px] text-muted-foreground tracking-wider uppercase truncate">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold font-serif">{isLoadingData ? "…" : stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <Tabs defaultValue="students">
          <TabsList className="mb-4">
            <TabsTrigger value="students" className="font-mono text-xs tracking-wide">
              <Users className="w-3.5 h-3.5 mr-1.5" /> Students
            </TabsTrigger>
            <TabsTrigger value="codes" className="font-mono text-xs tracking-wide">
              <KeyRound className="w-3.5 h-3.5 mr-1.5" /> Activation codes
            </TabsTrigger>
            <TabsTrigger value="content" className="font-mono text-xs tracking-wide">
              <Library className="w-3.5 h-3.5 mr-1.5" /> Content access
            </TabsTrigger>
          </TabsList>
          <TabsContent value="students">
            <StudentsPanel students={students} isLoading={isLoadingData} onReload={loadAll} />
          </TabsContent>
          <TabsContent value="codes">
            <CodesPanel codes={codes} isLoading={isLoadingData} onReload={loadAll} />
          </TabsContent>
          <TabsContent value="content">
            <ContentPanel overrides={overrides} isLoading={isLoadingData} onReload={loadAll} />
          </TabsContent>
        </Tabs>
      </section>
    </SiteLayout>
  );
}

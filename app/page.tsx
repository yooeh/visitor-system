import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export default function Home() {
  return (
    <DashboardShell>
      <DashboardPage />
    </DashboardShell>
  );
}

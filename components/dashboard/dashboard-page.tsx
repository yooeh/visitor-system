import { AlertsSection } from "@/components/dashboard/alerts-section";
import { DashboardReveal } from "@/components/dashboard/dashboard-reveal";
import { MetricCards } from "@/components/dashboard/metric-cards";
import { MiniTrendChart } from "@/components/dashboard/mini-trend-chart";
import { RecentVisitorsSection } from "@/components/dashboard/recent-visitors-section";

export function DashboardPage() {
  return (
    <section
      id="dashboard"
      className="space-y-4 px-4 pt-4 pb-10 md:px-6 md:pt-6 md:pb-12"
    >
      <DashboardReveal delayMs={0}>
        <div>
          <div className="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <h2 className="text-heading-1 font-bold text-gray-900">방문 현황</h2>
            <p className="text-body-5 text-gray-600">
              오늘 출입 데이터를 실시간으로 확인합니다.
            </p>
          </div>
          <MetricCards />
        </div>
      </DashboardReveal>

      <DashboardReveal delayMs={150}>
        <RecentVisitorsSection />
      </DashboardReveal>

      <DashboardReveal delayMs={300}>
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_0.9fr]">
          <div className="min-w-0">
            <MiniTrendChart />
          </div>
          <AlertsSection />
        </div>
      </DashboardReveal>
    </section>
  );
}

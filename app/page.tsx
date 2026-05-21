import Image from "next/image";
import { AlertsSection } from "./alerts-section";
import { DashboardHeader } from "./dashboard-header";
import { DashboardReveal } from "./dashboard-reveal";
import { DashboardSidebar } from "./dashboard-sidebar";
import { MiniTrendChart } from "./mini-trend-chart";
import { RecentVisitorsSection } from "./recent-visitors-section";

const metrics = [
  {
    label: "오늘 방문 예정",
    value: "128",
    iconSrc: "/icons/ic_calender_check.svg",
    accent: "text-metric-blue-accent",
  },
  {
    label: "현장 등록",
    value: "9",
    iconSrc: "/icons/ic_edit.svg",
    accent: "text-metric-purple-accent",
  },
  {
    label: "승인 필요",
    value: "17",
    iconSrc: "/icons/ic_check_circle.svg",
    accent: "text-metric-coral-accent",
  },
  {
    label: "방문 중",
    value: "42",
    iconSrc: "/icons/ic_user_check.svg",
    accent: "text-metric-teal-accent",
  },
  {
    label: "방문 종료",
    value: "76",
    iconSrc: "/icons/ic_out.svg",
    accent: "text-metric-gray-accent",
  },
];

function AppIcon({
  className = "h-[18px] w-[18px]",
  src,
}: {
  className?: string;
  src: string;
}) {
  return (
    <Image
      alt=""
      aria-hidden
      className={`shrink-0 ${className}`}
      height={18}
      src={src}
      width={18}
    />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-800">
      <DashboardHeader />

      <div className="flex min-h-[calc(100vh-60px)]">
        <DashboardSidebar />

        <main className="min-w-0 flex-1">
          <section id="dashboard" className="space-y-4 px-4 pt-4 pb-10 md:px-6 md:pt-6 md:pb-12">
            <DashboardReveal delayMs={0}>
              <div>
                <div className="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h2 className="text-heading-1 font-bold text-gray-900">
                    방문 현황
                  </h2>
                  <p className="text-body-5 text-gray-500">
                    오늘 출입 데이터를 실시간으로 확인합니다.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {metrics.map((metric) => (
                    <article
                      className="flex min-h-[104px] flex-col justify-between rounded-[12px] bg-gray-0 px-4 py-3.5 shadow-level-1"
                      key={metric.label}
                    >
                      <div
                        className={`flex items-center gap-1.5 ${metric.accent}`}
                      >
                        <AppIcon src={metric.iconSrc} />
                        <p className="text-body-3 font-bold">{metric.label}</p>
                      </div>
                      <p className="flex items-baseline justify-end gap-1.5 text-[28px] leading-[32px] font-bold text-gray-900">
                        {metric.value}
                        <span className="-translate-y-px text-body-1 font-medium leading-none text-gray-400">
                          건
                        </span>
                      </p>
                    </article>
                  ))}
                </div>
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
        </main>
      </div>
    </div>
  );
}

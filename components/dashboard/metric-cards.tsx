import { AppIcon } from "@/components/ui/app-icon";
import { DASHBOARD_METRICS } from "@/lib/dashboard/constants";

/** Figma Contents01 — metric card 220×100, radius 12 */
export function MetricCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {DASHBOARD_METRICS.map((metric) => (
        <article
          className="flex min-h-[100px] flex-col justify-between rounded-[12px] bg-gray-0 px-4 py-3.5 shadow-level-1"
          key={metric.label}
        >
          <div className={`flex items-center gap-1.5 ${metric.accent}`}>
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
  );
}

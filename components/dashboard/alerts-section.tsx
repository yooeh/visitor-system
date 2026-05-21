import { AlertDayFilter } from "@/components/dashboard/alert-day-filter";
import { SectionCard } from "@/components/ui/section-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { DASHBOARD_ALERTS } from "@/lib/dashboard/constants";

export function AlertsSection() {
  return (
    <SectionCard className="h-[300px]" variant="panel">
      <SectionHeading
        actions={<AlertDayFilter />}
        iconSrc="/icons/ic_error_24.svg"
        title="예외/이슈 발생 알림"
      />

      <div className="mt-4 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        {DASHBOARD_ALERTS.map((alert) => (
          <article
            className="flex h-[64px] shrink-0 flex-col justify-center rounded-[8px] border border-gray-100 bg-neutral-30 px-4 py-2.5"
            key={alert.title}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="min-w-0 truncate text-body-2 font-semibold text-gray-900">
                {alert.title}
              </p>
              <span className="shrink-0 text-body-4 font-normal text-gray-600">
                {alert.time}
              </span>
            </div>
            <p className="mt-1 line-clamp-2 text-body-4 leading-[16px] text-gray-600">
              {alert.description}
            </p>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

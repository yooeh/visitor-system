import Image from "next/image";
import { AlertDayFilter } from "./alert-day-filter";

const alerts = [
  {
    title: "현장등록 방문객 3건 승인 필요",
    description: "예약 정보 없이 도착한 방문객이 있어 담당자 확인이 필요합니다.",
    time: "14:08",
  },
  {
    title: "임시 출입증 미반납 2건",
    description: "퇴실 처리 후 방문증 회수 여부를 확인해주세요.",
    time: "13:52",
  },
  {
    title: "15시 이후 방문 예정 46건",
    description: "로비 혼잡 예상 시간대입니다. 안내 인력을 확인해주세요.",
    time: "13:30",
  },
] as const;

export function AlertsSection() {
  return (
    <section className="flex h-[300px] w-full min-w-0 flex-col rounded-[18px] bg-gray-0 p-5 shadow-level-1">
      <div className="flex shrink-0 items-center justify-between gap-3">
        <h2 className="flex items-center gap-1.5 text-heading-2 font-bold text-gray-900">
          <Image
            alt=""
            aria-hidden
            className="h-6 w-6 shrink-0 opacity-80"
            height={24}
            src="/icons/ic_error_24.svg"
            width={24}
          />
          예외/이슈 발생 알림
        </h2>
        <AlertDayFilter />
      </div>

      <div className="mt-4 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        {alerts.map((alert) => (
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
    </section>
  );
}

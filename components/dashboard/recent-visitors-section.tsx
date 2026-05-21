import Image from "next/image";
import { HostProfileCell } from "@/components/dashboard/host-profile-cell";
import { SectionCard } from "@/components/ui/section-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { VisitorStatusBadge } from "@/components/ui/visitor-status-badge";
import {
  RECENT_VISITORS,
  VISITOR_TABLE_COL_WIDTHS,
  VISITOR_TABLE_VIEWPORT_HEIGHT_PX,
} from "@/lib/dashboard/constants";
import type { RecentVisitor } from "@/lib/dashboard/types";

const cellBase = "align-middle py-0 text-left";
const thCell = `${cellBase} whitespace-nowrap text-body-5 font-bold text-gray-600`;
const tdCell = `${cellBase} max-w-0`;

function SearchIcon() {
  return (
    <Image
      alt=""
      aria-hidden
      className="pointer-events-none absolute top-1/2 right-3 h-[18px] w-[18px] -translate-y-1/2"
      height={18}
      src="/icons/right.svg"
      width={18}
    />
  );
}

function MobileVisitorCard({
  visitor,
  index,
}: {
  visitor: RecentVisitor;
  index: number;
}) {
  return (
    <article className="space-y-2.5 border-b border-gray-100 px-4 py-3 last:border-b-0">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-body-3 font-medium text-gray-800">{visitor.name}</p>
          <p className="mt-0.5 text-body-3 font-medium text-gray-800">
            {visitor.badge}
          </p>
        </div>
        <VisitorStatusBadge exitTime={visitor.exitTime} />
      </div>
      <dl className="grid grid-cols-[72px_1fr] gap-x-3 gap-y-1.5 text-body-5">
        <dt className="text-gray-600">회사</dt>
        <dd className="font-medium text-gray-800">{visitor.company}</dd>
        <dt className="text-gray-600">방문목적</dt>
        <dd className="font-medium text-gray-800">{visitor.purpose}</dd>
        <dt className="text-gray-600">담당자</dt>
        <dd className="font-medium text-gray-800">
          <HostProfileCell host={visitor.host} />
        </dd>
        <dt className="text-gray-600">입장</dt>
        <dd className="font-medium text-gray-800">{visitor.time}</dd>
        <dt className="text-gray-600">퇴장</dt>
        <dd className="font-medium text-gray-800">{visitor.exitTime}</dd>
      </dl>
    </article>
  );
}

function DesktopTable() {
  return (
    <table className="w-full table-fixed border-collapse">
      <colgroup>
        {VISITOR_TABLE_COL_WIDTHS.map((width) => (
          <col key={width} style={{ width }} />
        ))}
      </colgroup>
      <thead className="sticky top-0 z-10">
        <tr className="h-7 border-b border-gray-100 bg-neutral-30">
          <th className={`${thCell} pl-4 pr-0`}>방문객</th>
          <th className={`${thCell} px-0`}>방문증 코드</th>
          <th className={`${thCell} px-0`}>회사</th>
          <th className={`${thCell} px-0`}>방문목적</th>
          <th className={`${thCell} px-0`}>담당자</th>
          <th className={`${thCell} px-0`}>입장</th>
          <th className={`${thCell} px-0`}>퇴장</th>
          <th className={`${thCell} pl-0 pr-4`}>상태</th>
        </tr>
      </thead>
      <tbody>
        {RECENT_VISITORS.map((visitor, index) => (
          <tr
            className="h-10 border-b border-gray-100 transition-colors last:border-b-0 hover:bg-neutral-30"
            key={`${visitor.name}-${visitor.time}-${visitor.exitTime}-${index}`}
          >
            <td className={`${tdCell} pl-4 pr-0`}>
              <p className="truncate text-body-3 font-medium text-gray-800">
                {visitor.name}
              </p>
            </td>
            <td className={`${tdCell} px-0`}>
              <p className="truncate text-body-3 font-medium text-gray-800">
                {visitor.badge}
              </p>
            </td>
            <td className={`${tdCell} px-0`}>
              <p className="truncate text-body-3 font-medium text-gray-800">
                {visitor.company}
              </p>
            </td>
            <td className={`${tdCell} px-0`}>
              <p className="truncate text-body-3 font-medium text-gray-800">
                {visitor.purpose}
              </p>
            </td>
            <td className={`${tdCell} px-0`}>
              <HostProfileCell host={visitor.host} />
            </td>
            <td className={`${tdCell} px-0`}>
              <p className="whitespace-nowrap text-body-3 font-medium text-gray-800">
                {visitor.time}
              </p>
            </td>
            <td className={`${tdCell} px-0`}>
              <p className="whitespace-nowrap text-body-3 font-medium text-gray-800">
                {visitor.exitTime}
              </p>
            </td>
            <td className={`${cellBase} w-px whitespace-nowrap pl-0 pr-4`}>
              <VisitorStatusBadge exitTime={visitor.exitTime} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function RecentVisitorsSection() {
  return (
    <SectionCard className="flex min-h-0 flex-col lg:h-[385px]">
      <div className="shrink-0">
      <SectionHeading
        iconSrc="/icons/ic_user_24.svg"
        meta={
          <p className="text-heading-2 font-medium text-gray-600">
            전체 <span className="font-bold text-blue-500">126</span>
          </p>
        }
        title="최근 도착 방문객"
        actions={
          <>
            <div className="relative min-w-0 flex-1 sm:flex-none">
              <input
                className="h-8 w-full min-w-[140px] rounded-input border border-gray-200 bg-gray-0 py-0 pr-9 pl-3 text-body-5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-700 sm:w-[178px]"
                placeholder="이름을 검색하세요."
                type="search"
              />
              <SearchIcon />
            </div>
            <button
              className="h-8 shrink-0 rounded-button-compact bg-blue-500 px-3 text-body-5 font-bold text-gray-0 transition hover:bg-blue-700"
              type="button"
            >
              검색
            </button>
            <span
              aria-hidden="true"
              className="mx-0.5 hidden h-5 w-px shrink-0 bg-gray-100 sm:block"
            />
            <button
              className="h-8 shrink-0 rounded-button-compact border border-blue-500 bg-gray-0 px-3 text-body-5 font-bold text-blue-500 transition hover:bg-blue-50"
              type="button"
            >
              전체보기
            </button>
          </>
        }
      />
      </div>

      <div
        className="mt-2 shrink-0 overflow-hidden rounded-[12px] border border-gray-100 md:hidden"
        style={{ height: VISITOR_TABLE_VIEWPORT_HEIGHT_PX }}
      >
        <div className="h-full overflow-y-auto">
          {RECENT_VISITORS.map((visitor, index) => (
            <MobileVisitorCard
              index={index}
              key={`m-${visitor.name}-${visitor.time}-${index}`}
              visitor={visitor}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 hidden shrink-0 overflow-hidden rounded-[12px] border border-gray-100 md:block">
        <div
          className="overflow-x-auto overflow-y-auto md:overflow-x-visible"
          style={{ height: VISITOR_TABLE_VIEWPORT_HEIGHT_PX }}
        >
          <DesktopTable />
        </div>
      </div>
    </SectionCard>
  );
}

import Image from "next/image";
import { HostProfileCell } from "./host-profile-cell";

type RecentVisitor = {
  name: string;
  badge: string;
  company: string;
  purpose: string;
  host: string;
  time: string;
  exitTime: string;
};

const recentVisitors: RecentVisitor[] = [
  {
    name: "김민준",
    badge: "B-0142",
    company: "더존비즈온 협력사",
    purpose: "프로젝트 미팅",
    host: "플랫폼사업부 이서연",
    time: "14:02",
    exitTime: "-",
  },
  {
    name: "박지후",
    badge: "B-0139",
    company: "클라우드 보안 컨설팅",
    purpose: "보안 점검",
    host: "정보보호팀 최현우",
    time: "13:48",
    exitTime: "-",
  },
  {
    name: "이도윤",
    badge: "B-0130",
    company: "회계법인 한결",
    purpose: "감사 자료 확인",
    host: "재무팀 강도현",
    time: "13:14",
    exitTime: "-",
  },
  {
    name: "한서준",
    badge: "B-0128",
    company: "더존테크원",
    purpose: "장비 반입",
    host: "인프라운영팀 박수빈",
    time: "12:58",
    exitTime: "13:45",
  },
  {
    name: "오하린",
    badge: "B-0126",
    company: "스마트빌 파트너스",
    purpose: "서비스 협의",
    host: "서비스기획팀 윤지아",
    time: "12:42",
    exitTime: "-",
  },
  {
    name: "김민준",
    badge: "B-0142",
    company: "더존비즈온 협력사",
    purpose: "프로젝트 미팅",
    host: "플랫폼사업부 이서연",
    time: "12:30",
    exitTime: "13:30",
  },
  {
    name: "김민준",
    badge: "B-0142",
    company: "더존비즈온 협력사",
    purpose: "프로젝트 미팅",
    host: "플랫폼사업부 이서연",
    time: "12:30",
    exitTime: "13:20",
  },
];

/** Contents02.svg 열 너비 (1023px 기준, 합 100%) */
const TABLE_COL_WIDTHS = [
  "11.1%",
  "10.9%",
  "17.4%",
  "15.7%",
  "21.5%",
  "9.4%",
  "10%",
  "76px",
] as const;

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

const statusLabelBase =
  "inline-flex h-6 w-fit items-center justify-center rounded-[4px] px-[6px] text-body-5 font-bold leading-none";

function VisitorStatus({ exitTime }: { exitTime: string }) {
  if (exitTime !== "-") {
    return (
      <span className={`${statusLabelBase} bg-gray-50 text-gray-600`}>
        방문종료
      </span>
    );
  }

  return (
    <span className={`${statusLabelBase} bg-blue-50 text-blue-500`}>
      출입완료
    </span>
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
        <VisitorStatus exitTime={visitor.exitTime} />
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
        {TABLE_COL_WIDTHS.map((width) => (
          <col key={width} style={{ width }} />
        ))}
      </colgroup>
      <thead>
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
        {recentVisitors.map((visitor, index) => (
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
              <VisitorStatus exitTime={visitor.exitTime} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function RecentVisitorsSection() {
  return (
    <section className="flex w-full min-w-0 flex-col rounded-[12px] bg-gray-0 p-4 shadow-level-1 lg:h-[385px]">
      <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-wrap items-center gap-1.5">
          <h2 className="flex items-center gap-2 text-heading-2 font-bold text-gray-900">
            <Image
              alt=""
              aria-hidden
              className="h-6 w-6 shrink-0 opacity-80"
              height={24}
              src="/icons/ic_user_24.svg"
              width={24}
            />
            최근 도착 방문객
          </h2>
          <span
            aria-hidden="true"
            className="mx-0.5 hidden h-4 w-px shrink-0 bg-gray-100 sm:block"
          />
          <p className="text-heading-2 font-medium text-gray-600">
            전체 <span className="font-bold text-blue-500">126</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
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
        </div>
      </div>

      <div className="mt-2 max-h-[min(60vh,420px)] overflow-y-auto rounded-[12px] border border-gray-100 md:hidden">
        {recentVisitors.map((visitor, index) => (
          <MobileVisitorCard
            index={index}
            key={`m-${visitor.name}-${visitor.time}-${index}`}
            visitor={visitor}
          />
        ))}
      </div>

      <div className="mt-2 hidden min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[12px] border border-gray-100 md:flex">
        <div className="min-h-0 w-full flex-1 overflow-x-auto overflow-y-hidden md:overflow-x-visible">
          <DesktopTable />
        </div>
      </div>
    </section>
  );
}

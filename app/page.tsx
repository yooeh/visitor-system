import Image from "next/image";
import { AlertDayFilter } from "./alert-day-filter";
import { DashboardReveal } from "./dashboard-reveal";
import { HostOrgChartTrigger } from "./host-org-chart-modal";
import { MiniTrendChart } from "./mini-trend-chart";

const menus = [
  { label: "정책/권한 설정", icon: "settings" },
  { label: "방문객 조회 및 수정", icon: "user" },
  { label: "예외 승인/이슈 대응", icon: "alert" },
  { label: "방문객 현황 리포트", icon: "chart" },
  { label: "방문증 관리", icon: "passCard" },
];

const metrics = [
  {
    label: "오늘 방문 예정",
    value: "128",
    change: "",
    tone: "bg-blue-50 text-blue-500 ring-blue-100",
  },
  {
    label: "현장등록",
    value: "9",
    change: "",
    tone: "bg-pending-bg text-pending-text ring-blue-60",
  },
  {
    label: "승인필요",
    value: "17",
    change: "",
    tone: "bg-pending-bg text-pending-text ring-blue-60",
  },
  {
    label: "방문 중",
    value: "42",
    change: "",
    tone: "bg-positive-50 text-positive-500 ring-positive-500/20",
  },
  {
    label: "방문 종료",
    value: "76",
    change: "",
    tone: "bg-gray-50 text-gray-700 ring-gray-200",
  },
];

const recentVisitors = [
  {
    name: "김민준",
    company: "더존비즈온 협력사",
    host: "플랫폼사업부 이서연",
    purpose: "프로젝트 미팅",
    time: "14:02",
    exitTime: "-",
    badge: "B-0142",
    status: "출입 완료",
  },
  {
    name: "박지후",
    company: "클라우드 보안 컨설팅",
    host: "정보보호팀 최현우",
    purpose: "보안 점검",
    time: "13:48",
    exitTime: "-",
    badge: "B-0139",
    status: "방문 중",
  },
  {
    name: "이도윤",
    company: "회계법인 한결",
    host: "재무팀 강도현",
    purpose: "감사 자료 확인",
    time: "13:14",
    exitTime: "-",
    badge: "B-0130",
    status: "출입 완료",
  },
  {
    name: "한서준",
    company: "더존테크원",
    host: "인프라운영팀 박수빈",
    purpose: "장비 반입",
    time: "12:58",
    exitTime: "13:45",
    badge: "B-0128",
    status: "출입 완료",
  },
  {
    name: "오하린",
    company: "스마트빌 파트너스",
    host: "서비스기획팀 윤지아",
    purpose: "서비스 협의",
    time: "12:42",
    exitTime: "-",
    badge: "B-0126",
    status: "방문 중",
  },
  {
    name: "정시우",
    company: "을지타워 방재센터",
    host: "총무팀 정하린",
    purpose: "안전 점검",
    time: "12:18",
    exitTime: "13:10",
    badge: "B-0121",
    status: "출입 완료",
  },
  {
    name: "강라온",
    company: "한국클라우드",
    host: "클라우드사업부 김도윤",
    purpose: "기술 미팅",
    time: "11:56",
    exitTime: "-",
    badge: "B-0119",
    status: "방문 중",
  },
  {
    name: "문지안",
    company: "회계법인 한결",
    host: "재무팀 강도현",
    purpose: "자료 전달",
    time: "11:31",
    exitTime: "-",
    badge: "B-0114",
    status: "출입 완료",
  },
  {
    name: "임도겸",
    company: "더존비즈온 협력사",
    host: "플랫폼사업부 이서연",
    purpose: "개발 협의",
    time: "11:10",
    exitTime: "12:02",
    badge: "B-0110",
    status: "출입 완료",
  },
  {
    name: "서아윤",
    company: "보안 컨설팅 랩",
    host: "정보보호팀 최현우",
    purpose: "취약점 진단",
    time: "10:48",
    exitTime: "-",
    badge: "B-0107",
    status: "방문 중",
  },
  {
    name: "유나겸",
    company: "데이터링크",
    host: "데이터사업팀 이지후",
    purpose: "데이터 연동",
    time: "10:05",
    exitTime: "-",
    badge: "B-0098",
    status: "출입 완료",
  },
  {
    name: "차은우",
    company: "더존테크원",
    host: "인프라운영팀 박수빈",
    purpose: "서버 점검",
    time: "09:44",
    exitTime: "10:58",
    badge: "B-0094",
    status: "출입 완료",
  },
  {
    name: "조은비",
    company: "넥스트솔루션",
    host: "플랫폼사업부 이서연",
    purpose: "제휴 미팅",
    time: "09:28",
    exitTime: "-",
    badge: "B-0091",
    status: "방문 중",
  },
  {
    name: "배시온",
    company: "디지털웍스",
    host: "서비스기획팀 윤지아",
    purpose: "기능 검토",
    time: "09:12",
    exitTime: "-",
    badge: "B-0088",
    status: "방문 중",
  },
  {
    name: "한지민",
    company: "스마트시스템",
    host: "클라우드사업부 김도윤",
    purpose: "인프라 협의",
    time: "08:55",
    exitTime: "-",
    badge: "B-0085",
    status: "방문 중",
  },
];

const statusTones: Record<string, string> = {
  "출입 완료": "bg-blue-50 text-blue-500",
  "방문 중": "bg-positive-50 text-positive-500",
  "방문 종료": "bg-gray-50 text-gray-700",
};

function getVisitorDisplayStatus(visitor: (typeof recentVisitors)[number]) {
  return visitor.exitTime !== "-" ? "방문 종료" : visitor.status;
}

const alerts = [
  {
    title: "현장등록 방문객 3건 승인 필요",
    description: "예약 정보 없이 도착한 방문객이 있어 담당자 확인이 필요합니다.",
    tone: "border-blue-60 bg-pending-bg text-pending-text",
  },
  {
    title: "임시 출입증 미반납 2건",
    description: "퇴실 처리 후 방문증 회수 여부를 확인해주세요.",
    tone: "border-negative-400 bg-negative-50 text-negative-400",
  },
  {
    title: "15시 이후 방문 예정 46건",
    description: "로비 혼잡 예상 시간대입니다. 안내 인력을 확인해주세요.",
    tone: "border-blue-200 bg-blue-50 text-gray-900",
  },
];

function SidebarIcon({
  className = "h-[18px] w-[18px]",
  name,
}: {
  className?: string;
  name: string;
}) {
  const paths: Record<string, string> = {
    home: "M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z",
    settings:
      "M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Zm7.4-2.1.1-1.4-.1-1.4 2-1.5-2-3.5-2.5 1a8.3 8.3 0 0 0-2.4-1.4L14.1 2h-4.2l-.4 3.2a8.3 8.3 0 0 0-2.4 1.4l-2.5-1-2 3.5 2 1.5-.1 1.4.1 1.4-2 1.5 2 3.5 2.5-1a8.3 8.3 0 0 0 2.4 1.4l.4 3.2h4.2l.4-3.2a8.3 8.3 0 0 0 2.4-1.4l2.5 1 2-3.5-2-1.5Z",
    searchUser:
      "M10.5 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 20c.8-3.4 3.5-5.5 7.5-5.5 2 0 3.7.5 5 1.5m1.5 4 4-4m-4 0 4 4",
    user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20c.9-3.8 3.6-6 7.5-6s6.6 2.2 7.5 6",
    alert:
      "M12 3 2.8 20h18.4L12 3Zm0 6v5m0 3h.01",
    chart:
      "M4 19V5m0 14h16M8 16v-5m4 5V8m4 8v-7",
    badge:
      "M7 3h10a2 2 0 0 1 2 2v16l-7-3-7 3V5a2 2 0 0 1 2-2Zm3 5h4m-4 4h4",
    passCard:
      "M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3 4.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 3.5c2.2 0 4 1 4.5 2.5H7.5C8 13 9.8 12 12 12Z",
    tools:
      "M11.4 15.2 17.3 21a2.6 2.6 0 0 0 3.7-3.7l-5.9-5.9m-3.7 3.7 2.5-3c.3-.4.7-.6 1.2-.8m-3.7 3.7-4.7 5.7a2.5 2.5 0 1 1-3.6-3.6l6.8-5m5.9 6.1-2.9 2.9m2.9-2.9L18 12.5",
    calendar:
      "M7 3v3m10-3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2 8h3m3 0h3m-9 4h3m3 0h3",
    enter:
      "M4 12h11m-4-4 4 4-4 4M20 4v16",
    exit:
      "M20 12H9m4-4-4 4 4 4M4 4v16",
    clock:
      "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 2",
    edit:
      "M4 20h4L19 9l-4-4L4 16v4Zm11-15 4 4",
    star:
      "m12 3 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2L12 17.4 6.4 20.9l1.1-6.2L3 10.3l6.3-.9L12 3Z",
    grid:
      "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z",
  };

  return (
    <svg
      aria-hidden="true"
      className={`${className} shrink-0`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d={paths[name]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SectionTitleIcon({ name }: { name: string }) {
  return (
    <span className="text-gray-900">
      <SidebarIcon className="h-5 w-5" name={name} />
    </span>
  );
}


export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-800">
      <header className="sticky top-0 z-10 flex h-15 items-center justify-end border-b border-gray-100 bg-gray-0 lg:justify-between">
        <h1 className="hidden shrink-0 whitespace-nowrap px-4 text-heading-1 font-bold text-gray-900 lg:block">
          더존 을지타워 방문객 출입 시스템 관리자
        </h1>
        <div className="flex shrink-0 items-center gap-4 px-3 md:px-4">
          <span className="text-body-4 font-medium text-gray-600">
            2026.05.18 월요일 14:14
          </span>
          <button className="flex items-center gap-2 rounded-button-compact px-2 py-1 text-gray-600 transition hover:bg-neutral-30">
            <Image
              alt=""
              className="h-7 w-7 rounded-full"
              height={28}
              src="/avatar-person.svg"
              width={28}
            />
            <span className="text-body-3 font-bold text-gray-700">김더존</span>
            <svg
              aria-hidden="true"
              className="h-3 w-3 text-gray-500"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path
                d="M3 4.5 6 7.5 9 4.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-3.75rem)]">
        <aside className="sticky top-15 hidden h-[calc(100vh-3.75rem)] w-56 shrink-0 bg-gray-0 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-gray-100 lg:block">
          <nav className="flex flex-col gap-2 px-3 pb-4 pt-4 md:pt-6">
            <a
              className="flex h-10 items-center gap-2 rounded-button-compact bg-blue-50 px-3 text-body-1 font-bold text-blue-500"
              href="#dashboard"
            >
              <SidebarIcon name="home" />
              홈
            </a>
            <div className="flex flex-col gap-2">
              {menus.map((menu, index) => (
                <a
                  className="group flex h-10 items-center gap-2 rounded-button-compact px-3 text-body-1 font-medium text-gray-700 transition hover:bg-neutral-30 hover:text-blue-500"
                  href={`#menu-${index + 1}`}
                  key={menu.label}
                >
                  <SidebarIcon name={menu.icon} />
                  <span>{menu.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </aside>

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
                <section className="rounded-[18px] bg-gray-0 p-3 shadow-level-1">
                  <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                    {metrics.map((metric) => (
                      <article
                        className="rounded-button bg-neutral-30 px-4 py-[13px]"
                        key={metric.label}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-body-3 font-medium text-gray-600">
                            {metric.label}
                          </p>
                          {metric.change ? (
                            <span
                              className={`rounded-button-compact px-3 py-1 text-body-5 font-bold ring-1 ${metric.tone}`}
                            >
                              {metric.change}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1 flex items-baseline justify-end gap-1.5 text-right text-[28px] leading-[32px] font-bold text-gray-900">
                          {metric.value}
                          <span className="ml-0.5 -translate-y-px align-baseline text-body-1 font-medium leading-none text-gray-400">
                            건
                          </span>
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </DashboardReveal>

            <DashboardReveal delayMs={150}>
              <div className="grid gap-6">
              <section className="rounded-[18px] bg-gray-0 p-4 shadow-level-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-1.5">
                    <h2 className="flex items-center gap-2 text-heading-2 font-bold text-gray-900">
                      <SectionTitleIcon name="user" />
                      최근 도착 방문객
                    </h2>
                    <span
                      aria-hidden="true"
                      className="mx-0.5 h-4 w-px shrink-0 bg-gray-100"
                    />
                    <p className="text-heading-2 font-medium text-gray-600">
                      전체 <span className="font-bold text-blue-500">126</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <input
                      className="h-8 w-44 rounded-input border border-gray-200 bg-gray-0 px-3 text-body-5 text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-gray-700"
                      placeholder="방문객 검색"
                      type="search"
                    />
                    <button className="h-8 shrink-0 rounded-button-compact bg-blue-500 px-3 text-body-5 font-bold text-gray-0 transition hover:bg-blue-700">
                      검색
                    </button>
                    <span className="mx-1 h-5 w-px bg-gray-100" />
                    <button className="h-8 shrink-0 rounded-button-compact border border-blue-500 px-3 text-body-5 font-bold text-blue-500 transition hover:bg-blue-50">
                      전체 보기
                    </button>
                  </div>
                </div>
                <div className="mt-2 overflow-hidden rounded-button border border-gray-100">
                  <div className="hidden grid-cols-[1fr_0.85fr_0.85fr_1.3fr_0.55fr_0.55fr_0.7fr] border-b border-gray-100 bg-neutral-30 px-4 py-2 text-body-5 font-bold uppercase tracking-wide text-gray-600 md:grid">
                    <span>방문객</span>
                    <span>회사</span>
                    <span>방문 목적</span>
                    <span>담당자</span>
                    <span>입장</span>
                    <span>퇴장</span>
                    <span className="pl-3">상태</span>
                  </div>
                  <div className="h-[260px] divide-y divide-gray-60 overflow-y-scroll overscroll-contain [scrollbar-gutter:stable]">
                    {recentVisitors.map((visitor) => {
                      const displayStatus = getVisitorDisplayStatus(visitor);

                      return (
                      <article
                        className="grid gap-3 px-4 py-3 transition hover:bg-neutral-30 md:grid-cols-[1fr_0.85fr_0.85fr_1.3fr_0.55fr_0.55fr_0.7fr] md:items-center"
                        key={`${visitor.name}-${visitor.time}`}
                      >
                        <div>
                          <p className="text-body-3 font-bold text-gray-900">
                            {visitor.name}
                            <span className="ml-2 font-medium text-gray-500">
                              {visitor.badge}
                            </span>
                          </p>
                        </div>
                        <p className="text-body-3 font-medium text-gray-700">
                          {visitor.company}
                        </p>
                        <p className="text-body-3 font-medium text-gray-700">
                          {visitor.purpose}
                        </p>
                        <div className="flex items-center gap-2 text-body-3 text-gray-600">
                          <Image
                            alt=""
                            className="h-7 w-7 shrink-0 rounded-full"
                            height={28}
                            src="/avatar-person.svg"
                            width={28}
                          />
                          <HostOrgChartTrigger host={visitor.host} />
                        </div>
                        <p className="text-body-3 font-bold text-gray-900">
                          {visitor.time}
                        </p>
                        <p className="text-body-3 font-bold text-gray-900">
                          {visitor.exitTime}
                        </p>
                        <span
                          className={`w-fit rounded-button-compact px-3 py-1 text-body-5 font-bold ${
                            statusTones[displayStatus]
                          }`}
                        >
                          {displayStatus}
                        </span>
                      </article>
                      );
                    })}
                  </div>
                </div>
              </section>

              </div>
            </DashboardReveal>

            <DashboardReveal delayMs={300}>
            <div className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
              <MiniTrendChart />

              <section className="h-full rounded-[18px] bg-gray-0 p-5 shadow-level-1">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="flex items-center gap-2 text-heading-1 font-bold text-gray-900">
                    <SectionTitleIcon name="alert" />
                    예외/이슈 발생 알림
                  </h2>
                  <AlertDayFilter />
                </div>
                <div className="mt-5 space-y-0">
                  {alerts.map((alert, index) => (
                    <article className="pb-2 last:pb-0" key={alert.title}>
                      <div className="rounded-button border border-gray-60 bg-neutral-30 px-4 py-3">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-body-1 font-bold text-gray-900">
                            {alert.title}
                          </p>
                          <span className="shrink-0 text-body-4 font-medium text-gray-500">
                            {index === 0 ? "14:08" : index === 1 ? "13:52" : "13:30"}
                          </span>
                        </div>
                        <p className="mt-1 text-body-2 leading-[21px] text-gray-600">
                          {alert.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
            </DashboardReveal>

          </section>
        </main>
      </div>
    </div>
  );
}

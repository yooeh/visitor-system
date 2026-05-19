import Image from "next/image";

const menus = [
  { label: "정책/권한 설정", icon: "settings" },
  { label: "방문객 조회 및 수정", icon: "user" },
  { label: "예외 승인/이슈 대응", icon: "alert" },
  { label: "방문객 현황 리포트", icon: "chart" },
  { label: "방문증 관리", icon: "tools" },
];

const metrics = [
  {
    label: "오늘 방문 예정",
    value: "128",
    change: "",
    tone: "bg-blue-50 text-blue-500 ring-blue-100",
  },
  {
    label: "방문 중",
    value: "42",
    change: "12.4%",
    tone: "bg-positive-50 text-positive-500 ring-positive-500/20",
  },
  {
    label: "방문 종료",
    value: "76",
    change: "완료율 59%",
    tone: "bg-gray-50 text-gray-700 ring-gray-200",
  },
  {
    label: "승인대기",
    value: "17",
    change: "",
    tone: "bg-pending-bg text-pending-text ring-blue-60",
  },
  {
    label: "현장등록",
    value: "9",
    change: "",
    tone: "bg-pending-bg text-pending-text ring-blue-60",
  },
  {
    label: "이슈 알림",
    value: "4",
    change: "",
    tone: "bg-negative-50 text-negative-400 ring-negative-400/20",
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
    name: "최유나",
    company: "을지타워 시설관리",
    host: "총무팀 정하린",
    purpose: "시설 점검",
    time: "13:31",
    exitTime: "14:18",
    badge: "B-0135",
    status: "임시 등록",
  },
  {
    name: "이도윤",
    company: "회계법인 한결",
    host: "재무팀 강도현",
    purpose: "감사 자료 확인",
    time: "13:14",
    exitTime: "14:05",
    badge: "B-0130",
    status: "승인 확인",
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
    exitTime: "12:20",
    badge: "B-0114",
    status: "승인 확인",
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
    name: "배준호",
    company: "을지타워 시설관리",
    host: "총무팀 정하린",
    purpose: "시설 보수",
    time: "10:22",
    exitTime: "11:35",
    badge: "B-0102",
    status: "임시 등록",
  },
  {
    name: "유나겸",
    company: "데이터링크",
    host: "데이터사업팀 이지후",
    purpose: "데이터 연동",
    time: "10:05",
    exitTime: "11:18",
    badge: "B-0098",
    status: "승인 확인",
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
    name: "송예린",
    company: "디지털 인증원",
    host: "인증사업팀 한유진",
    purpose: "인증 심사",
    time: "09:18",
    exitTime: "-",
    badge: "B-0089",
    status: "반려",
  },
];

const statusTones: Record<string, string> = {
  "출입 완료": "bg-blue-50 text-blue-500",
  "방문 중": "bg-positive-50 text-positive-500",
  "임시 등록": "bg-pending-100 text-pending-400",
  "승인 확인": "bg-gray-50 text-gray-600",
  "반려": "bg-negative-50 text-negative-400",
};

const metricInlineLabelTones: Record<string, string> = {
  "방문 중": "bg-positive-50 text-positive-500 ring-positive-500/20",
  "방문 종료": "bg-blue-50 text-blue-500 ring-blue-100",
};

const trend = [
  { day: "월", visits: 82 },
  { day: "화", visits: 96 },
  { day: "수", visits: 71 },
  { day: "목", visits: 100 },
  { day: "금", visits: 88 },
  { day: "토", visits: 32 },
  { day: "일", visits: 18 },
];

const shortcuts = [
  "방문 예약 등록",
  "임시 출입증 발급",
  "승인 대기 검토",
  "방문증 반납 확인",
];

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
  className = "h-4 w-4",
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

function MiniTrendChart() {
  const yTicks = [0, 20, 40, 60, 80, 100];
  const getX = (index: number) => 60 + index * 116;
  const chartViewBoxHeight = 180;
  const chartBottom = 170;
  const chartScale = 130;
  const points = trend
    .map((item, index) => {
      const x = getX(index);
      const y = chartBottom - (Math.min(item.visits, 100) / 100) * chartScale;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="h-full rounded-[18px] bg-gray-0 p-5 shadow-level-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-2 text-heading-2 font-bold text-gray-900">
            <SectionTitleIcon name="chart" />
            최근 7일 추이
          </h2>
          <p className="mt-1 text-body-5 font-medium text-gray-600">
            일 평균 방문 <span className="font-bold text-blue-500">101</span>건
          </p>
        </div>
        <span className="mt-6 rounded-button-compact bg-positive-50 px-3 py-1 text-body-5 font-bold leading-[18px] text-positive-500">
          전주 대비 +8.2%
        </span>
      </div>
      <div className="mt-1 overflow-hidden rounded-[14px] bg-neutral-30 px-4 pt-4 pb-6">
        <div className="relative">
          <svg
            className="h-[167px] w-full"
            preserveAspectRatio="none"
            role="img"
            viewBox="0 0 800 180"
          >
            <title>최근 7일 방문 추이 그래프</title>
            {yTicks.map((tick) => {
              const y = chartBottom - (tick / 100) * chartScale;
              return (
                <g key={tick}>
                  <line
                    stroke="#EDEDED"
                    strokeWidth="1"
                  x1="60"
                    x2="760"
                    y1={y}
                    y2={y}
                  />
                </g>
              );
            })}
            {trend.map((item, index) => {
              const x = getX(index);
              const y = chartBottom - (Math.min(item.visits, 100) / 100) * chartScale;
              return (
                <rect
                  fill="#97BAFF"
                  height={chartBottom - y}
                  key={`bar-${item.day}`}
                  opacity="0.65"
                  rx="6"
                  width="22"
                  x={x - 11}
                  y={y}
                />
              );
            })}
            <polyline
              fill="none"
              points={points}
              stroke="#105AFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
          </svg>
          {yTicks.map((tick) => {
            const y = chartBottom - (tick / 100) * chartScale;
            return (
              <span
                className="pointer-events-none absolute left-0 w-5 -translate-y-1/2 text-right text-[10px] font-semibold leading-none text-gray-500"
                key={`tick-${tick}`}
                style={{ top: `${(y / chartViewBoxHeight) * 100}%` }}
              >
                {tick}
              </span>
            );
          })}
          {trend.map((item, index) => {
            const x = getX(index);
            const y = chartBottom - (Math.min(item.visits, 100) / 100) * chartScale;
            return (
              <span
                className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-blue-500 bg-gray-0"
                key={`dot-${item.day}`}
                style={{
                  left: `${(x / 800) * 100}%`,
                  top: `${(y / chartViewBoxHeight) * 100}%`,
                }}
              />
            );
          })}
        </div>
        <div className="relative -mt-[6px] h-6 text-[14px] font-medium leading-6 text-gray-600">
          {trend.map((item, index) => (
            <span
              className="absolute top-0 -translate-x-1/2"
              key={item.day}
              style={{ left: `${(getX(index) / 800) * 100}%` }}
            >
              {item.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-800">
      <div className="flex min-h-screen">
        <aside className="sticky top-0 hidden h-screen w-56 shrink-0 bg-gray-0 after:absolute after:right-0 after:top-15 after:bottom-0 after:w-px after:bg-gray-100 lg:block">
          <div className="flex h-15 items-center border-b border-gray-60 px-5">
            <Image
              alt="더존 로고"
              className="h-6 w-auto object-contain"
              height={24}
              src="/douzone-logo.png"
              width={143}
            />
          </div>
          <nav className="flex flex-col gap-2 px-3 py-4 lg:mt-[60px]">
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
          <div className="mx-3 mt-2 rounded-button border border-gray-100 bg-neutral-30 p-3">
            <p className="text-body-5 font-bold text-gray-800">로비 운영 상태</p>
            <p className="mt-1 text-body-5 leading-[18px] text-gray-600">
              게이트 4대 정상 운영
              <br />
              평균 응답 1분 12초
            </p>
          </div>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-10 bg-gray-0">
            <div className="flex h-15 items-center justify-between border-b border-gray-60 px-3 md:px-4">
              <div />
              <div className="flex items-center gap-3 text-gray-600">
                <button
                  aria-label="검색"
                  className="flex h-8 w-8 items-center justify-center rounded-button-compact transition hover:bg-neutral-30"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10.5 18a7.5 7.5 0 1 1 5.3-2.2L20 20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button
                  aria-label="알림"
                  className="relative flex h-8 w-8 items-center justify-center rounded-button-compact transition hover:bg-neutral-30"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M13.7 21a2 2 0 0 1-3.4 0"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-negative-400" />
                </button>
                <button className="flex items-center gap-2 rounded-button-compact px-2 py-1 transition hover:bg-neutral-30">
                  <Image
                    alt=""
                    className="h-7 w-7 rounded-full"
                    height={28}
                    src="/avatar-person.svg"
                    width={28}
                  />
                  <span className="text-body-5 font-bold text-gray-700">
                    김더존
                  </span>
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
            </div>
            <div className="flex min-h-12 flex-col gap-3 border-b border-gray-100 bg-gray-0 px-3 py-3 md:px-4 lg:-ml-56 lg:w-[calc(100%+14rem)] lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-heading-1 font-bold text-gray-900">
                  더존 을지타워 내방고객 출입 관리자
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="rounded-button border border-gray-100 bg-neutral-30 px-3 py-2 text-body-5 font-medium text-gray-600">
                  2026.05.18 월요일 14:14
                </div>
                <button className="rounded-button bg-blue-500 px-4 py-2 text-body-4 font-bold text-gray-0 shadow-level-1 transition hover:bg-blue-700">
                  방문 등록
                </button>
              </div>
            </div>
          </header>

          <section id="dashboard" className="space-y-4 px-4 pt-4 pb-10 md:px-6 md:pt-6 md:pb-12">
            <div>
              <div className="mb-3">
                <h2 className="text-heading-1 font-bold text-gray-900">
                  방문 현황
                </h2>
                <p className="mt-1 text-body-5 text-gray-500">
                  오늘 출입 데이터를 실시간으로 확인합니다.
                </p>
              </div>
              <section className="rounded-[18px] bg-gray-0 p-3 shadow-level-1">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {metrics.map((metric) => (
                    <article
                      className="rounded-button bg-neutral-30 px-4 py-2"
                      key={metric.label}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-body-3 font-medium text-gray-600">
                          {metric.label}
                        </p>
                        {metric.change && !["방문 중", "방문 종료"].includes(metric.label) ? (
                          <span
                            className={`rounded-button-compact px-3 py-1 text-body-5 font-bold ring-1 ${metric.tone}`}
                          >
                            {metric.change}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 flex items-baseline justify-end gap-1.5 text-right text-[28px] leading-[32px] font-bold text-gray-900">
                        {metric.change &&
                        ["방문 중", "방문 종료"].includes(metric.label) ? (
                          <span
                            className={`self-center rounded-button-compact px-2 py-0.5 text-body-5 font-bold leading-[18px] ring-1 ${
                              metricInlineLabelTones[metric.label]
                            }`}
                          >
                            {metric.change}
                          </span>
                        ) : null}
                        {metric.value}
                        <span className="ml-0.5 -translate-y-px align-baseline text-body-1 font-bold leading-none text-gray-400">
                          건
                        </span>
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <div className="grid gap-6">
              <section className="rounded-[18px] bg-gray-0 p-4 shadow-level-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="flex items-center gap-2 text-heading-2 font-bold text-gray-900">
                      <SectionTitleIcon name="user" />
                      최근 도착 방문객
                    </h2>
                    <p className="mt-1 text-body-5 font-medium text-gray-600">
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
                  <div className="hidden grid-cols-[0.7fr_1fr_0.9fr_1fr_0.55fr_0.55fr_0.7fr] border-b border-gray-100 bg-neutral-30 px-4 py-2 text-body-5 font-bold uppercase tracking-wide text-gray-600 md:grid">
                    <span>방문객</span>
                    <span>회사</span>
                    <span>방문 목적</span>
                    <span>담당자</span>
                    <span>입장</span>
                    <span>퇴장</span>
                    <span className="pl-3">상태</span>
                  </div>
                  <div className="h-[260px] divide-y divide-gray-60 overflow-y-scroll overscroll-contain [scrollbar-gutter:stable]">
                    {recentVisitors.map((visitor) => (
                      <article
                        className="grid gap-3 px-4 py-3 transition hover:bg-neutral-30 md:grid-cols-[0.7fr_1fr_0.9fr_1fr_0.55fr_0.55fr_0.7fr] md:items-center"
                        key={`${visitor.name}-${visitor.time}`}
                      >
                        <div>
                          <p className="text-body-2 font-bold text-gray-900">
                            {visitor.name}
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
                          <span className="cursor-pointer hover:underline">
                            {visitor.host}
                          </span>
                        </div>
                        <p className="text-body-3 font-bold text-gray-900">
                          {visitor.time}
                          <span className="ml-2 text-gray-500">
                            {visitor.badge}
                          </span>
                        </p>
                        <p className="text-body-3 font-bold text-gray-900">
                          {visitor.exitTime}
                        </p>
                        <span
                          className={`w-fit rounded-button-compact px-3 py-1 text-body-5 font-bold ${
                            statusTones[visitor.status]
                          }`}
                        >
                          {visitor.status}
                        </span>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

            </div>

            <div className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
              <MiniTrendChart />

              <section className="h-full rounded-[18px] bg-gray-0 p-5 shadow-level-1">
                <h2 className="flex items-center gap-2 text-heading-2 font-bold text-gray-900">
                  <SectionTitleIcon name="alert" />
                  예외/이슈 발생 알림
                </h2>
                <div className="mt-5 space-y-0">
                  {alerts.map((alert, index) => (
                    <article className="relative flex gap-3 pb-2 last:pb-0" key={alert.title}>
                      <div className="flex flex-col items-center">
                        <span
                          className={`mt-1 h-2.5 w-2.5 rounded-full ${
                            index === 1 ? "bg-negative-400" : "bg-blue-500"
                          }`}
                        />
                        {index < alerts.length - 1 ? (
                          <span className="mt-1 h-full w-px flex-1 bg-gray-100" />
                        ) : null}
                      </div>
                      <div className="min-w-0 flex-1 rounded-button border border-gray-60 bg-neutral-30 px-4 py-3">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-body-3 font-bold text-gray-900">
                            {alert.title}
                          </p>
                          <span className="shrink-0 text-body-5 font-medium text-gray-500">
                            {index === 0 ? "14:08" : index === 1 ? "13:52" : "13:30"}
                          </span>
                        </div>
                        <p className="mt-1 text-body-3 leading-[21px] text-gray-600">
                          {alert.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <section className="rounded-[18px] bg-gray-0 p-5 shadow-level-1">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="flex items-center gap-2 text-heading-2 font-bold text-gray-900">
                    <SectionTitleIcon name="grid" />
                    자주쓰는 메뉴
                  </h2>
                </div>
                <button className="rounded-button-compact border border-blue-500 px-3 py-1.5 text-body-5 font-bold text-blue-500 transition hover:bg-blue-50">
                  + 추가하기
                </button>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {shortcuts.map((shortcut) => (
                  <button
                    className="rounded-button border border-gray-100 bg-gray-0 px-4 py-4 text-left text-body-3 font-bold text-gray-800 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500"
                    key={shortcut}
                  >
                    {shortcut}
                  </button>
                ))}
              </div>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}

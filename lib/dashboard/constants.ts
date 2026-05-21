import type {
  DashboardAlert,
  DashboardMetric,
  RecentVisitor,
  SidebarNavItem,
} from "./types";

/** Figma SNB — 220px */
export const SIDEBAR_WIDTH_PX = 220;

/** Figma Header.svg — 60px */
export const HEADER_HEIGHT_PX = 60;

export const DASHBOARD_HEADER_TITLE = "더존 을지타워 방문객 시스템 관리자";
export const DASHBOARD_HEADER_DATETIME = "2026.05.20 수요일 14:20";
export const DASHBOARD_HEADER_USER_NAME = "김더존";

export const DASHBOARD_METRICS: DashboardMetric[] = [
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

export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  {
    label: "대시보드",
    href: "#dashboard",
    iconSrc: "/icons/ic_home.svg",
    active: true,
  },
  { label: "정책/권한 설정", href: "#policy", iconSrc: "/icons/ic_set.svg" },
  {
    label: "방문객 조회 및 수정",
    href: "#visitors",
    iconSrc: "/icons/ic_user_search.svg",
  },
  {
    label: "예외 승인/이슈 대응",
    href: "#issues",
    iconSrc: "/icons/ic_error.svg",
  },
  {
    label: "방문객 현황 리포트",
    href: "#report",
    iconSrc: "/icons/ic_graph.svg",
  },
  { label: "방문증 관리", href: "#pass", iconSrc: "/icons/ic_id.svg" },
];

export const RECENT_VISITORS: RecentVisitor[] = [
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
  {
    name: "정예린",
    badge: "B-0124",
    company: "네오소프트",
    purpose: "계약 검토",
    host: "법무팀 김지훈",
    time: "12:18",
    exitTime: "-",
  },
  {
    name: "송하늘",
    badge: "B-0122",
    company: "아이티파트너스",
    purpose: "시스템 점검",
    host: "인프라운영팀 박수빈",
    time: "12:05",
    exitTime: "-",
  },
  {
    name: "윤채원",
    badge: "B-0120",
    company: "글로벌 물류",
    purpose: "납품 확인",
    host: "재무팀 강도현",
    time: "11:52",
    exitTime: "12:40",
  },
  {
    name: "임도현",
    badge: "B-0118",
    company: "한빛 컨설팅",
    purpose: "교육 진행",
    host: "서비스기획팀 윤지아",
    time: "11:38",
    exitTime: "-",
  },
  {
    name: "조서연",
    badge: "B-0116",
    company: "미래전자",
    purpose: "제품 시연",
    host: "플랫폼사업부 이서연",
    time: "11:24",
    exitTime: "-",
  },
  {
    name: "배준호",
    badge: "B-0114",
    company: "세림 인쇄",
    purpose: "자료 인쇄",
    host: "정보보호팀 최현우",
    time: "11:10",
    exitTime: "11:55",
  },
  {
    name: "홍지아",
    badge: "B-0112",
    company: "라온 미디어",
    purpose: "촬영 협조",
    host: "서비스기획팀 윤지아",
    time: "10:58",
    exitTime: "-",
  },
  {
    name: "서민재",
    badge: "B-0110",
    company: "동방 엔지니어링",
    purpose: "설비 점검",
    host: "인프라운영팀 박수빈",
    time: "10:44",
    exitTime: "-",
  },
  {
    name: "권수아",
    badge: "B-0108",
    company: "프라임 솔루션",
    purpose: "데모 미팅",
    host: "플랫폼사업부 이서연",
    time: "10:30",
    exitTime: "11:15",
  },
];

/** Contents02 — thead 28px + tbody row 40px × 7행 (하단 구분선 = 박스 테두리) */
export const VISITOR_TABLE_HEADER_HEIGHT_PX = 28;
export const VISITOR_TABLE_ROW_HEIGHT_PX = 40;
export const VISITOR_TABLE_VISIBLE_ROWS = 7;
export const VISITOR_TABLE_VIEWPORT_HEIGHT_PX =
  VISITOR_TABLE_HEADER_HEIGHT_PX +
  VISITOR_TABLE_ROW_HEIGHT_PX * VISITOR_TABLE_VISIBLE_ROWS;

/** Contents02.svg column widths (1023px frame) */
export const VISITOR_TABLE_COL_WIDTHS = [
  "11.1%",
  "10.9%",
  "17.4%",
  "15.7%",
  "21.5%",
  "9.4%",
  "10%",
  "76px",
] as const;

export const DASHBOARD_ALERTS: DashboardAlert[] = [
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
];

export const EULJI_TOWER_ADDRESS = "서울 중구 을지로 29 더존을지타워";
export const PROFILE_AVATAR_SRC = "/icons/Avatar.png";

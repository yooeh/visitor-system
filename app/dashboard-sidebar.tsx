import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
  iconSrc: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "대시보드",
    href: "#dashboard",
    iconSrc: "/icons/ic_home.svg",
    active: true,
  },
  {
    label: "정책/권한 설정",
    href: "#policy",
    iconSrc: "/icons/ic_set.svg",
  },
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
  {
    label: "방문증 관리",
    href: "#pass",
    iconSrc: "/icons/ic_id.svg",
  },
];

function NavIcon({ src }: { src: string }) {
  return (
    <Image
      alt=""
      aria-hidden
      className="h-[18px] w-[18px] shrink-0"
      height={18}
      src={src}
      width={18}
    />
  );
}

export function DashboardSidebar() {
  return (
    <aside className="sticky top-[60px] hidden h-[calc(100vh-60px)] w-[220px] shrink-0 flex-col border-r border-gray-100 bg-gray-0 lg:flex">
      <nav
        aria-label="주요 메뉴"
        className="flex flex-col gap-2.5 px-3 pt-[18px]"
      >
        {navItems.map((item) => (
          <a
            className={`flex h-9 w-full items-center gap-0 rounded-[4px] pl-2 pr-2 text-body-3 transition-colors ${
              item.active
                ? "bg-blue-500/5 font-bold text-blue-500"
                : "font-medium text-[#333333] hover:bg-neutral-30"
            }`}
            href={item.href}
            key={item.href}
          >
            <NavIcon src={item.iconSrc} />
            <span className="truncate pl-1">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

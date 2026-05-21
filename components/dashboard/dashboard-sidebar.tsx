import Image from "next/image";
import { SIDEBAR_NAV_ITEMS, SIDEBAR_WIDTH_PX } from "@/lib/dashboard/constants";

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
    <aside
      className="sticky top-[60px] hidden h-[calc(100vh-60px)] shrink-0 flex-col border-r border-gray-100 bg-gray-0 lg:flex"
      style={{ width: SIDEBAR_WIDTH_PX }}
    >
      <nav
        aria-label="주요 메뉴"
        className="flex flex-col gap-2.5 px-3 pt-[18px]"
      >
        {SIDEBAR_NAV_ITEMS.map((item) => (
          <a
            className={`flex h-9 w-full items-center gap-0 rounded-[4px] pl-2 pr-2 text-body-3 transition-colors ${
              item.active
                ? "bg-blue-500/5 font-bold text-blue-500"
                : "font-medium text-gray-800 hover:bg-neutral-30"
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

import { HeaderProfileTrigger } from "@/components/dashboard/header-profile-trigger";
import {
  DASHBOARD_HEADER_DATETIME,
  DASHBOARD_HEADER_TITLE,
  HEADER_HEIGHT_PX,
} from "@/lib/dashboard/constants";

/** Figma Header.svg — 1440×60, px 24, border #E1E1E1 */
export function DashboardHeader() {
  return (
    <header
      className="sticky top-0 z-10 flex w-full shrink-0 items-center justify-between gap-4 border-b border-gray-100 bg-gray-0 px-6"
      style={{ height: HEADER_HEIGHT_PX }}
    >
      <h1 className="min-w-0 truncate text-heading-1 font-bold leading-none text-gray-900">
        {DASHBOARD_HEADER_TITLE}
      </h1>

      <div className="flex shrink-0 items-center gap-6">
        <p className="shrink-0 whitespace-nowrap text-body-5 leading-none text-gray-600">
          {DASHBOARD_HEADER_DATETIME}
        </p>
        <HeaderProfileTrigger />
      </div>
    </header>
  );
}
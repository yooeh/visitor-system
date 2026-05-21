import Image from "next/image";
import {
  DASHBOARD_HEADER_USER_NAME,
  PROFILE_AVATAR_SRC,
} from "@/lib/dashboard/constants";

/** Header.svg — 18×18 chevron, fill #777777 */
function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0 text-gray-600"
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

type HeaderProfileTriggerProps = {
  userName?: string;
};

export function HeaderProfileTrigger({
  userName = DASHBOARD_HEADER_USER_NAME,
}: HeaderProfileTriggerProps) {
  return (
    <button
      className="flex items-center gap-2 rounded-[4px] transition-colors hover:bg-neutral-30"
      type="button"
    >
      <Image
        alt=""
        aria-hidden
        className="h-8 w-8 shrink-0 rounded-[12px] object-cover ring-1 ring-black/[0.06]"
        height={32}
        src={PROFILE_AVATAR_SRC}
        width={32}
      />
      <span className="text-body-3 font-semibold text-gray-900">{userName}</span>
      <ChevronDownIcon />
    </button>
  );
}
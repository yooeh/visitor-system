import Image from "next/image";

const HOST_AVATAR_SRC = "/icons/Atomic/Atomic/Avatar.svg";

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

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-[60px] w-full items-center justify-between gap-4 border-b border-gray-100 bg-gray-0 px-6">
      <h1 className="min-w-0 truncate text-heading-1 font-bold text-gray-900">
        더존 을지타워 방문객 시스템 관리자
      </h1>

      <div className="flex shrink-0 items-center gap-6">
        <p className="hidden text-body-5 text-gray-600 sm:block">
          2026.05.20 수요일 14:20
        </p>

        <button
          className="flex items-center gap-2 rounded-[4px] py-1 pl-0 pr-0.5 transition-colors hover:bg-neutral-30"
          type="button"
        >
          <Image
            alt=""
            aria-hidden
            className="h-8 w-8 shrink-0 rounded-[12px] object-cover ring-1 ring-black/[0.06]"
            height={32}
            src={HOST_AVATAR_SRC}
            width={32}
          />
          <span className="text-body-3 font-semibold text-gray-900">김더존</span>
          <ChevronDownIcon />
        </button>
      </div>
    </header>
  );
}

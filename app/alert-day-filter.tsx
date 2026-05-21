"use client";

import { useState } from "react";

export function AlertDayFilter() {
  const [period, setPeriod] = useState<"today" | "yesterday">("today");

  return (
    <div
      className="flex shrink-0 items-center gap-1"
      role="group"
      aria-label="알림 기간"
    >
      <button
        type="button"
        onClick={() => setPeriod("today")}
        className={`h-7 rounded-full px-3 text-body-4 leading-none transition ${
          period === "today"
            ? "bg-[#4A4A4A] font-bold text-gray-0"
            : "bg-neutral-30 font-medium text-gray-600"
        }`}
      >
        오늘
      </button>
      <button
        type="button"
        onClick={() => setPeriod("yesterday")}
        className={`h-7 rounded-full px-3 text-body-4 leading-none transition ${
          period === "yesterday"
            ? "bg-[#4A4A4A] font-bold text-gray-0"
            : "bg-neutral-30 font-medium text-gray-600"
        }`}
      >
        어제
      </button>
    </div>
  );
}

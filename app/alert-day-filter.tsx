"use client";

import { useState } from "react";

export function AlertDayFilter() {
  const [period, setPeriod] = useState<"today" | "yesterday">("today");

  return (
    <div className="flex shrink-0 items-center gap-1.5" role="group" aria-label="알림 기간">
      <button
        type="button"
        onClick={() => setPeriod("today")}
        className={`rounded-full px-4 py-1.5 text-body-3 transition ${
          period === "today"
            ? "bg-gray-900 font-bold text-gray-0"
            : "bg-neutral-30 font-medium text-gray-600"
        }`}
      >
        오늘
      </button>
      <button
        type="button"
        onClick={() => setPeriod("yesterday")}
        className={`rounded-full px-4 py-1.5 text-body-3 transition ${
          period === "yesterday"
            ? "bg-gray-900 font-bold text-gray-0"
            : "bg-neutral-30 font-medium text-gray-600"
        }`}
      >
        어제
      </button>
    </div>
  );
}

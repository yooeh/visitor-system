"use client";

import { useEffect, useRef, useState } from "react";

const trend = [
  { day: "월", visits: 82 },
  { day: "화", visits: 96 },
  { day: "수", visits: 71 },
  { day: "목", visits: 100 },
  { day: "금", visits: 88 },
  { day: "토", visits: 0 },
  { day: "일", visits: 0 },
];

const BAR_DURATION_MS = 720;
const BAR_STAGGER_MS = 110;
const LINE_DRAW_MS = 950;
const DOT_STAGGER_MS = 85;

function ChartTitleIcon() {
  return (
    <span className="text-gray-900">
      <svg
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M4 19V5m0 14h16M8 16v-5m4 5V8m4 8v-7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    </span>
  );
}

export function MiniTrendChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const polylineRef = useRef<SVGPolylineElement>(null);
  const [inView, setInView] = useState(false);
  const [lineLength, setLineLength] = useState(0);

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

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    requestAnimationFrame(() => {
      if (polylineRef.current) {
        setLineLength(polylineRef.current.getTotalLength());
      }
    });
  }, [inView]);

  return (
    <div className="h-full rounded-[18px] bg-gray-0 p-5 shadow-level-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-2 text-heading-2 font-bold text-gray-900">
            <ChartTitleIcon />
            최근 7일 추이
          </h2>
          <p className="mt-3 text-body-3 font-medium text-gray-600">
            일 평균 방문 <span className="font-bold text-blue-500">101</span>건
          </p>
        </div>
        <span className="mt-8 rounded-button-compact bg-positive-50 px-3 py-1 text-body-5 font-bold leading-[18px] text-positive-500">
          전주 대비 +8.2%
        </span>
      </div>
      <div
        ref={chartRef}
        className="mt-3 overflow-hidden rounded-[14px] bg-neutral-30 px-4 pt-3 pb-6"
      >
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
                <line
                  key={tick}
                  stroke="#EDEDED"
                  strokeWidth="1"
                  x1="60"
                  x2="760"
                  y1={y}
                  y2={y}
                />
              );
            })}
            {trend.map((item, index) => {
              const x = getX(index);
              const y =
                chartBottom - (Math.min(item.visits, 100) / 100) * chartScale;
              const barHeight = chartBottom - y;

              return (
                <rect
                  key={`bar-${item.day}`}
                  fill="#97BAFF"
                  height={barHeight}
                  opacity="0.65"
                  rx="6"
                  width="22"
                  x={x - 11}
                  y={y}
                  style={{
                    transform: inView ? "scaleY(1)" : "scaleY(0)",
                    transformBox: "fill-box",
                    transformOrigin: "center bottom",
                    transition: `transform ${BAR_DURATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1) ${index * BAR_STAGGER_MS}ms`,
                  }}
                />
              );
            })}
            <polyline
              ref={polylineRef}
              fill="none"
              points={points}
              stroke="#105AFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              style={{
                opacity: inView ? 1 : 0,
                strokeDasharray: lineLength || undefined,
                strokeDashoffset: inView ? 0 : lineLength,
                transition:
                  lineLength > 0
                    ? `stroke-dashoffset ${LINE_DRAW_MS}ms ease-out, opacity 250ms ease-out`
                    : "opacity 250ms ease-out",
              }}
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
            const y =
              chartBottom - (Math.min(item.visits, 100) / 100) * chartScale;

            return (
              <span
                className="absolute h-2.5 w-2.5 rounded-full border-[3px] border-blue-500 bg-gray-0 transition-all duration-400 ease-out"
                key={`dot-${item.day}`}
                style={{
                  left: `${(x / 800) * 100}%`,
                  top: `${(y / chartViewBoxHeight) * 100}%`,
                  opacity: inView ? 1 : 0,
                  transform: `translate(-50%, -50%) scale(${inView ? 1 : 0})`,
                  transitionDelay: inView ? `${index * DOT_STAGGER_MS}ms` : "0ms",
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

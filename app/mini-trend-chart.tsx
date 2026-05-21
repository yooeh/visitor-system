"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const trend = [
  { day: "월", visits: 81 },
  { day: "화", visits: 87 },
  { day: "수", visits: 77 },
  { day: "목", visits: 85 },
  { day: "금", visits: 72 },
  { day: "토", visits: 0 },
  { day: "일", visits: 0 },
] as const;

const BAR_DURATION_MS = 720;
const BAR_STAGGER_MS = 110;
const LINE_DRAW_MS = 950;
const DOT_STAGGER_MS = 85;

const CHART_BOTTOM = 191;
const CHART_TOP = 24;
const CHART_SCALE = CHART_BOTTOM - CHART_TOP;
const BAR_WIDTH = 18;
const BAR_TOP_RADIUS = 4;
const REF_VIEWBOX_WIDTH = 556;
const VIEWBOX_HEIGHT = 220;
const DAY_LABEL_Y = 207;
const Y_AXIS_WIDTH = 32;
const PLOT_GAP = 14;
const PLOT_LEFT_REF = Y_AXIS_WIDTH + PLOT_GAP;
const PLOT_RIGHT_REF = REF_VIEWBOX_WIDTH - 16;
const Y_LABEL_X_REF = Y_AXIS_WIDTH - 2;
const DOT_RADIUS = 5;
const DAY_COUNT = trend.length;

function getChartLayout(viewWidth: number) {
  const scale = viewWidth / REF_VIEWBOX_WIDTH;

  return {
    viewWidth,
    plotLeft: PLOT_LEFT_REF * scale,
    plotRight: PLOT_RIGHT_REF * scale,
    yLabelX: Y_LABEL_X_REF * scale,
    barWidth: BAR_WIDTH * scale,
    barTopRadius: BAR_TOP_RADIUS * scale,
    getX: (index: number) => {
      if (DAY_COUNT <= 1) return PLOT_LEFT_REF * scale;
      return (
        PLOT_LEFT_REF * scale +
        (index / (DAY_COUNT - 1)) * (PLOT_RIGHT_REF - PLOT_LEFT_REF) * scale
      );
    },
  };
}

const GRID_COLOR = "#E1E1E1";
const BAR_COLOR = "#A9C6FF";
const BAR_ZERO_COLOR = "#447CFC";
const LINE_COLOR = "#2486F2";

function getY(visits: number) {
  return CHART_BOTTOM - (Math.min(visits, 100) / 100) * CHART_SCALE;
}

function roundedBarPath(
  cx: number,
  top: number,
  bottom: number,
  width: number,
  topRadius = BAR_TOP_RADIUS,
) {
  const half = width / 2;
  const left = cx - half;
  const right = cx + half;
  const radius = Math.min(topRadius, half);

  if (bottom - top < 2) {
    return `M ${left} ${bottom} H ${right} V ${bottom - 1} H ${left} Z`;
  }

  return [
    `M ${left} ${bottom}`,
    `V ${top + radius}`,
    `Q ${left} ${top} ${left + radius} ${top}`,
    `H ${right - radius}`,
    `Q ${right} ${top} ${right} ${top + radius}`,
    `V ${bottom}`,
    "Z",
  ].join(" ");
}

export function MiniTrendChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const polylineRef = useRef<SVGPolylineElement>(null);
  const [inView, setInView] = useState(false);
  const [lineLength, setLineLength] = useState(0);
  const [viewWidth, setViewWidth] = useState(REF_VIEWBOX_WIDTH);

  const layout = getChartLayout(viewWidth);
  const yTicks = [0, 20, 40, 60, 80, 100];

  const points = trend
    .map((item, index) => {
      const x = layout.getX(index);
      const y = getY(item.visits);
      return `${x},${y}`;
    })
    .join(" ");

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      const nextWidth = entry.contentRect.width;
      if (nextWidth > 0) {
        setViewWidth(nextWidth);
      }
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

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
  }, [inView, viewWidth, points]);

  return (
    <div className="flex h-[300px] w-full min-w-0 flex-col rounded-[18px] bg-gray-0 p-5 shadow-level-1">
      <div className="flex shrink-0 flex-wrap items-center gap-x-2 gap-y-1">
        <h2 className="flex items-center gap-2 text-heading-2 font-bold text-gray-900">
          <Image
            alt=""
            aria-hidden
            className="h-6 w-6 shrink-0 opacity-80"
            height={24}
            src="/icons/ic_graph_24.svg"
            width={24}
          />
          최근 7일 추이
        </h2>
        <span aria-hidden className="h-4 w-px bg-gray-200" />
        <p className="text-heading-2 font-medium text-gray-600">
          일 평균 방문 <span className="font-bold text-blue-500">101</span>건
        </p>
      </div>

      <div className="mt-4 min-h-0 w-full flex-1" ref={chartRef}>
        <svg
          className="block h-full w-full font-light"
          preserveAspectRatio="xMinYMin meet"
          role="img"
          style={{ fontWeight: 300 }}
          viewBox={`0 0 ${layout.viewWidth} ${VIEWBOX_HEIGHT}`}
        >
          <title>최근 7일 방문 추이 그래프</title>
          <defs>
            <filter
              height="200%"
              id="trend-dot-shadow"
              width="200%"
              x="-50%"
              y="-50%"
            >
              <feDropShadow
                dx="0"
                dy="1"
                floodColor="#2486F2"
                floodOpacity="0.2"
                stdDeviation="1.5"
              />
            </filter>
          </defs>

          {yTicks.map((tick) => {
            const y = getY(tick);
            const isBaseline = tick === 0;

            return (
              <g key={tick}>
                <text
                  dominantBaseline="middle"
                  fill="#777777"
                  fontSize="10"
                  fontWeight="300"
                  textAnchor="end"
                  x={layout.yLabelX}
                  y={y}
                >
                  {tick}
                </text>
                <line
                  stroke={GRID_COLOR}
                  strokeDasharray={isBaseline ? undefined : "3 5"}
                  strokeWidth={isBaseline ? 1 : 1}
                  x1={layout.plotLeft}
                  x2={layout.plotRight}
                  y1={y}
                  y2={y}
                />
              </g>
            );
          })}

          {trend.map((item, index) => {
            const x = layout.getX(index);
            const y = getY(item.visits);
            const barTop = item.visits === 0 ? CHART_BOTTOM - 1 : y;
            const fill = item.visits === 0 ? BAR_ZERO_COLOR : BAR_COLOR;

            return (
              <path
                d={roundedBarPath(
                  x,
                  barTop,
                  CHART_BOTTOM,
                  layout.barWidth,
                  layout.barTopRadius,
                )}
                fill={fill}
                key={`bar-${item.day}`}
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
            stroke={LINE_COLOR}
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

          {trend.map((item, index) => {
            const x = layout.getX(index);
            const y = getY(item.visits);
            const dotRadius = inView ? DOT_RADIUS : 0;
            const dotDelay = inView ? `${index * DOT_STAGGER_MS}ms` : "0ms";

            return (
              <g filter="url(#trend-dot-shadow)" key={`dot-${item.day}`}>
                <circle
                  cx={x}
                  cy={y}
                  fill="white"
                  r={dotRadius}
                  style={{
                    transition: `r 400ms ease-out ${dotDelay}`,
                  }}
                />
                <circle
                  cx={x}
                  cy={y}
                  fill="none"
                  r={dotRadius}
                  stroke={LINE_COLOR}
                  strokeWidth="3"
                  style={{
                    transition: `r 400ms ease-out ${dotDelay}`,
                  }}
                />
              </g>
            );
          })}

          {trend.map((item, index) => (
            <text
              dominantBaseline="middle"
              fill="#666666"
              fontSize="14"
              fontWeight="500"
              key={`day-${item.day}`}
              textAnchor="middle"
              x={layout.getX(index)}
              y={DAY_LABEL_Y}
            >
              {item.day}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

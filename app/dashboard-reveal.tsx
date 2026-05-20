import type { CSSProperties, ReactNode } from "react";

type DashboardRevealProps = {
  children: ReactNode;
  delayMs: number;
  className?: string;
};

export function DashboardReveal({
  children,
  delayMs,
  className = "",
}: DashboardRevealProps) {
  return (
    <div
      className={`animate-dashboard-reveal ${className}`}
      style={{ "--reveal-delay": `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

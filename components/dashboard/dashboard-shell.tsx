import type { CSSProperties, ReactNode } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { HEADER_HEIGHT_PX } from "@/lib/dashboard/constants";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-800">
      <DashboardHeader />
      <div
        className="flex min-h-[calc(100vh-var(--header-height))]"
        style={
          { "--header-height": `${HEADER_HEIGHT_PX}px` } as CSSProperties
        }
      >
        <DashboardSidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}

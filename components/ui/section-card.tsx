import type { ReactNode } from "react";

type SectionCardProps = {
  children: ReactNode;
  className?: string;
  /** Figma Contents03/04 — 18px radius + shadow */
  variant?: "panel" | "flat";
  as?: "section" | "div";
};

const variantClass: Record<NonNullable<SectionCardProps["variant"]>, string> = {
  panel: "rounded-[18px] bg-gray-0 p-5 shadow-level-1",
  flat: "rounded-[12px] bg-gray-0 p-4 shadow-level-1",
};

export function SectionCard({
  children,
  className = "",
  variant = "flat",
  as: Tag = "section",
}: SectionCardProps) {
  return (
    <Tag className={`flex w-full min-w-0 flex-col ${variantClass[variant]} ${className}`}>
      {children}
    </Tag>
  );
}

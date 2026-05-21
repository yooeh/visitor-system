import type { ReactNode } from "react";
import { AppIcon } from "@/components/ui/app-icon";

type SectionHeadingProps = {
  title: string;
  iconSrc?: string;
  meta?: ReactNode;
  actions?: ReactNode;
};

export function SectionHeading({
  title,
  iconSrc,
  meta,
  actions,
}: SectionHeadingProps) {
  return (
    <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 flex-wrap items-center gap-1.5">
        <h2 className="flex items-center gap-1.5 text-heading-2 font-bold text-gray-900">
          {iconSrc ? (
            <AppIcon className="h-6 w-6 opacity-80" size={24} src={iconSrc} />
          ) : null}
          {title}
        </h2>
        {meta ? (
          <>
            <span
              aria-hidden
              className="mx-0.5 hidden h-4 w-px shrink-0 bg-gray-100 sm:block"
            />
            {meta}
          </>
        ) : null}
      </div>
      {actions ? (
        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          {actions}
        </div>
      ) : null}
    </div>
  );
}

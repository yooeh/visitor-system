type VisitorStatusBadgeProps = {
  exitTime: string;
};

const baseClass =
  "inline-flex h-6 w-fit items-center justify-center rounded-[4px] px-[6px] text-body-5 font-bold leading-none";

export function VisitorStatusBadge({ exitTime }: VisitorStatusBadgeProps) {
  if (exitTime !== "-") {
    return (
      <span className={`${baseClass} bg-gray-50 text-gray-600`}>방문종료</span>
    );
  }

  return (
    <span className={`${baseClass} bg-blue-50 text-blue-500`}>출입완료</span>
  );
}

import Image from "next/image";

type AppIconProps = {
  src: string;
  className?: string;
  size?: number;
};

export function AppIcon({
  src,
  className = "",
  size = 18,
}: AppIconProps) {
  return (
    <Image
      alt=""
      aria-hidden
      className={`shrink-0 ${className}`}
      height={size}
      src={src}
      width={size}
    />
  );
}

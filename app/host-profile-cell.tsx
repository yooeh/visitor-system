"use client";

import Image from "next/image";
import { useState } from "react";
import { ProfileModal } from "./profile-modal";

const HOST_AVATAR_SRC = "/icons/Avatar.png";

function HostAvatar() {
  return (
    <Image
      alt=""
      aria-hidden
      className="h-6 w-6 shrink-0 rounded-[10px] object-cover ring-1 ring-black/[0.06]"
      height={24}
      src={HOST_AVATAR_SRC}
      width={24}
    />
  );
}

type HostProfileCellProps = {
  host: string;
};

export function HostProfileCell({ host }: HostProfileCellProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="flex min-w-0 cursor-pointer items-center gap-2 rounded px-0.5 text-left transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-500"
        type="button"
        onClick={() => setOpen(true)}
      >
        <HostAvatar />
        <span className="truncate text-body-3 font-medium text-gray-800 underline-offset-2 hover:underline">
          {host}
        </span>
      </button>
      <ProfileModal host={host} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

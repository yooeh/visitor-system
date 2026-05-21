"use client";

import Image from "next/image";
import { useEffect, useId, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { AppIcon } from "@/components/ui/app-icon";
import {
  EULJI_TOWER_ADDRESS,
  PROFILE_AVATAR_SRC,
  PROFILE_ROW_ICONS,
} from "@/lib/dashboard/constants";

const PROFILE_MODAL_WIDTH = 600;
const PROFILE_MODAL_HEIGHT = 400;
import type { ProfileData } from "@/lib/dashboard/types";
const PROFILE_AVATAR_WIDTH = 80;
const PROFILE_AVATAR_HEIGHT = 96;

function parseHost(host: string) {
  const parts = host.trim().split(/\s+/);
  const name = parts.at(-1) ?? host;
  const department = parts.slice(0, -1).join(" ");
  return { name, department };
}

const PROFILE_OVERRIDES: Record<string, Partial<ProfileData>> = {
  이서연: {
    rank: "대리",
    name: "이서연",
    orgPath: "더존비즈온 > 플랫폼사업부 > 플랫폼기획팀",
    userId: "iseoyeon",
    project: "방문객 시스템 운영",
    officePhone: "02-6233-0312 (단축번호:0312)",
    mobile: "010-2345-6789",
    workEmail: "iseoyeon@douzone.com",
    employeeId: "A2048",
    joinDate: "2019년 03월 15일",
    birthday: "1992년 07월 22일",
    statusMessage: "방문 예약 확인 부탁드립니다.",
  },
  최현우: {
    rank: "과장",
    name: "최현우",
    orgPath: "더존비즈온 > 정보보호팀",
    userId: "choihw",
    project: "보안 점검·감사",
    officePhone: "02-6233-0288 (단축번호:0288)",
    workEmail: "choihw@douzone.com",
    employeeId: "A1832",
  },
  강도현: {
    rank: "차장",
    name: "강도현",
    orgPath: "더존비즈온 > 재무팀",
    userId: "kangdh",
    workEmail: "kangdh@douzone.com",
  },
  박수빈: {
    rank: "사원",
    name: "박수빈",
    orgPath: "더존비즈온 > 인프라운영팀",
    userId: "parksb",
    workEmail: "parksb@douzone.com",
  },
  윤지아: {
    rank: "대리",
    name: "윤지아",
    orgPath: "더존비즈온 > 서비스기획팀",
    userId: "yunja",
    workEmail: "yunja@douzone.com",
  },
};

function buildProfile(host: string): ProfileData {
  const { name, department } = parseHost(host);
  const base: ProfileData = {
    rank: "사원",
    name,
    orgPath: department
      ? `더존비즈온 > ${department.replace(/\s+/g, " > ")}`
      : "더존비즈온",
    userId: `${name}1234`,
    project: "Amaranth10 기획/설계",
    officePhone: "02-6233-0424 (단축번호:0424)",
    fax: "02-6233-5180",
    mobile: "010-1234-5678",
    homePhone: "02-3456-7890",
    workEmail: `${name.toLowerCase()}@douzone.com`,
    personalEmail: `${name.toLowerCase()}@naver.com`,
    address: EULJI_TOWER_ADDRESS,
    employeeId: "A1000",
    joinDate: "2016년 11월 08일",
    birthday: "1994년 12월 25일",
    qualifications: "대졸, 운전면허증 보유, OA 자격증 보유",
    statusMessage: "상태메시지",
  };

  return { ...base, ...PROFILE_OVERRIDES[name] };
}

type ProfileModalProps = {
  open: boolean;
  host: string;
  onClose: () => void;
};

function ProfileRowIcon({ src }: { src: string }) {
  return (
    <AppIcon className="h-4 w-4 object-contain opacity-90" size={16} src={src} />
  );
}

function ProfileRow({
  icon,
  children,
  className = "",
}: {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex min-w-0 items-start gap-2 ${className}`}>
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
        {icon}
      </span>
      <span className="min-w-0 text-body-4 leading-[18px] text-gray-800">
        {children}
      </span>
    </div>
  );
}

export function ProfileModal({ open, host, onClose }: ProfileModalProps) {
  const titleId = useId();
  const profile = buildProfile(host);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center overflow-auto p-4"
      role="dialog"
    >
      <div
        className="pointer-events-auto flex shrink-0 flex-col overflow-hidden rounded-[8px] bg-gray-0 shadow-level-3"
        style={{
          width: `min(${PROFILE_MODAL_WIDTH}px, calc(100vw - 32px))`,
          height: `min(${PROFILE_MODAL_HEIGHT}px, calc(100vh - 32px))`,
        }}
      >
        <header className="flex h-9 shrink-0 items-center justify-between bg-blue-500 px-3">
          <h2 className="text-body-2 font-bold text-gray-0" id={titleId}>
            프로필
          </h2>
          <button
            aria-label="프로필 닫기"
            className="flex h-8 w-8 items-center justify-center rounded text-gray-0 transition hover:bg-white/15"
            type="button"
            onClick={onClose}
          >
            <svg
              aria-hidden
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto p-3">
            <div className="h-full rounded-[8px] border border-gray-100 p-3">
              <div className="flex gap-3">
                <div className="flex w-[88px] shrink-0 flex-col items-center">
                  <div
                    className="overflow-hidden rounded-[4px] bg-blue-50"
                    style={{
                      width: PROFILE_AVATAR_WIDTH,
                      height: PROFILE_AVATAR_HEIGHT,
                    }}
                  >
                    <Image
                      alt={`${profile.name} 프로필 사진`}
                      className="h-full w-full object-cover object-top"
                      height={PROFILE_AVATAR_HEIGHT}
                      src={PROFILE_AVATAR_SRC}
                      width={PROFILE_AVATAR_WIDTH}
                    />
                  </div>
                  <p className="mt-2 text-center text-body-4 font-bold text-gray-900">
                    [{profile.rank}] {profile.name}
                  </p>
                </div>

                <div className="min-w-0 flex-1">
                  <ProfileRow
                    className="mb-2"
                    icon={
                      <ProfileRowIcon src={PROFILE_ROW_ICONS.company} />
                    }
                  >
                    <span className="inline-flex min-w-0 flex-wrap items-center gap-1">
                      {profile.orgPath}
                      <span className="text-gray-400">▾</span>
                    </span>
                  </ProfileRow>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.userId} />
                      }
                    >
                      {profile.userId}
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.project} />
                      }
                    >
                      {profile.project}
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.officePhone} />
                      }
                    >
                      {profile.officePhone}
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.fax} />
                      }
                    >
                      {profile.fax}
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.mobile} />
                      }
                    >
                      {profile.mobile}
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.homePhone} />
                      }
                    >
                      {profile.homePhone}
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.workEmail} />
                      }
                    >
                      {profile.workEmail}
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.personalEmail} />
                      }
                    >
                      {profile.personalEmail}
                    </ProfileRow>
                    <ProfileRow
                      className="col-span-2"
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.address} />
                      }
                    >
                      {profile.address}
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.employeeId} />
                      }
                    >
                      {profile.employeeId}
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.joinDate} />
                      }
                    >
                      {profile.joinDate}
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.birthday} />
                      }
                    >
                      <span className="inline-flex flex-wrap items-center gap-2">
                        {profile.birthday}
                        <button
                          className="rounded border border-gray-200 px-2 py-0.5 text-body-6 text-gray-700"
                          type="button"
                        >
                          선물하기
                        </button>
                      </span>
                    </ProfileRow>
                    <ProfileRow
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.qualifications} />
                      }
                    >
                      {profile.qualifications}
                    </ProfileRow>
                    <ProfileRow
                      className="col-span-2"
                      icon={
                        <ProfileRowIcon src={PROFILE_ROW_ICONS.statusMessage} />
                      }
                    >
                      {profile.statusMessage}
                    </ProfileRow>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>,
    document.body,
  );
}

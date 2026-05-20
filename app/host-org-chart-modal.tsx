"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  collectExpandedIds,
  getOrgTreeForHost,
  type OrgTreeNode,
} from "./host-org-data";

function BuildingIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 20V6l8-4 8 4v14H4Zm2-2h4v-4H6v4Zm6 0h4v-7h-4v7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3 w-3 shrink-0 text-gray-500"
      fill="none"
      viewBox="0 0 12 12"
    >
      {expanded ? (
        <path
          d="M2.5 4.5 6 8 9.5 4.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      ) : (
        <path
          d="M4.5 2.5 8 6 4.5 9.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      )}
    </svg>
  );
}

function OrgTreeRow({
  node,
  depth,
  expandedIds,
  onToggle,
}: {
  node: OrgTreeNode;
  depth: number;
  expandedIds: Set<string>;
  onToggle: (id: string) => void;
}) {
  const hasChildren = Boolean(node.children?.length);
  const isExpanded = expandedIds.has(node.id);
  const paddingLeft = 12 + depth * 16;

  if (node.type === "person") {
    return (
      <div
        className={`flex min-h-8 w-full items-center gap-1.5 px-3 py-1 ${
          node.selected
            ? "bg-blue-50 text-blue-500"
            : "text-gray-800"
        }`}
        style={{ paddingLeft }}
      >
        <Image
          alt=""
          className="h-5 w-5 shrink-0 rounded-full"
          height={20}
          src="/avatar-person.svg"
          width={20}
        />
        <span className="truncate text-body-3 font-medium leading-tight">
          {node.label}
          {node.role ? ` ${node.role}` : ""}
        </span>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => hasChildren && onToggle(node.id)}
        className="flex min-h-8 w-full items-center gap-1.5 px-3 py-1 text-left transition hover:bg-neutral-30"
        style={{ paddingLeft }}
      >
        {hasChildren ? (
          <ChevronIcon expanded={isExpanded} />
        ) : (
          <span className="w-3 shrink-0" />
        )}
        {node.type === "company" ? <BuildingIcon /> : null}
        <span className="text-body-3 font-medium text-gray-800">
          {node.label}
        </span>
        {node.count !== undefined ? (
          <span className="text-body-3 font-bold text-blue-500">
            {node.count}
          </span>
        ) : null}
      </button>
      {hasChildren && isExpanded
        ? node.children?.map((child) => (
            <OrgTreeRow
              depth={depth + 1}
              expandedIds={expandedIds}
              key={child.id}
              node={child}
              onToggle={onToggle}
            />
          ))
        : null}
    </>
  );
}

function OrgTreePanel({ root }: { root: OrgTreeNode }) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(collectExpandedIds(root)),
  );

  const toggle = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <div className="max-h-[320px] overflow-y-auto border border-gray-100 bg-gray-0">
      <OrgTreeRow
        depth={0}
        expandedIds={expandedIds}
        node={root}
        onToggle={toggle}
      />
    </div>
  );
}

type HostOrgChartModalProps = {
  host: string;
  open: boolean;
  onClose: () => void;
};

export function HostOrgChartModal({ host, open, onClose }: HostOrgChartModalProps) {
  const rootTree = useMemo(() => getOrgTreeForHost(host), [host]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="flex max-h-[calc(100vh-2rem)] w-full max-w-[420px] flex-col overflow-hidden rounded-[18px] bg-gray-0 shadow-level-3"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="org-chart-title"
      >
        <div className="relative shrink-0 px-5 py-4">
          <h2
            id="org-chart-title"
            className="text-center text-heading-2 font-bold text-gray-900"
          >
            조직도
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-gray-500 transition hover:text-gray-800"
            aria-label="닫기"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        <div className="shrink-0 px-5">
          <OrgTreePanel key={host} root={rootTree} />
        </div>

        <div className="shrink-0 px-5 pb-5 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="h-10 w-full rounded-button bg-blue-500 text-body-3 font-bold text-gray-0 transition hover:bg-blue-700"
          >
            확인
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function HostOrgChartTrigger({
  host,
  className = "",
}: {
  host: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`cursor-pointer text-left hover:underline ${className}`}
      >
        {host}
      </button>
      <HostOrgChartModal host={host} open={open} onClose={close} />
    </>
  );
}

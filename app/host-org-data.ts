export type OrgTreeNode = {
  id: string;
  type: "company" | "group" | "person";
  label: string;
  count?: number;
  role?: string;
  selected?: boolean;
  defaultExpanded?: boolean;
  children?: OrgTreeNode[];
};

const companyRoot = (children: OrgTreeNode[]): OrgTreeNode => ({
  id: "company",
  type: "company",
  label: "더존비즈온",
  count: 1678,
  defaultExpanded: true,
  children,
});

const collapsedDivision = (id: string) => ({
  id,
  type: "group" as const,
  label: "플랫폼사업부문",
  count: 25,
  defaultExpanded: false,
});

type OrgPerson = { id: string; name: string; role: string; selected?: boolean };

const ROLE_RANK: Record<string, number> = {
  Unit장: 0,
  팀장: 1,
  차장: 2,
  과장: 3,
  대리: 4,
  사원: 5,
  담당자: 1,
};

function sortByRole(members: OrgPerson[]): OrgPerson[] {
  return [...members].sort(
    (a, b) => (ROLE_RANK[a.role] ?? 99) - (ROLE_RANK[b.role] ?? 99),
  );
}

function buildPlatformTree(focus: {
  unitLabel: string;
  members: OrgPerson[];
  unitLeader?: { name: string; role: string };
}) {
  return companyRoot([
    {
      id: "platform-div",
      type: "group",
      label: "플랫폼사업부문",
      count: 25,
      defaultExpanded: true,
      children: [
        {
          id: "service-unit",
          type: "group",
          label: focus.unitLabel,
          count: focus.members.length + (focus.unitLeader ? 1 : 0),
          defaultExpanded: true,
          children: [
            ...(focus.unitLeader
              ? [
                  {
                    id: "unit-leader",
                    type: "group" as const,
                    label: "Unit장",
                    count: 1,
                    defaultExpanded: true,
                    children: [
                      {
                        id: "leader-person",
                        type: "person" as const,
                        label: focus.unitLeader.name,
                        role: focus.unitLeader.role,
                      },
                    ],
                  },
                ]
              : []),
            {
              id: "service-team",
              type: "group",
              label: focus.unitLabel,
              count: focus.members.length,
              defaultExpanded: true,
              children: sortByRole(focus.members).map((member) => ({
                id: member.id,
                type: "person" as const,
                label: member.name,
                role: member.role,
                selected: member.selected,
              })),
            },
          ],
        },
      ],
    },
    collapsedDivision("platform-div-2"),
    collapsedDivision("platform-div-3"),
    collapsedDivision("platform-div-4"),
  ]);
}

function buildSupportTree(focus: {
  divisionLabel: string;
  teamLabel: string;
  members: OrgPerson[];
}) {
  return companyRoot([
    {
      id: "support-div",
      type: "group",
      label: focus.divisionLabel,
      count: 18,
      defaultExpanded: true,
      children: [
        {
          id: "team",
          type: "group",
          label: focus.teamLabel,
          count: focus.members.length,
          defaultExpanded: true,
          children: sortByRole(focus.members).map((member) => ({
            id: member.id,
            type: "person" as const,
            label: member.name,
            role: member.role,
            selected: member.selected,
          })),
        },
      ],
    },
    collapsedDivision("support-div-2"),
    collapsedDivision("support-div-3"),
  ]);
}

const hostOrgTrees: Record<string, OrgTreeNode> = {
  "플랫폼사업부 이서연": buildPlatformTree({
    unitLabel: "서비스기획2Unit",
    unitLeader: { name: "박더존", role: "과장" },
    members: [
      { id: "p-kim", name: "김더존", role: "사원" },
      { id: "p-lee", name: "이더존", role: "사원" },
      { id: "p-park", name: "박더존", role: "사원" },
      { id: "focus-seoyeon", name: "이서연", role: "팀장", selected: true },
    ],
  }),
  "서비스기획팀 윤지아": buildPlatformTree({
    unitLabel: "서비스기획2Unit",
    unitLeader: { name: "박더존", role: "과장" },
    members: [
      { id: "p-ryu", name: "류하은", role: "대리" },
      { id: "p-shin", name: "신예준", role: "사원" },
      { id: "focus-yoon", name: "윤지아", role: "팀장", selected: true },
    ],
  }),
  "정보보호팀 최현우": buildSupportTree({
    divisionLabel: "경영지원부문",
    teamLabel: "정보보호팀",
    members: [
      { id: "p-han", name: "한소희", role: "대리" },
      { id: "p-oh", name: "오준석", role: "사원" },
      { id: "focus-choi", name: "최현우", role: "팀장", selected: true },
    ],
  }),
  "재무팀 강도현": buildSupportTree({
    divisionLabel: "경영지원부문",
    teamLabel: "재무팀",
    members: [
      { id: "p-yoon", name: "윤서진", role: "대리" },
      { id: "p-bae", name: "배지훈", role: "사원" },
      { id: "focus-kang", name: "강도현", role: "팀장", selected: true },
    ],
  }),
  "총무팀 정하린": buildSupportTree({
    divisionLabel: "경영지원부문",
    teamLabel: "총무팀",
    members: [
      { id: "p-jo", name: "조민아", role: "대리" },
      { id: "p-hong", name: "홍태양", role: "사원" },
      { id: "focus-jung", name: "정하린", role: "팀장", selected: true },
    ],
  }),
  "인프라운영팀 박수빈": buildSupportTree({
    divisionLabel: "클라우드사업부문",
    teamLabel: "인프라운영팀",
    members: [
      { id: "p-jang", name: "장우진", role: "대리" },
      { id: "p-noh", name: "노다은", role: "사원" },
      { id: "focus-park", name: "박수빈", role: "팀장", selected: true },
    ],
  }),
  "클라우드사업부 김도윤": buildSupportTree({
    divisionLabel: "클라우드사업부문",
    teamLabel: "클라우드사업부",
    members: [
      { id: "p-ijun", name: "이준호", role: "대리" },
      { id: "p-baek", name: "백서연", role: "사원" },
      { id: "focus-kim", name: "김도윤", role: "팀장", selected: true },
    ],
  }),
  "데이터사업팀 이지후": buildSupportTree({
    divisionLabel: "데이터사업부문",
    teamLabel: "데이터사업팀",
    members: [
      { id: "p-moon", name: "문지훈", role: "대리" },
      { id: "p-kwon", name: "권나래", role: "사원" },
      { id: "focus-lee", name: "이지후", role: "팀장", selected: true },
    ],
  }),
};

export function getOrgTreeForHost(host: string): OrgTreeNode {
  const focusName = host.split(" ").at(-1) ?? host;
  const team = host.split(" ").slice(0, -1).join(" ") || "담당 부서";

  return (
    hostOrgTrees[host] ??
    buildSupportTree({
      divisionLabel: "플랫폼사업부문",
      teamLabel: team,
      members: [
        {
          id: "focus-default",
          name: focusName,
          role: "담당자",
          selected: true,
        },
      ],
    })
  );
}

export function collectExpandedIds(
  node: OrgTreeNode,
  ids: string[] = [],
): string[] {
  if (node.defaultExpanded) ids.push(node.id);
  node.children?.forEach((child) => collectExpandedIds(child, ids));
  return ids;
}

export function collectSearchableText(node: OrgTreeNode): string {
  const self =
    node.type === "person"
      ? `${node.label} ${node.role ?? ""}`
      : node.label;
  const childText = node.children?.map(collectSearchableText).join(" ") ?? "";
  return `${self} ${childText}`.trim();
}

export function filterOrgTree(
  node: OrgTreeNode,
  query: string,
): OrgTreeNode | null {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return node;

  const labelMatch = collectSearchableText(node).toLowerCase().includes(normalized);
  const filteredChildren =
    node.children
      ?.map((child) => filterOrgTree(child, query))
      .filter((child): child is OrgTreeNode => child !== null) ?? [];

  if (labelMatch || filteredChildren.length > 0) {
    return {
      ...node,
      defaultExpanded: true,
      children: filteredChildren.length > 0 ? filteredChildren : node.children,
    };
  }

  return null;
}

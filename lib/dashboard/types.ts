export type DashboardMetric = {
  label: string;
  value: string;
  iconSrc: string;
  accent: string;
};

export type SidebarNavItem = {
  label: string;
  href: string;
  iconSrc: string;
  active?: boolean;
};

export type RecentVisitor = {
  name: string;
  badge: string;
  company: string;
  purpose: string;
  host: string;
  time: string;
  exitTime: string;
};

export type DashboardAlert = {
  title: string;
  description: string;
  time: string;
};

export type ProfileData = {
  rank: string;
  name: string;
  orgPath: string;
  userId: string;
  project: string;
  officePhone: string;
  fax: string;
  mobile: string;
  homePhone: string;
  workEmail: string;
  personalEmail: string;
  address: string;
  employeeId: string;
  joinDate: string;
  birthday: string;
  qualifications: string;
  statusMessage: string;
};

export interface IDashboardTypes {
  usersOnline: number;
  usersActiveToday: number;
  usersActiveThisMonth: number;
  peakConcurrency: number;
  dashboard: number;
}

export interface IChatDetails {
  numberOfUsers: number;
  totalMessagesSent: number;
  totalStorageUsed: number;
  totalMediaSent: number;
}

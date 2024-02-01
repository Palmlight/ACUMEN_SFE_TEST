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

export interface IMessage {
  full_name: string;
  message_sent: number;
  media_storage_used: number;
  date_created: string;
  media_sent: string;
}

export interface IMeta {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

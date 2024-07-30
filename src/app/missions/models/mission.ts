// mission.model.ts

export interface Mission {
  id: number;
  endDate: string;
  freeDays: number;
  isForMe: boolean;
  sellDays: number;
  shareMission: boolean;
  startDate: string;
  tjm: number;
  total_days: number;
  idUser: number;
  name: string;
  descriptif: string;
  client: {
    id: number;
    nameClient: string;
    mail: string;
    address: string;
    contactName: string;
    tel: string;
    commentaires: string;
  };
  active: boolean;
  totalDays: number;
}

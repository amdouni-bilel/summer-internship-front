export interface MissionResponse {
  id: number;
  title: string;
  tjm: number;
  startDate: string;
  descriptif: string;
  client: Client;
  companyResponse: CompanyResponse;
  forMe: boolean;
}

export interface Client {
  id: number;
  nameClient: string;
  mail: string;
}

export interface CompanyResponse {
  id: number;
  name: string;
}


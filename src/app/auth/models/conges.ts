export interface Conges {
  id: number;
  user: { id: number; fullName?: string }; 
  joursCong: number;
  dateDebut: string;
  confirmed: boolean;
}
export interface Resume {
  id:string;
  name: string;
  mail: string;
  titre:string;
  phone:string;
  addresse: string;
  nb_an_exp:string;
  langues:string[];
  experience?: Experience[];
  formations?: Formation[];
  competences?: string[];
}

export interface Experience {

  titre_E: string;
  societe: string;
  tache: string[];
  environnement: string[];
  date_debut_E:string;
  date_fin_E:string;
}

export interface Formation {
  titre_f: string;
  ecole: string;
  date_debut_f:string;
  date_fin_f:string;
}

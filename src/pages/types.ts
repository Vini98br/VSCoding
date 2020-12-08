export interface ISkill {
  name: string;
  rate: number;
  id: number;
}

export interface Tech {
  description: string; 
  link: string;
  name: string;
  logoPath: string;
}

export interface IProject {
  description: string;
  imagesDirectory: string;
  link: string;
  techs: Tech[];
  title: string;
  offset: number;
  smOffset: number;
  mainImagePath:string;
}

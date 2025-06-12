export interface IBlog {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  image?: string;
  link?: string;
}

export interface IProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  githubLink?: string;
  demoLink?: string;
}
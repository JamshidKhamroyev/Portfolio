export interface IBlog {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  image?: string;
  link?: string;
}
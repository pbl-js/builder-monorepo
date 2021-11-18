import { Document } from 'mongoose';

export interface ISection extends Document {
  // id: number;
  name: string;
  siteUrl: string;
}

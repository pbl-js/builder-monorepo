import { Schema, model } from 'mongoose';
import { ISection } from './section.types';

const schema = new Schema<ISection>({
  name: { type: String, required: true },
  siteUrl: { type: String },
});

export const SectionSchema = model<ISection>('Section', schema);

import { Section as PrismaSection } from '.prisma/client';
import { Section } from '../modules/section/section.model';

export const formatSection = ({
  componentsOrder,
  ...rest
}: PrismaSection): Section => ({
  ...rest,
  componentsOrder: JSON.stringify(componentsOrder),
});

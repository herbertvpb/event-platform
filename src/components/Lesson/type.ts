export enum LessonType {
  Live = "live",
  Class = "class",
}

export interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: LessonType;
}

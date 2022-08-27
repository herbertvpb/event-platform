import { LessonType } from "../Lesson/types";

export interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: LessonType;
  }[];
}

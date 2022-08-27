import { LessonType } from "../Lesson/type";

export interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: LessonType;
  }[];
}
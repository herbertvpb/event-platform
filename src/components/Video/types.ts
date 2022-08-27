export enum LessonType {
  Live = "live",
  Class = "class",
}

export interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    }
  }
}

export interface VideoProps {
  lessonSlug: string;
}

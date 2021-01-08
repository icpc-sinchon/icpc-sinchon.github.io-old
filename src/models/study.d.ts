export interface IAward {
  prize: string
  member: string
}

export interface IStudy {
  topic: string
  lecturers: string
  mentors?: string
  awards?: IAward[]
}

export interface ILecturer {
  name: string
  school: string
}

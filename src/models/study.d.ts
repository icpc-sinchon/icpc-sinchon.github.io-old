export interface IAward {
  prize: string;
  member: string;
}

export interface IStudy {
  topic: string;
  lecturer: string;
  mentors: string;
  awards?: IAward[];
}
export interface IAward {
  prize: string
  member: string
}

export interface IContest {
  contest_name: string
  problem_setter?: string
  problem_picker?: string
  problem_reviewer?: string
  awards: IAward[]
}

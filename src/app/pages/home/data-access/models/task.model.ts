export interface ITask {
  name: string
  subject: string
  description: string
  responsible?: string
  start?: string
  toDo?: string
  icon?: string
}

export interface ITaskGroup {
  label: string
  tasks: ITask[]
}

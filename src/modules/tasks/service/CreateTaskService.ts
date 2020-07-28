// import { Repository } from 'typeorm';
import Task from '../infra/typeorm/entities/Task';
import ITaskReposistory from '../repositories/ITaskReposistory';

interface IRequest {
  title: string;
  date: Date;
  content: string;
}

class CreateTaskService {
  constructor(
    // private taskRepository: Repository<Task>
    private taskRepository: ITaskReposistory,
  ) {}

  public async execute({ title, date, content }: IRequest): Promise<Task> {
    const task = this.taskRepository.create({ title, date, content });

    // await this.taskRepository.save(task);

    return task;
  }
}

export default CreateTaskService;

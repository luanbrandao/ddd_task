// import { Repository } from 'typeorm';
import { injectable, inject } from 'tsyringe';
import Task from '../infra/typeorm/entities/Task';
import ITaskReposistory from '../repositories/ITaskReposistory';

interface IRequest {
  title: string;
  date: Date;
  content: string;
}

@injectable()
class CreateTaskService {
  constructor(
    // private taskRepository: Repository<Task>
    @inject('TaskReposistory')
    private taskRepository: ITaskReposistory,
  ) {}

  public async execute({ title, date, content }: IRequest): Promise<Task> {
    const task = this.taskRepository.create({ title, date, content });

    // await this.taskRepository.save(task);

    return task;
  }
}

export default CreateTaskService;

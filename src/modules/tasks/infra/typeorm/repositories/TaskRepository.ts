import ITaskReposistory from '@modules/tasks/repositories/ITaskReposistory';
import ICreateTaskDTO from '@modules/tasks/repositories/dtos/ICreateTaskDTO';
import { Repository, getRepository } from 'typeorm';
import Task from '../entities/Task';

class TaskRepository implements ITaskReposistory {
  //  extends Repository<Appointment>
  private ormRepository: Repository<Task>;

  constructor() {
    // cria o repositorio
    this.ormRepository = getRepository(Task);
  }

  public async create({ title, date, content }: ICreateTaskDTO): Promise<Task> {
    const task = this.ormRepository.create({
      title,
      date,
      content,
    });

    await this.ormRepository.save(task);

    return task;
  }
}

export default TaskRepository;

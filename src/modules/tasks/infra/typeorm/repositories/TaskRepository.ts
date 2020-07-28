import ITaskReposistory from '@modules/tasks/repositories/ITaskReposistory';
import ICreateTaskDTO from '@modules/tasks/repositories/dtos/ICreateTaskDTO';
import Task from '../entities/Task';

class TaskRepository implements ITaskReposistory {
  //  extends Repository<Appointment>

  public async create({ title, date, content }: ICreateTaskDTO): Promise<Task> {
    const task = this.create({
      title,
      date,
      content,
    });

    return task;
  }
}

export default TaskRepository;

import Task from '@modules/tasks/infra/typeorm/entities/Task';
import { uuid } from 'uuidv4';
import ITaskReposistory from '../ITaskReposistory';
import ICreateTaskDTO from '../dtos/ICreateTaskDTO';

class FakeTaskReposistory implements ITaskReposistory {
  private tasks: Task[] = [];

  public async create({ title, date, content }: ICreateTaskDTO): Promise<Task> {
    const task = new Task();

    Object.assign(task, { id: uuid(), title, date, content });

    this.tasks.push(task);
    return task;
  }
}

export default FakeTaskReposistory;

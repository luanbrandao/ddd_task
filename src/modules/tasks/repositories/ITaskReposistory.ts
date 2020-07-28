import ICreateTaskDTO from './dtos/ICreateTaskDTO';
import Task from '../infra/typeorm/entities/Task';

export default interface ITaskReposistory {
  create(task: ICreateTaskDTO): Promise<Task>;
}

import ICreateTaskDTO from './dtos/ICreateTaskDTO';

export default interface IUsersRepository {
  create(task: ICreateTaskDTO): Promise<void>;
}

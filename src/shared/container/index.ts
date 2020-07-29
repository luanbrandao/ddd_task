import { container } from 'tsyringe';
import TaskRepository from '@modules/tasks/infra/typeorm/repositories/TaskRepository';
import ITaskReposistory from '@modules/tasks/repositories/ITaskReposistory';

// register, cria uma nova instância
// registerSingleton, instância apenas uma vez
container.registerSingleton<ITaskReposistory>(
  'TaskReposistory',
  TaskRepository,
);

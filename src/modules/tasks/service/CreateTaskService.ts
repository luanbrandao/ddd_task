import { getRepository } from 'typeorm';
import Task from '../infra/typeorm/entities/Task';

interface IRequest {
  title: string;
  date: Date;
  content: string;
}

class CreateTaskService {
  // constructor() {}

  public async execute() {
    console.log('run');

    const taskRepository = getRepository(Task);

    const task = taskRepository.create({
      title: 'titulo',
      date: new Date(),
      content: 'content',
    });

    await taskRepository.save(task);

    return task;
  }
}

export default CreateTaskService;

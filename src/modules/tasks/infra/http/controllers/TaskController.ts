import { Request, Response } from 'express';
// import { parseISO } from 'date-fns';

import CreateTaskService from '@modules/tasks/service/CreateTaskService';
import { container } from 'tsyringe';
// import { getRepository } from 'typeorm';
// import Task from '../../typeorm/entities/Task';
// import TaskRepository from '../../typeorm/repositories/TaskRepository';
// import { container } from 'tsyringe';

export default class TaskController {
  public async create(request: Request, response: Response): Promise<Response> {
    // const { title, date, content } = request.body;

    // const createTaskService = new CreateTaskService(getRepository(Task));

    // sem injeção de dependencia
    // const taskRepository = new TaskRepository();
    // const createTaskService = new CreateTaskService(taskRepository);

    // com injeção
    const createTaskService = container.resolve(CreateTaskService);

    const task = await createTaskService.execute({
      title: 'title1',
      date: new Date(),
      content: 'content1',
    });

    return response.json(task);
  }
}

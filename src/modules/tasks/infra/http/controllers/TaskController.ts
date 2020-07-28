import { Request, Response } from 'express';
// import { parseISO } from 'date-fns';

import CreateTaskService from '@modules/tasks/service/CreateTaskService';
// import { getRepository } from 'typeorm';
// import Task from '../../typeorm/entities/Task';
import TaskRepository from '../../typeorm/repositories/TaskRepository';

export default class TaskController {
  public async create(request: Request, response: Response): Promise<Response> {
    // const { title, date, content } = request.body;

    // const createTaskService = new CreateTaskService(getRepository(Task));

    const taskRepository = new TaskRepository();
    const createTaskService = new CreateTaskService(taskRepository);
    const task = await createTaskService.execute({
      title: 'title1',
      date: new Date(),
      content: 'content1',
    });

    return response.json(task);
  }
}

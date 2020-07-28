import { Router, Request, Response } from 'express';
import CreateTaskService from '@modules/tasks/service/CreateTaskService';
import { getRepository } from 'typeorm';
import Task from '../../typeorm/entities/Task';

const taskRouter = Router();

taskRouter.get('', async (request: Request, response: Response) => {
  const createTaskService = new CreateTaskService(getRepository(Task));

  await createTaskService.execute();

  return response.json({ message: 'tasks' });
});

export default taskRouter;

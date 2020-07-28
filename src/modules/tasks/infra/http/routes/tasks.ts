import { Router, Request, Response } from 'express';
import CreateTaskService from '@modules/tasks/service/CreateTaskService';

const taskRouter = Router();

taskRouter.get('', async (request: Request, response: Response) => {
  const createTaskService = new CreateTaskService();

  await createTaskService.execute();

  return response.json({ message: 'tasks' });
});

export default taskRouter;

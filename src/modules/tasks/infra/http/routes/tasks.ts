import { Router, Request, Response } from 'express';

const taskRouter = Router();

taskRouter.get('', (request: Request, response: Response) => {
  console.log('tasks');
  return response.json({ message: 'tasks' });
});

export default taskRouter;

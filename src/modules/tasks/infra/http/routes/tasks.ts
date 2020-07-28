import { Router } from 'express';
import TaskController from '../controllers/TaskController';

const taskRouter = Router();

const taskController = new TaskController();

// taskRouter.get('', async (request: Request, response: Response) => {
// const createTaskService = new CreateTaskService(getRepository(Task));
// await createTaskService.execute();
// return response.json({ message: 'tasks' });
// });

taskRouter.get('', taskController.create);
export default taskRouter;

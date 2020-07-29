import 'reflect-metadata';
import CreateTaskService from './CreateTaskService';
import FakeTaskReposistory from '../repositories/fakes/FakeTaskReposistory';

let fakeTaskReposistory: FakeTaskReposistory;
let createTaskService: CreateTaskService;

describe('CreateTaskService.spec', () => {
  beforeEach(() => {
    fakeTaskReposistory = new FakeTaskReposistory();
    createTaskService = new CreateTaskService(fakeTaskReposistory);
  });

  it('should be able to create a new task', async () => {
    const task = await createTaskService.execute({
      title: 'teste',
      date: new Date(),
      content: 'content task',
    });
    expect(task).toHaveProperty('id');
  });
});

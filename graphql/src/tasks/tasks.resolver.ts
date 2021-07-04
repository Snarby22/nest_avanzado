import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { AddTaskInput } from './dto/add-task.input';
// import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './models/task';
import { PubSub } from 'apollo-server-express';



@Resolver((of) => 'Tasks')
export class TasksResolver {
  private pubSub = new PubSub();
  constructor(private readonly taskService: TasksService) {}

  //suscripciones

  @Subscription((returns) => Task)
  async taskAdded() {
    return this.pubSub.asyncIterator('taskAdded');
  }

  //consultas
  
  @Query((type) => [Task])
  async getTasks() {
    return this.taskService.getTasks();
  }

  
  @Query((type) => Task)
  async getTask(@Args('id') id: string) {
    return this.taskService.getTask(id);
  }
  
  //mutaciones
  @Mutation((type) => Task)
  async addTask(@Args('input') input: AddTaskInput) {
    const taskAdded = await this.taskService.addTask(input);
    console.log(taskAdded);
    await this.pubSub.publish('taskAdded', { taskAdded: taskAdded });
    return taskAdded;
  }

    @Mutation((type) => Task)
    async updateTask(@Args('id') id: string, @Args('input') input: AddTaskInput) {
      return this.taskService.updateTask(id, input);
    }
 
  @Mutation((type) => [Task])
  async deleteTask(@Args('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}

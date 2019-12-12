import { TaskDto } from './dto/task.dto';
import { TasksService } from './tasks.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, 
         NotFoundException,
} from '@nestjs/common';

@Controller('tasks')
export class TaskController {
    constructor(private tasksService: TasksService) {}

    // add task
    @Post('/task')
    async addTask(@Res() res, @Body() taskDto: TaskDto) {
        const task = await this.tasksService.addTask(taskDto);
        return res.status(HttpStatus.OK).json({message: 'Task created successfully', task});
    }

    // Retrieve tasks list
    @Get('/')
    async getTasks(@Res() res) {
        const tasks = await this.tasksService.getAllTasks();
        return res.status(HttpStatus.OK).json(tasks);
    }

    // Fetch a particular task using ID
    @Get('/:taskID')
    async getTask(@Res() res, @Param('taskID') taskID: string) {
        const task = await this.tasksService.getTask(taskID);
        if (!task) {
            throw new NotFoundException('Task does not exist!');
        }
        return res.status(HttpStatus.OK).json(task);
    }

    // Update task by ID
    @Put('/:taskID')
    async updateTask(@Res() res, @Param('taskID') taskID: string, @Body() taskDto: TaskDto) {
        const task = await this.tasksService.updateTask(taskID, taskDto);
        if (!task) {
            throw new NotFoundException('Task does not exist!');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Task has been successfully updated',
            task,
        });
    }

    // Delete task by ID
    @Delete('/:taskID')
    async deleteTask(@Res() res, @Param('taskID') taskID: string) {
        const task = await this.tasksService.deleteTask(taskID);
        if (!task) {
            throw new NotFoundException('Task does not exist');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Task has been deleted',
            task,
        });
    }
}

import instance from './instance';
import tasksModule from './tasks';
import userModule from './user';

export default {
    tasks:tasksModule(instance),
    user:userModule(instance),
}
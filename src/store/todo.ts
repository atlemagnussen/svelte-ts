import type { Todo } from "../models/types";
import { BehaviorSubject } from "rxjs"

const todos: Todo[] = [{task: "test1", done: false}, {task: "test2", done: true}]
const items = new BehaviorSubject(todos)

export const addTodo = (todo: Todo) => {
    const curr = items.value;
    const updt = [...curr, todo];
    items.next(updt);
}


export default items;
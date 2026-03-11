export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateTodoRequest {
    title: string;
}

export interface UpdateTodoRequest {
    title?: string;
    completed?: boolean;
}

export interface TodoResponse {
    todo: Todo;
}

export interface TodosResponse {
    todos: Todo[];
}
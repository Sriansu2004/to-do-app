export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface TodoFormData {
    title: string;
}

export interface FilterOptions {
    status: 'all' | 'completed' | 'active';
}
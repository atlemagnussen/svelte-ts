
export interface IAuthUser {
    loggedIn: boolean;
    id: string;
    name: string;
    isAdmin: boolean;
    role: string;
}

export interface ITodo {
    task: string;
    done: boolean;
}
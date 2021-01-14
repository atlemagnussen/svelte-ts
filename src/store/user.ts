import { BehaviorSubject } from "rxjs"
import type { AuthUser } from "../models/types";

export const alert = new BehaviorSubject<string>('Welcome to the To-Do list app!')

export const authUser = new BehaviorSubject<AuthUser>({loggedIn: false, id: "", isAdmin: false, name: "Anon", role: "none"})
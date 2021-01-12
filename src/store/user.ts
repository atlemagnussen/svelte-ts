import { writable } from "svelte/store";
import type { AuthUser } from "../models/types";

export const alert = writable<string>('Welcome to the To-Do list app!')

export const authUser = writable<AuthUser>({loggedIn: false, id: "", isAdmin: false, name: "Anon", role: "none"})
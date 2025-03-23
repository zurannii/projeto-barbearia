import { Action } from "rxjs/internal/scheduler/Action";
import { SnackbarManagerService } from "./snackbar-manager.service";

export interface ISnackbarManagerService {
    show(onmessage: string, Action?: string, duration?: number): void;
}
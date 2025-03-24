import { InjectionToken } from "@angular/core";
import { ICLientService } from "./api-client/clients/iclients.service";
import { ISnackbarManagerService } from "./isnackbar-manager.service";
import { IDialogManagerService } from "./idialog-manager.service";
import { SchedulesService } from "./api-client/schedules/schedules.service";


export const SERVICES_TOKEN = {
    HTTP: {
        CLIENT: new InjectionToken<ICLientService>('SERVICES_TOKEN.HTTP.CLIENT'),
        SCHEDULE: new InjectionToken<SchedulesService>('SERVICES_TOKEN.HTTP.SCHEDULE'),
    },
    SNACKBAR: new InjectionToken<ISnackbarManagerService>('SERVICES_TOKEN.SNACKBAR'),
    DIALOG: new InjectionToken<IDialogManagerService>('SERVICES_TOKEN.DIALOG')
}
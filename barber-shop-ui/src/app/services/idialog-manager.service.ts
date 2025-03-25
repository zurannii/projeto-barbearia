import { Observable } from "rxjs";
import { YesNoDialogComponent } from "../commons/components/yes-no-dialog/yes-no-dialog.component";
import { ComponentType } from "@angular/cdk/overlay";

export interface IDialogManagerService {
  

    showYesNoDialog(component: ComponentType<YesNoDialogComponent>, data: { title: string, content: string }): Observable <any>
}
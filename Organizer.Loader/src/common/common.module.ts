import { NgModule } from "@angular/core";
import { MaterialModule, MdNativeDateModule } from "@angular/material";
import { CommonModule as AngularCommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PageNotFoundComponent } from "common/pageNotFound/pageNotFound.component";
import { GlobalSpinnerComponent } from "common/globalSpinner/globalSpinner.component";
import { GlobalSpinnerService } from "common/globalSpinner/globalSpinner.service";
import { MessageBoxComponent } from "common/messageBox/messageBox.component";
import { MessageBoxService } from "common/messageBox/messageBox.service";
import { GlobalConfigService } from "common/globalConfig.service";
import { SecureHttp } from "common/secureHttp";

@NgModule({
    declarations: [
        PageNotFoundComponent,
        GlobalSpinnerComponent,
        MessageBoxComponent
    ],
    imports: [
        AngularCommonModule,
        FormsModule,
        MaterialModule,
        MdNativeDateModule
    ],
    exports: [
        AngularCommonModule,
        FormsModule,
        MaterialModule,
        MdNativeDateModule,
        PageNotFoundComponent,
        GlobalSpinnerComponent
    ],
    providers: [
        GlobalSpinnerService,
        MessageBoxService,
        GlobalConfigService,
        SecureHttp
    ],
    entryComponents: [
        MessageBoxComponent
    ]
})
export class CommonModule {}
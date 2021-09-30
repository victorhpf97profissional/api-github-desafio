
import { NgModule } from '@angular/core';
import { InfoRoutingModule } from './info-routing.module';
import { InfoUserComponent } from './info-user/info-user.component';
import { UsersService } from 'src/app/shared/services/github/users.service';
import { CommonModule } from '@angular/common';
import { InfoUserDialogComponent } from './info-user-dialog/info-user-dialog.component';


const APP_MODULES = [
    CommonModule,
    InfoRoutingModule,
]

const APP_COMPONENT = [
    InfoUserComponent,
    InfoUserDialogComponent
]

@NgModule({
    declarations: [APP_COMPONENT],
    imports: [APP_MODULES],
    exports: [InfoUserDialogComponent],
    providers: [UsersService]
})
export class InfoModule {
}

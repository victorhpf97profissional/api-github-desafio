
import { NgModule } from '@angular/core';
import { InfoRoutingModule } from './info-routing.module';
import { InfoUserComponent } from './info-user/info-user.component';
import { UsersService } from 'src/app/shared/services/github/users.service';


@NgModule({
    declarations: [
    InfoUserComponent],
    imports: [
        InfoRoutingModule
    ],
    providers: [UsersService]
})
export class InfoModule {
}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { UsersService } from 'src/app/shared/services/github/users.service';
import { SearchUsersComponent } from './search-users/search-users.component';
const APP_MODULES = [
    CommonModule,
    SearchRoutingModule
]

const APP_COMPONENT = [
    SearchUsersComponent
]

@NgModule({
    declarations: [
        APP_COMPONENT
    ],
    imports: [
        APP_MODULES,
    ],
    providers: [UsersService]
})
export class SearchModule {
}

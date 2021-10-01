
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { UsersService } from 'src/app/shared/services/github/users.service';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoModule } from '../info/info-.module';
const APP_MODULES = [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    InfoModule
]

const APP_COMPONENT = [
    SearchUsersComponent,
    
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

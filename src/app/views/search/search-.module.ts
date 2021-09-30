
import { NgModule } from '@angular/core';
import { SearchRoutingModule } from './search-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/shared/services/github/users.service';
// import { SharedModule } from 'src/app/shared/shared.module';
import { SearchUsersComponent } from './search-users/search-users.component';
const APP_MODULES = [
    CommonModule,
    SearchRoutingModule
]

@NgModule({
    declarations: [
        SearchUsersComponent
    ],
    imports: [
        APP_MODULES,
    ],
    providers: [UsersService]
})
export class SearchModule {
}

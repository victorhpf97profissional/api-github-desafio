
import { NgModule } from '@angular/core';
import { SearchRoutingModule } from './search-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/shared/services/github/users.service';


const APP_MODULES = [
    CommonModule,
    SearchRoutingModule,
];

@NgModule({
    declarations: [
    ],
    imports: [
        APP_MODULES,
    ],
    providers: [UsersService]
})
export class SearchModule {
}

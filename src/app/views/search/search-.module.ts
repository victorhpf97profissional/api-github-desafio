
import { NgModule } from '@angular/core';
import { SearchRoutingModule } from './search-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/shared/services/github/users.service';
import { SharedModule } from 'src/app/shared/shared.module';

const APP_MODULES = [
    CommonModule,
    SearchRoutingModule,
    SharedModule
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

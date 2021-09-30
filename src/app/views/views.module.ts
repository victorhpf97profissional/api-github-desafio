import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ViewsComponent,
        
    ],
    imports: [
        CommonModule,
        ViewsRoutingModule,
        RouterModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [ViewsComponent]
})
export class ViewsModule {
}

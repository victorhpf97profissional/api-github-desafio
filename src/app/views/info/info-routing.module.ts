import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoUserComponent } from './info-user/info-user.component';

const routes: Routes = [
    // { path: '', redirectTo: 'informacoes', pathMatch: 'full' },
    { path: 'usuario/:username', component: InfoUserComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InfoRoutingModule {
}

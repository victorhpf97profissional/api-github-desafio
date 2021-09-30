import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';

const routes: Routes = [
    { path: '', redirectTo: '/pesquisa', pathMatch: 'full' },
    { path: 'pesquisa', loadChildren: () => import('./search/search-.module').then(m => m.SearchModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule {
}

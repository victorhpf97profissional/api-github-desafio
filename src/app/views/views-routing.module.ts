import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';

const routes: Routes = [
    {
        path: '', component: ViewsComponent, children: [
            { path: '', redirectTo: '/pesquisa', pathMatch: 'full' },
            { path: 'pesquisa', loadChildren: () => import('./search/search-.module').then(m => m.SearchModule) },
            { path: 'informacoes', loadChildren: () => import('./info/info-.module').then(m => m.InfoModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule {
}

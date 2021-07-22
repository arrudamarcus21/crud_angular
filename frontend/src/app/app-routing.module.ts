import { OperadoresDeleteComponent } from './components/operadores/operadores-delete/operadores-delete.component';
import { OperadoresUpdateComponent } from './components/operadores/operadores-update/operadores-update.component';
import { OperadoresCreateComponent } from './components/operadores/operadores-create/operadores-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperadoresCrudComponent } from './views/operadores-crud/operadores-crud.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }, {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then((m) => m.HomeModule),
  }, {
    path: 'operadores',
    component: OperadoresCrudComponent
  }, {
    path: 'operadores-create',
    component: OperadoresCreateComponent
  }, {
    path: 'operadores/update/:id',
    component: OperadoresUpdateComponent
  }, {
    path: 'operadores/delete/:id',
    component: OperadoresDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

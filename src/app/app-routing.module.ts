import { FuncionarioUpdateComponent } from './components/funcionarios/funcionario-update/funcionario-update.component';
import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { FuncionarioReadComponent } from './components/funcionarios/funcionario-read/funcionario-read.component';
import { FuncionarioCreateComponent } from './components/funcionarios/funcionario-create/funcionario-create.component';
import { EmpresasUpdateComponent } from './components/empresas/empresas-update/empresas-update.component';
import { EmpresasCrudComponent } from './views/empresas-crud/empresas-crud.component';
import { EmpresasCreateComponent } from './components/empresas/empresas-create/empresas-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from'./views/home/home.component'
import {ProductCrudComponent} from './views/product-crud/product-crud.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path:'products',
  component: ProductCrudComponent
},
{
  path: 'products/create',
  component: ProductCreateComponent
},
{
  path: 'products/update/:id',
  component: ProductUpdateComponent
},
{
  path: 'products/delete/:id',
  component: ProductDeleteComponent
},
{ path: 'empresas',
component: EmpresasCrudComponent
}
,{
  path: 'empresas/create',
  component: EmpresasCreateComponent
},
  {
    path: 'empresas/update/:id',
    component: EmpresasUpdateComponent
  },
  {
    path: 'funcionarios',
    component: FuncionarioCrudComponent
  },
  {
    path: 'funcionarios/create',
    component: FuncionarioCreateComponent
  },
  {
    path: 'funcionarios/update/:id',
    component: FuncionarioUpdateComponent
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

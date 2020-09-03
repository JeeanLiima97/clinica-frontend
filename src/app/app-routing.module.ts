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
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

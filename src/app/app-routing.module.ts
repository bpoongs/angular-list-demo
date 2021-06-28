import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './user/login/login.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { RegisterComponent } from './user/register/register.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  {
    path: 'hello', 
    component: HelloComponent
  },
  {
    path: 'counter', 
    component: CounterComponent
  },
  {
    path: 'list-product', 
    component: ListProductComponent
  },
  {
    path: 'add-product', 
    component: AddProductComponent
  },
  {
    path: 'edit-product/:prodId', 
    component: EditProductComponent
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'authenticate', 
    component: LoginComponent
  },
  {
    path: 'logout', 
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

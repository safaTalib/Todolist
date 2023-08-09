import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'', component:FirstComponent},
  {path: 'todo', component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

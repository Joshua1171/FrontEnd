import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PersonasFormComponent } from './components/personas/personas-form.component';
import { PersonasComponent } from './components/personas/personas.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'index'},
  {path:'personas',component: PersonasComponent},
  {path:'personas/form',component: PersonasFormComponent},
  {path:'personas/form/:id',component: PersonasFormComponent},
  {path:'index',component: IndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

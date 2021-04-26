import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloresComponent } from './components/flores/flores.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { PrediccionComponent } from './components/prediccion/prediccion.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'/home'},
  { path:'home', component:FormularioComponent},
  { path:'predict', component:PrediccionComponent},
  { path:'about', component:InformacionComponent},
  { path:'flowers', component:FloresComponent},
  { path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

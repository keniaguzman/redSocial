import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComentariosComponent} from './pages/comentarios/comentarios.component';


const routes: Routes = [
  {
    path: 'comentario',
    component: ComentariosComponent,
  },
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {

}

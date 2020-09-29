import { Component, OnInit } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
 comentarios=[];
 comentario='';
  otro='';
  constructor(private publicacion :PublicacionService) { }

  ngOnInit(): void {

  }
  publicar() {
      this.comentarios.push(this.comentario)
      //this.comentarios.reverse();
  }

}

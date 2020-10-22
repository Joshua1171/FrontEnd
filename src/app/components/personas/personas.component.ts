import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Persona } from 'src/app/models/persona';
import { PersonasService } from 'src/app/services/personas.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[];
  constructor(private service: PersonasService) { }


  ngOnInit(): void {
    this.service.listar().subscribe(personas => this.personas = personas);

  }

  public eliminar(persona: Persona): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar a ${persona.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(persona.id).subscribe(() => {
          this.personas = this.personas.filter(a => a !== persona);
          Swal.fire('Eliminado:', `Persona ${persona.nombre} eliminada con éxito`, 'success');
        });
      }
    });
  }

}

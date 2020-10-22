import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent implements OnInit {

  titulo = "Crear Personas";

  persona: Persona = new Persona();

  error: any;

  constructor(private service: PersonasService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
this.route.paramMap.subscribe(params => {
  const id: number= +params.get('id');
  if(id){
    this.service.ver(id).subscribe(persona => this.persona = persona)
  }
})

  }

  public crear(): void{
    this.service.crear(this.persona).subscribe(persona =>{
      console.log(persona);
      Swal.fire('Creado:',`Persona ${persona.nombre} creada con exito`,'success');
      this.router.navigate(['/personas']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });


  }
  public editar(): void {
    this.service.editar(this.persona).subscribe(persona =>{
      console.log(persona);
      Swal.fire('Actualizado:',`Persona ${persona.nombre} actualizada con exito`,'success');
      this.router.navigate(['/personas']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });

  }



}

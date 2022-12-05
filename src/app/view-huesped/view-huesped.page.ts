import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Huesped } from './../models/huesped';
import { HuespedService } from './../services/huesped.service';

@Component({
  selector: 'app-view-huesped',
  templateUrl: './view-huesped.page.html',
  styleUrls: ['./view-huesped.page.scss'],
})
export class ViewHuespedPage implements OnInit {
  huesped: Huesped
  conuntrycode: string="52";
  wpnumber= ""
  public id: string;

  url:string
  constructor(
    private activatedRoute: ActivatedRoute,
    private huespedservice: HuespedService
  ) { 

    this.huesped= {
      nombre:"",
      codigo: "",
      tel: "",
      habitacion: "",
      token: "",
      admin: true,
      fingreso: null,
      fegreso: null,
      aporte: 0,
      id:""
    }
  }

  ngOnInit() {
 /*
      this.activatedRoute.paramMap.subscribe(paramMap => {
      const res = paramMap.get('nombre');
      this.huesped = this.huespedservice.getHuespedByNombre(res);
      this.wpnumber= this.huesped.tel;
      this.wpnumber=this.wpnumber.replace("-","");
      this.wpnumber=this.wpnumber.replace("-","");
      console.log(this.wpnumber+" HOLA NUMERO DE TELEFONO")
      this.url="https://wa.me/"+this.conuntrycode+this.wpnumber+"?text=Hola Estimado Usuario tu Token de acceso es: "+this.huesped.token;


    }) */
    ////firebase
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('nombre');
      console.log("hola *************"+ id);
      this.huespedservice.getHuespedById(id).subscribe(item => {
        this.huesped = item as Huesped
        console.log(this.huesped.nombre);
        this.id = id;
        this.wpnumber= this.huesped.tel;
        this.wpnumber=this.wpnumber.replace("-","");
        this.wpnumber=this.wpnumber.replace("-","");
        console.log(this.wpnumber+" HOLA NUMERO DE TELEFONO")
        this.url="https://wa.me/"+this.conuntrycode+this.wpnumber+"?text=Hola Estimado Usuario tu Token de acceso es: "+this.huesped.token;
    
      })

    });
  }

}

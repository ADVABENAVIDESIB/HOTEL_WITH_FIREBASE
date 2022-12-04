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
  url:string
  constructor(
    private activatedRoute: ActivatedRoute,
    private huespedservice: HuespedService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const res = paramMap.get('nombre');
      this.huesped = this.huespedservice.getHuespedByNombre(res);
      this.wpnumber= this.huesped.tel;
      this.wpnumber=this.wpnumber.replace("-","");
      this.wpnumber=this.wpnumber.replace("-","");
      console.log(this.wpnumber+" HOLA NUMERO DE TELEFONO")
      this.url="https://wa.me/"+this.conuntrycode+this.wpnumber+"?text=Hola Estimado Usuario tu Token de acceso es: "+this.huesped.token;


    })
  }

}

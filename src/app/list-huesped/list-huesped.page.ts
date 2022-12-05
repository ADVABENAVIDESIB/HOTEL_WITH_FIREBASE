import { Component, OnInit } from '@angular/core';
import { Huesped } from '../models/huesped';
import { HuespedService } from '../services/huesped.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list-huesped',
  templateUrl: './list-huesped.page.html',
  styleUrls: ['./list-huesped.page.scss'],
})
export class ListHuespedPage implements OnInit {

  public huespedes: Huesped[];
  public huesped: Huesped;
  public id:string;
   constructor(private hs: HuespedService, private ac: AlertController, private router: Router, 
    private activateroute:ActivatedRoute ) { 
   /*  
   este codigo es para mostrar los huespedes pero en arrays

    this.huespedes=hs.getAdmins();
    this.activateroute.queryParams.subscribe((params) => {
      this.huespedes = this.hs.getUsers();
    }); */
    this.hs.getHuepedes().subscribe(
      res => {
        this.huespedes = res;
        console.log(this.huespedes);
      }
    )
  }

  public async removeStudent(id:string){
    const alert = await this.ac.create({
      header: 'Confirmación',
      subHeader: '¿Está seguro que desea eliminar?',
      message: 'Confirmación',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          handler: ()=>{}
        },
        {
          text: 'Eliminar',
          role: 'confirm',
          handler: ()=> {
             this.hs.removeStudent(id);
          }
        }
      ]
    });
    await alert.present();
  }
  
  public addHuesped():void{
    this.router.navigate(['/new-huesped'],{});
  }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/home'], {
    });
  }
  public getHuespedById(id:string){
    this.hs.getHuespedById(id).subscribe(item => {
      this.huesped = item as Huesped
      console.log(this.huesped);
    });
    this.router.navigate(['/view-huesped'],
    {
      queryParams:{id:id, huesped:this.huesped}
    })

    //this.hs.getHuespedById(id);
  }
}

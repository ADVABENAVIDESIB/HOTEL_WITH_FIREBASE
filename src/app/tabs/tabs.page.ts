import { Component } from '@angular/core';
import { HuespedService } from '../services/huesped.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public leng: string;
  public normas: string;
  public ingreso: string;
  public actividades: string;

  constructor(private huespedService : HuespedService,private router: Router) {
    this.leng = this.huespedService.getLang();
    this.checkLanguage();
  }
  public checkLanguage() {
    switch (this.leng) {
      case 'es':
        this.normas="Normas";
        this.ingreso="Ingreso";
        this.actividades="Actividades";
      break;
      case 'en':
        this.normas="Rules";
        this.ingreso="Check-in & Check-out";
        this.actividades="Activities";
      break;
      case 'fr':
        this.normas="Régles";
        this.ingreso="Check-in & Check-out";
        this.actividades="Activités";
      break;
    }
  }
  logout(){
    this.router.navigate(['/home'], {
    });
  }
}

import { Huesped } from './../models/huesped';
import { HuespedService } from '../services/huesped.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public huesped: Huesped;
  public leng: string;
  public reglamentoT: string;
  public horario: string;
  public horarioT: string;
  public registro: string;
  public registroT: string;
  public toallas: string;
  public toallasT: string;
  public alimentos: string;
  public alimentosT: string;
  public roomservice: string;
  public roomserviceT: string;
  public horarioSilencio: string;
  public horarioSilencioT: string;
  public dano: string;
  public danoT: string;
  public alojamiento: string;
  public alojamientoT: string;
  public estanciaT: string;


  constructor(private huespedService : HuespedService) {
  
    this.leng = this.huespedService.getLang();
    this.checkLanguage();
  } 
  public changeLang(l:string){
    this.leng=l
    this.checkLanguage()
  }

  public checkLanguage() {
    switch (this.leng) {
      case 'es':
        this.reglamentoT="REGLAMENTO";
        this.horarioT="HORARIO DE ENTRADA Y SALIDA";
        this.horario="El horario de ingreso a las habitaciones se fija a las 13 Hs. y deberán ser desocupadas a las 10 Hs. del día siguiente; después de esa hora, el hotel tendrá derecho a efectuar un cargo extra según la tarifa vigente.";
        this.registroT="REGISTRO";
        this.registro="Todas las personas hospedadas deberán registrarse antes de ingresar al hotel.";
        this.toallasT="TOALLAS";
        this.toallas="Esta totalmente prohibido (sin ninguna excepción) retirar toallas de la habitación. Para la piscina puede solicitar toallas en el Snack";
        this.alimentosT="ALIMENTOS Y BEBIDAS";
        this.alimentos="No se permite la introducción de los mismos en las habitaciones o áreas públicas del hotel, salvo que fueran adquiridos en el bar o restaurante del mismo; caso contrario el hotel podrá exigir el retiro de los mismos";
        this.roomserviceT="SERVICIO A HABITACIÓN";
        this.roomservice="El horario de este servicio es las 24 horas del día y es sin costo.";
        this.horarioSilencioT="HORARIO DE SILENCIO";
        this.horarioSilencio=" El mismo está comprendido entre las 14:00 Hs a 17:00 Hs y las 24:00 Hs a 10:00 Hs";
        this.danoT="DAÑOS CAUSADOS";
        this.dano="Cualquier daño causado por los huéspedes a los objetos, bienes muebles o al inmueble de propiedad del hotel, será de su exclusiva responsabilidad, debiendo abonar la reparación de los mismos";
        this.alojamientoT="ALOJAMIENTO";
        this.alojamiento="El alojamiento es intransferible";
        this.estanciaT="ESPERAMOS QUE SU ESTANCIA SEA INOLVIDABLE";
      break;
      case 'en':
        this.reglamentoT="RULES";
        this.horarioT="CHECK-IN AND CHECK-OUT";
        this.horario="The check-in is set at 1:00 p.m. and they must be vacated at 10:00 a.m. the following day; after that time, the hotel will have the right to make an extra charge according to the current rate.";
        this.registroT="REGISTRATION";
        this.registro="All people staying must register before entering the hotel.";
        this.toallasT="TOWELS";
        this.toallas="It is totally prohibited (without any exception) to remove towels from the room. You can request towels at the Snack for the pool";
        this.alimentosT="FOOD AND DRINKS";
        this.alimentos="In rooms or public areas of the hotel is not allowed, unless they were purchased in the bar or restaurant of the same; otherwise the hotel may require the removal of the same";
        this.roomserviceT="ROOM SERVICE";
        this.roomservice="The hours of this service are 24 hours a day and it is free of charge.";
        this.horarioSilencioT="SILENCE SCHEDULE";
        this.horarioSilencio="It is between 2:00 p.m. to 5:00 p.m. and 12:00 a.m. to 10:00 a.m";
        this.danoT="DAMAGE CAUSED";
        this.dano="Any damage caused by guests to objects, movable property or property owned by the hotel, will be their sole responsibility, and they must pay for their repair.";
        this.alojamientoT="ACCOMMODATION";
        this.alojamiento="Accommodation is non-transferable";
        this.estanciaT="WE HOPE YOUR STAY IS UNFORGETTABLE";
      break;
      case 'fr':
        this.reglamentoT="RÈGLES";
        this.horarioT="ENREGISTREMENT ET DÉPART";
        this.horario="Le check-in est fixé à 13h00. et ils doivent être libérés à 10h00 le lendemain matin ; passé ce délai, l'hôtel se réserve le droit de facturer un supplément selon le tarif en vigueur.";
        this.registroT="ENREGISTREMENT";
        this.registro="Toutes les personnes séjournant doivent s'inscrire avant d'entrer dans l'hôtel.";
        this.toallasT="LES SERVIETTES";
        this.toallas="Il est totalement interdit (sans aucune exception) de retirer les serviettes de la chambre. Vous pouvez demander des serviettes au Snack pour la piscine";
        this.alimentosT="NOURRITURE ET BOISSONS";
        this.alimentos="Dans les chambres ou les espaces publics de l'hôtel n'est pas autorisé, sauf s'ils ont été achetés dans le bar ou le restaurant de celui-ci ; sinon, l'hôtel peut exiger le retrait du même";
        this.roomserviceT="SERVICE DE CHAMBRE";
        this.roomservice="Les heures de ce service sont 24 heures sur 24 et il est gratuit.";
        this.horarioSilencioT="HORAIRE DE SILENCE";
        this.horarioSilencio="Il est entre 14h00. à 17h00 et de 00h00 à 10h00";
        this.danoT="DEGATS CAUSES";
        this.dano="Tout dommage causé par les clients aux objets, biens mobiliers ou propriétés appartenant à l'hôtel, sera de leur seule responsabilité, et ils doivent payer pour leur réparation.";
        this.alojamientoT="LOGEMENT";
        this.alojamiento="L'hébergement n'est pas transférable";
        this.estanciaT="NOUS ESPERONS QUE VOTRE SEJOUR SERA INOUBLIABLE";
      break;
    
    }
  }
  


}

import { Component, OnInit } from '@angular/core';
import { Huesped } from '../models/huesped';
import { HuespedService } from '../services/huesped.service';
import { ActivatedRoute } from '@angular/router';
import { Timestamp } from 'rxjs';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public leng: string;
  public hoy = new Date();
  public huesped:Huesped;
  public huespedes:Huesped[];

  public show:boolean;
  public index: string;
  public ingresoAT :string;
  public ingresoA :string;
  public hotelUT :string;
  public hotelU :string;
  public horarioHT :string;
  public horarioH :string;
  public cajaST :string;
  public cajaS :string;
  public codigo: string;
  public act: string;
  public aporteRemain: string;

  public pagototal: number;

  daydiff(first, second):number {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  constructor(private huespedService: HuespedService, private aroute: ActivatedRoute) {}

  ngOnInit() {
    this.aroute.queryParams.subscribe(
      (params)=>{
        this.index = params.index
       // console.log(this.index+"HOLA TAB2 EN INDEX");
        
      }
    );
    

    this.huespedService.getHuespedById(this.index).subscribe(item => {
      this.huesped = item as Huesped
      console.log(this.huesped.nombre);
      


          //this.huesped = this.huespedService.getUsers()[this.index]
    console.log(this.huesped.nombre) 
    // console.log(this.huesped.fingreso.getDate())
    console.log(this.hoy.getDate())
    // console.log(this.huesped.fegreso.getDate())

    var fecha = this.numeroAFecha(new Date(this.huesped.fingreso), false);
    var fecha2=new Date(this.huesped.fingreso);
     if (true) {
       this.show=true
       this.leng='es'
       this.pagototal=this.daydiff(this.huesped.fingreso,this.huesped.fegreso);
       console.log("lo de daydiff pago total"+this.pagototal);
       this.checkLanguage()
 
       
     
     } else {
      
      let minDate: any = new Date().toISOString();
      console.log("no entro crack"+ minDate);

      var date= new Date((this.huesped.fingreso));
      console.log(date+"==" +this.hoy);
      
       this.show=false
     }
    })
  }//ngOnInit
  public numeroAFecha(numeroDeDias, esExcel = false) {
    var diasDesde1900 = esExcel ? 25567 + 1 : 25567;
    //console.log(new Date((numeroDeDias - diasDesde1900) * 86400 * 1000)+"chale");
    // 86400 es el n??mero de segundos en un d??a, luego multiplicamos por 1000 para obtener milisegundos.
    return new Date((numeroDeDias - diasDesde1900) * 86400 * 1000);
  }
  
 



  public changeLang(l:string){
    this.leng=l
    this.checkLanguage()
  }

  public checkLanguage(){
    let max: number 
    switch(this.huesped.habitacion){
      case '1': {
        this.codigo = '1234'
        max=500
        break;}
      case '2': {
        this.codigo = '5469'
        max=250
        break;}
      case '3': {
        this.codigo = '2354'
        max=100
        break;}
      case '4': {
        this.codigo = '8520'
        max=1500
        break;}
      case '5': {
        this.codigo = '3460'
        max=2000
        break;}
      case '6': {
        this.codigo = '1287'
        max=500
        break;}
      case '7': {
        this.codigo = '1693'
        max=2500
        break;}
      case '8': {
        this.codigo = '1263'
        max=750
        break;}
      case '9': {
        this.codigo = '9851'
        max=800
        break;}
    }
    switch(this.leng){
      case 'es':
        this.act='Instucciones de Habitaci??n'
        this.ingresoAT='Ingreso Aut??nomo';
        this.ingresoA='Para poder ingresar a su habitaci??n, en la recepci??n principal, a su izquierda encuentra un pasillo que lo lleva a un elevador.\n En el piso 1 se encuentran las habitaciones 1-4, en el piso 2 5-8 y en el piso 3 9-10.\n Al salir del elevador puede encontrar se??alamientos indicando en qu?? lado del piso est??n las habitaciones';
        this.hotelUT='Ubicaci??n del Hotel';
        this.hotelU='Este hotel est?? ubicado sobre la laguna de Santa Mar??a del Oro';
        this.horarioHT='Horario del Hotel';
        this.horarioH='Este hotel est?? abierto de las 03:00 a las 00:00';
        this.cajaST='Caja de Seguridad';
        this.cajaS='Hay una caja de seguridad debajo de la cama principal, como est?? en la ubicaci??n '+this.huesped.habitacion+ ' su caja tiene un c??digo de acceso '+this.codigo ;
        if(this.huesped.aporte-max==0){
          this.aporteRemain="Ha pagado su habitaci??n, disfrute su tiempo"
        }else{
          this.aporteRemain="Ha pagado de aporte $"+this.huesped.aporte+" con saldo restante de $"+((max*this.pagototal)-(this.huesped.aporte))+" ; Asegure pagar antes de acabar su visita"
        }
        break;
      case 'en':
        this.act='Room Instructions'
        this.ingresoAT='Autonomous Access';
        this.ingresoA='In order to enter your room, head to the reception desk and turn to your left. Continue on until you find an elevator. \n In the first floor you??ll find rooms 1-4, on the second floor rooms 5-8 and on the third floor rooms 9 and 10. \n Leaving the elevator you??ll find indications in order to find your room.';
        this.hotelUT='Hotel Location';
        this.hotelU='This hotel is located over the Santa Mar??a del Oro lake.';
        this.horarioHT='Hotel Working Hours';
        this.horarioH='This hotel is open from 3 am until midnight';
        this.cajaST='Security Safe';
        this.cajaS='Located underneath the main bed is a safe with a passcode. The passcode for room '+this.huesped.habitacion+ ' is '+ this.codigo;
        if(this.huesped.aporte-max==0){
          this.aporteRemain="Your room has been paid, enjoy your stay"
        }else{
          this.aporteRemain="You have paid $"+this.huesped.aporte+" out of a total of $"+((max*this.pagototal)-(this.huesped.aporte))+" ; Make sure to pay the remainder before checking out"
        }
        break;
      case 'fr':
        this.act='Instructions de la chambre'
        this.ingresoAT='Acc??s autonome';
        this.ingresoA='Pour entrer dans votre chambre, dirigez-vous vers la r??ception et tournez ?? gauche. Continuez jusqu\'?? ce que vous trouviez un ascenseur. \n Au premier ??tage, vous trouverez les chambres 1-4, au deuxi??me ??tage les chambres 5-8 et au troisi??me ??tage les chambres 9 et 10. \n En sortant de l\'ascenseur, vous trouverez des indications pour trouver votre chambre.';
        this.hotelUT='Emplacement de l\'h??tel';
        this.hotelU='Cet h??tel est situ?? au-dessus du lac Santa Mar??a del Oro.';
        this.horarioHT='Heures d\'ouverture de l\'h??tel';
        this.horarioH='Cet h??tel est ouvert de 3h ?? minuit';
        this.cajaST='Coffre-fort de s??curit??';
        this.cajaS='Situ?? sous le lit principal est un coffre-fort avec un mot de passe. Le code d\'acc??s pour la chambre '+this.huesped.habitacion+ ' est '+ this.codigo;
        if(this.huesped.aporte-max==0){
          this.aporteRemain="Votre chambre a ??t?? pay??e, profitez de votre s??jour"
        }else{
          this.aporteRemain="Vous avez pay?? $"+this.huesped.aporte+" sur un total de $"+((max*this.pagototal)-(this.huesped.aporte))+" ; Assurez-vous de payer le reste avant de partir"
        }
        break;
    }
  }

}//

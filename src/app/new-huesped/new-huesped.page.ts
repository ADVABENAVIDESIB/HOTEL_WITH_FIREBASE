import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Huesped } from '../models/huesped';
import { HuespedService } from '../services/huesped.service';
import { FormGroup,FormBuilder,Validators,   } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-huesped',
  templateUrl: './new-huesped.page.html',
  styleUrls: ['./new-huesped.page.scss'],
})
export class NewHuespedPage implements OnInit {
  public hoy = new Date(Date.now()).toISOString()
  public huesped: Huesped;
  public hue!: Huesped;
  public hueForm!: FormGroup;
  public valMessage!: Object;
  public date;
  public date1:Date;
  public date2 :Date;
  public date2S;
  constructor(private huespedService: HuespedService, private fb: FormBuilder, private dp: DatePipe,
    private alertController: AlertController, private toastController: ToastController,
    private router: Router) {

    this.hue = {
      nombre: "",
      codigo: "",
      tel: "",
      habitacion: "",
      token: "",
      admin: false,
      fingreso: new Date(""),
      fegreso: new Date(""),
      aporte: 0
    }
   }

  ngOnInit() {
    
    this.date1 = new Date();
    this.date2 = new Date();
    this.date2.setDate(this.date1.getDate()+1)
    this.date = this.dp.transform(this.date1,'YYYY-MM-dd')
    this.date2S = this.dp.transform(this.date2,'YYYY-MM-dd')

    this.hueForm = this.fb.group(
      {
        rol: ['',Validators.compose([
          Validators.required,
        ])],
        habitacion: ['',Validators.compose([
          Validators.required,
        ])],
        nombre:['',Validators.compose([
          Validators.required,
          Validators.pattern(new RegExp(/^[A-Za-z ]+$/))
        ])],
        telefono:['311-8675-309',Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
          Validators.pattern('^[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]$')
        ])],
        fingreso:['',Validators.compose([
          Validators.required,
        ])],
        fegreso:['',Validators.compose([
          Validators.required,
          
        ])],
        aporte:['',Validators.compose([
          Validators.required,
          Validators.pattern(new RegExp(/^[0-9]+$/))
        ])]
        
      }
    );
    this.valMessage={
      nombre:[
        {type:'required',message:'Nombre obligatorio'},
        {type:'pattern',message:'Nombre no formateado correctamente'},
      ],
      telefono:[
        {type:'required',message:'Teléfono obligatorio'},
        {type:'minlength',message:'Teléfono debe contener al menos 3 caracteres'},
        {type:'maxlength',message:'Teléfono debe contener no más de 12 caracteres'},
        {type:'pattern',message:'Teléfono no formateado correctamente 000-0000-000'},
      ],
      fingreso:[
        {type:'required',message:'Teléfono obligatorio'},
        {type:'minlength',message:'Teléfono debe contener al menos 3 caracteres'},
        {type:'maxlength',message:'Teléfono debe contener no más de 12 caracteres'},
        {type:'pattern',message:'Teléfono no formateado correctamente 000-0000-000'},
      ],
      aporte:[
        {type:'required',message:'Aporte obligatorio'},
        {type:'pattern',message:'Ingrese un valor válido'}
      ]
    };
  }

  async presentAlertError(m: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Aviso: ',
      message: m,
      buttons: ['OK'],
    });

    await alert.present();
  }

    async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'GUARDADO CORRECTAMENTE!',
      duration: 1500,
      position,
      color:'success'
    });

    await toast.present();
  }
  public newDate(d: string): Date {
    return new Date(d)
  }

  public addHuesped(){


//          this.huespedService.addHuesped(this.hue);
    if(this.hueForm.valid){
      if(this.huespedService.isRoomAbaliable(this.hueForm.get('habitacion').value)||this.hue.habitacion==undefined){
        console.log("si entro pa "+this.hueForm.get('habitacion').value);
        

        if(this.hueForm.get("fingreso").value>=this.hueForm.get("fegreso").value){
          console.log("Falso")
          this.presentAlertError('Ingrese una fecha de egreso válida');
          return
        }
        var esadmin=false
        var tokendelhuesped;
        if(this.hueForm.get('rol').value=="1"){
          tokendelhuesped=this.hueForm.get('telefono').value+"_"+this.hueForm.get('habitacion').value;
        }else{
          tokendelhuesped="admin"
        } 
        let max:number
        switch(this.hueForm.get('habitacion').value){
          case '1': {max=500
            break;}
          case '2': {max=250
            break;}
          case '3': {max=100
            break;}
          case '4': {max=1500
            break;}
          case '5': {max=2000
            break;}
          case '6': {max=500
            break;}
          case '7': {max=2500
            break;}
          case '8': {max=750
            break;}
          case '9': {max=800
            break;}
        }
        if(this.hueForm.get('aporte').value>max){
          this.presentAlertError('Ingrese un aporte apropiado');
          return
        }
        this.hue = {
            nombre: this.hueForm.get('nombre').value,
            codigo: tokendelhuesped,
            tel: this.hueForm.get('telefono').value,
            habitacion: this.hueForm.get('habitacion').value,

            token: tokendelhuesped,
            aporte: this.hueForm.get('aporte').value,
            admin: esadmin,
            fingreso: this.newDate(this.hueForm.get("fingreso").value),
            fegreso: this.newDate(this.hueForm.get("fegreso").value)
          }  
          this.huespedService.newHuesped(this.hue);
          //FIREBASE
          var elementos = document.getElementsByTagName('input');
          //FIREBASE
          for (let i = 0; i < elementos.length; i++) {
            elementos[i].value='';          
          }
          //this.presentAlert();
          this.presentToast("top")
          console.log(this.hue);
          this.router.navigate(['/list-huesped'],{});
        }else{
          console.log("ya esta ocupada la habitacion "+this.hue.habitacion+" BRO");
          this.presentAlertError('Seleccione otra habitacion, ya contamos con huesped en esta habitacion'+'\n'+'Las habitaciones ocupadas son: '+this.huespedService.getConcatenacionHabsOcupadas())
      }
    }else{
        console.log(this.hue);
        this.presentAlertError('NO se guardó, ¡ingrese todos los campos correctamente!')
    }


  
}

}
import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Huesped } from '../models/huesped';
import { HuespedService } from '../services/huesped.service';
import { FormGroup,FormBuilder,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public loginForm: FormGroup;
  public users: Huesped[]
  public usuario:Huesped;
  public match:boolean;

  constructor(private hs: HuespedService, private fb: FormBuilder, private router: Router) {
    this.match=false;
    this.usuario= {
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
   ngOnInit(){
      
    this.match=false;
    this.usuario= {
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
    //this.users=this.hs.getUsers()
    this.loginForm = this.fb.group({
      pw:['',Validators.required]
    });

 
   }
   
  public checkLogin(): void{
    this.hs.getHuepedes().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
//aqui 

        var us:Huesped;
        us= {
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
        var token = this.loginForm.get('pw').value;
        this.users.forEach(function (huesped) {
          if(huesped.token===token){
          // this.match=true;
          //  this.usuario=huesped;
            console.log(huesped);
            console.log("hola");
            us=huesped;
            console.log(us.admin);
            
            //console.log(this.match);
          }else{
            //this.match=false;
          }
          
          
        });
        console.log(us.id);
        
        if(token==""){

        }
        else{
          if(us.admin){
            this.router.navigate(['/list-huesped'],{})
          }else{
            this.router.navigate(['/tabs/tab2'],{
              
              queryParams:{index:us.id}
            })
          }
        }

      }  
    )

  }
}

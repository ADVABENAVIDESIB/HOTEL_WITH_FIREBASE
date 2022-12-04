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
  private users: Huesped[]
  constructor(private hs: HuespedService, private fb: FormBuilder, private router: Router) {}
  
   ngOnInit(){
    this.users=this.hs.getUsers()
    this.loginForm = this.fb.group({
      pw:['',Validators.required]
    });
   }
   
   public checkLogin(): void{
    var token = this.loginForm.get('pw').value
    console.log(token)
    const match = this.users.findIndex(
      (huesped)=>huesped.token===token
    )
    console.log(match)
    if(match===-1){

    }
    else{
      if(this.users[match].admin){
        this.router.navigate(['/list-huesped'],{})
      }else{
        this.router.navigate(['/tabs/tab2'],{
          queryParams:{index:match}
        })
      }
    }
  }
}

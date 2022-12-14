import { Injectable } from '@angular/core';
import { Huesped } from '../models/huesped';
import { map } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HuespedService {
  private huespedes: Huesped[] = [];
  private lang: string
  private habsOcupadas:string
  private concatenaHabsOcupadas:string
  constructor(private firestore:AngularFirestore) {
    // esto es para el codigo estatico
    this.habsOcupadas="";
    this.huespedes = [
      {
        nombre: 'Diego Cadena',
        codigo: undefined,
        tel: '3111568742',
        habitacion: "undefined",
        token: '2222',
        admin: true
      },
      {
        nombre: 'Adrian Valentin',
        codigo: undefined,
        tel: '31134584216',
        habitacion: "undefined",
        token: '0000',
        admin: true
      },
      {
        nombre: 'Ana Bertha',
        codigo: undefined,
        tel: '31113451647',
        habitacion: "undefined",
        token: '1111',
        admin: true
      },
      {
        nombre: 'Diego2',
        codigo: undefined,
        tel: '31113451647',
        habitacion: "undefined",
        token: '123456',
        admin: false
      },
    ];
    this.lang = "es"
   }//const

   public getHuespedByNombre(nombre: String): Huesped {
    let item: Huesped;
    item = this.huespedes.find( huesped =>{
      return huesped.nombre===nombre;
    })
     return item;
  }
   public addHuesped(newHuesped: Huesped){
    this.huespedes.push(newHuesped);
  }
 
   //getters
   public getHabsOcupadas():string{
    return this.habsOcupadas;
   }
   public getConcatenacionHabsOcupadas():string{
    return this.concatenaHabsOcupadas;
   }
   public getUsers(): Huesped[]{
    return this.huespedes;
   }

   public getClients():Huesped[]{
    return this.huespedes.filter(h=>!h.admin);
   }
   public getAdmins():Huesped[]{
    return this.huespedes.filter(h=>h.admin);
   }
  
   public deleteHuesped(pos:number):Huesped[]{
    this.huespedes.splice(pos,1);
    return this.huespedes;
   }

   public setLang(l: string){
    this.lang = l
  }

  public getLang(): string{
    return this.lang
  }

  public isRoomAbaliable(room:string): boolean { 
    this.habsOcupadas='';
    this.concatenaHabsOcupadas='';
    for(let i = 0 ; i < this.huespedes.length ; i++){
      if(this.huespedes[i].habitacion!='undefined'){
        console.log("ENTRA AL UNDEFINED");
      this.concatenaHabsOcupadas=this.concatenaHabsOcupadas+this.huespedes[i].habitacion+", "
      }
      if(this.huespedes[i].habitacion===room){//si alguna de las habitaciones ya esta ocupada, mandar falso
          
          this.habsOcupadas=this.habsOcupadas+this.huespedes[i].habitacion+", "
          
      }
      //console.log(this.huespedes[i].habitacion);
    }
    console.log(this.concatenaHabsOcupadas);

    if(this.habsOcupadas===''){
      return true
    }
    return false
  }
//terina codigo para BD estatica (arreglos)


  ///inicia codigo para implementar firebase
  public getHuepedes(): Observable<Huesped[]> {
    return this.firestore.collection('huespedes').snapshotChanges().pipe(
      map(actions=> {
        return actions.map(a=>{
          console.log(a);
          const data = a.payload.doc.data() as Huesped;
          console.log(data);
          const id = a.payload.doc.id;
          return { id,...data};
        })
      })
    )
  }
  public getHuespedById(id: string) {
    let result= this.firestore.collection("huespedes").doc(id).valueChanges();
    return result;
  }
  public newHuesped(huesped: Huesped) {
    this.firestore.collection('huespedes').add(huesped);
  }
  public removeStudent(id: string){
    this.firestore.collection("huespedes").doc(id).delete();
  }
}//huespedService

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../dasbord/model/user';
import { UserService } from '../dasbord/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = new FormGroup({
    _id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    adresse: new FormControl(),
  })

  br!: User[]
  user : User={
    email: '', name: '', adresse: '',
    _id: ''
  }
  msg!:string
  id_user=""

  constructor(private _servUser: UserService, private _route: Router, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getTousUsers();
    localStorage.setItem('name','khalil');


  }
  addForm() {
    console.log(this.userForm);


  }
  getTousUsers() {

    this._servUser.getUser().subscribe((data) => {
      console.log(data);


      this.br = data;

    })
  }

  deleteUser(id: string) {

    this._servUser.deletUser(id).subscribe((data) => {
      console.log(data);
    })
  }


sabmit(){
  if(this.id_user==""){
    this.ajouterUser()
  }else{
    this.patchUser()
  }
}


  ajouterUser() {
    this.user._id=this.userForm.value._id ,
    this.user.name= this.userForm.value.name ,
    this.user.email= this.userForm.value.email  ,
    this.user.adresse=this.userForm.value.adresse  ,




      this._servUser.postUser(this.user).subscribe({
        next:(n)=>{
          this.msg=n
        } ,
        error:(e)=>{
          console.log(e.error);

        },complete:()=> {
          console.log('efectuer');


        },
      })
  }

  patchUser() {
console.log(this.userForm.value.email);
console.log(this.id_user);


    this._servUser.apdateUser(this.userForm.value,this.id_user).subscribe( {
      next:(n)=>{
        this.msg=n
        console.log(n)
      },
    })
  }

  update(i:any){

    this.userForm.value.name=i.name,
    this.userForm.value.email= i.email,
    this.userForm.value.adresse=i.adresse
    this.id_user=i._id


  }


}

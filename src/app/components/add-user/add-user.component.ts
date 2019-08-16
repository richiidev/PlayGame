import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase/app';

declare var Swal: any;
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userList: User[];
  info: any;

  constructor(public userService: UserService,public afAuth: AngularFireAuth, private servicio: AuthService,private router: Router){}

  ngOnInit() {
    this.userService.getUsers().snapshotChanges().subscribe(item =>{
      this.userList = [];
      item.forEach(contador => {
        let x = contador.payload.toJSON();
        x['$key'] = contador.key;
        this.userList.push(x as User);
      })
    })
    this.userService.getUsers();
    this.resetForm();
  }

  // seleccionar un usuario a editar
  editUser(user: User){
    this.userService.selectUser = Object.assign({},user);
  }

  // eliminar user
  deleteUser($key: string){
    Swal.fire({
      title: 'Estas seguro',
      text: "Deseas eliminarlo",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.userService.deleteUser($key);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  // agregar usuario
  addUser(userForm: NgForm){
console.log(userForm);
    if(userForm.value.$key == null){
      this.userService.insertUser(userForm.value);
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'success',
        showConfirmButton: false,
        timer: 800
      })
    }else{
      this.userService.updateUser(userForm.value);
      this.resetForm(userForm);
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'success',
        showConfirmButton: false,
        timer: 800
      })

    }
  }
  resetForm(userForm?: NgForm){
    if(userForm != null){
      userForm.reset();
      this.userService.selectUser = new User();
    }

  }

}

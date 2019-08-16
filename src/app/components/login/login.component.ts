import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './../../services/user.service';


declare var Swal: any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 user = new User();
 info: any;
 email:any;
 image: any;
 nombre: any;
 name:'';
 userList: User[];


  constructor(public userService: UserService,public afAuth: AngularFireAuth, private servicio: AuthService,private router: Router){
  }

  ngOnInit() {
  }


  doGoogleLogin(){

    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
        //console.log(res);
        this.info = firebase.auth().currentUser;


        if (this.info != null) {
          this.info.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            document.getElementById('img').innerHTML='<img style="text-align: center;" height="50" class="nav-link width="50" src="'+profile.photoURL+'">';
            //document.getElementById('formTest').innerHTML='<form #userForm="ngForm" (ngSubmit)="addUser(userForm)"></form>';

            document.getElementById('displayName').innerHTML='<input id="displayName" ngModel value="'+profile.displayName+'" type="text" class="form-control" placeholder="displayName" name="displayName" #name="ngModel" [(ngModel)]="userService.selectUser.displayName">';
            document.getElementById('email').innerHTML='<input type="text" class="form-control" value="'+profile.email+'" placeholder="email" name="email" #name="ngModel" [(ngModel)]="userService.selectUser.email" >';
            document.getElementById('photoURL').innerHTML='<input type="text" class="form-control" placeholder="photoURL" value="'+profile.photoURL+'" name="photoURL" #name="ngModel" [(ngModel)]="userService.selectUser.photoURL" >';
            document.getElementById('providerId').innerHTML='<input type="text" class="form-control" placeholder="providerId" value="'+profile.providerId+'" name="providerId" #name="ngModel" [(ngModel)]="userService.selectUser.providerId" >';
            document.getElementById('uid').innerHTML='<input type="text" class="form-control" placeholder="uid" value="'+profile.uid+'" name="uid" #name="ngModel" [(ngModel)]="userService.selectUser.uid" >';
            this.nombre = profile.displayName;
            console.log(this.nombre);
          });
        }
      })
      //this.router.navigate(['adduser']);

    })

}

  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
        //console.log(res);
        this.info = firebase.auth().currentUser;

        if(this.info != null){
          this.info.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            document.getElementById('img').innerHTML='<img style="text-align: center;" height="50" class="nav-link width="50" src="'+profile.photoURL+'">';
            document.getElementById('providerId').innerHTML='<p>'+profile.providerId+'</p>';
            document.getElementById('uid').innerHTML='<p>'+profile.uid+'</p>';
            document.getElementById('displayName').innerHTML='<p>'+profile.displayName+'</p>';
            document.getElementById('email').innerHTML='<p>'+profile.email+'</p>';
         //   this.email = profile.email
         //   console.log(this.email);



          });

        }
        this.info = res.additionalUserInfo.profile;
        console.log(this.info);

      }, err => {
        console.log(err);
        reject(err);
      })
      //this.router.navigate(['adduser']);

    })
 }

// metodo corto
  facebook(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
}

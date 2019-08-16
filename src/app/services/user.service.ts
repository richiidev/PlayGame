import { User } from './../models/user';
import { Injectable } from '@angular/core';
// conect to database firebase
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // list firebase
  userList: AngularFireList<any>;
  selectUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getUsers(){
    return this.userList = this.firebase.list('users');
  }
  insertUser(user: User){
    this.userList.push({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      providerId: user.providerId,
      uid: user.uid,
      nickName: user.nickName,
      idPlay: user.idPlay
    });
  }
  updateUser(user: User){
    this.userList.update(user.$key,{
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      providerId: user.providerId,
      uid: user.uid,
      nickName: user.nickName,
      idPlay: user.idPlay
    });

  }
  deleteUser($key: string){
    this.userList.remove($key);
  }

}

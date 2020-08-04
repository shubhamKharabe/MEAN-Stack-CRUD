import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListALLComponent implements OnInit {
  userList: [];
  selectedUser: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAllUsers(null).subscribe(result => {
      if (result) {
        this.userList = result.data;
      } else {

      }
    });
  }

  deleteUser() {
    console.log(this.selectedUser, 'xxxxxxxxxxx');
    this.userService.deleteUser(this.selectedUser._id).subscribe(result => {
      if (result) {
        this.getAll();
      }
    });
  }

  selectUser(user) {
    console.log(user, 'xxxxxxxxxxx');
    this.selectedUser = user;
  }
}

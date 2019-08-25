import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import{UsersService} from '../services/users.service'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
public Users =[];
  constructor(private user :UsersService) { }

  ngOnInit() {
    this.Users=this.user.getDetails();
    }
  }



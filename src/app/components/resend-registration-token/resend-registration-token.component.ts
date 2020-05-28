import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/core/model/userDTO';

@Component({
  selector: 'app-resend-registration-token',
  templateUrl: './resend-registration-token.component.html',
  styleUrls: ['./resend-registration-token.component.scss']
})
export class ResendRegistrationTokenComponent implements OnInit {

  user = new UserDTO();

  constructor() { }

  ngOnInit() {
  }

}

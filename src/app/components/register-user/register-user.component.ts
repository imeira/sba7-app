import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/core/model/userDTO';
import { ApiService } from 'src/app/core/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  public user = new UserDTO();

  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
  }

  save(): void {
    this.apiService.registerUser(this.user).subscribe(data => {
      console.log('Usuários registrado com sucesso!');
    }, error => {
      console.log('Error ao criar usuário ', error);
    });
  }
  goBack() {
    this.location.back();
  }
}

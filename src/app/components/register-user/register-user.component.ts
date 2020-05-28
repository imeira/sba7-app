import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/core/model/userDTO';
import { ApiService } from 'src/app/core/api.service';
import { Location } from '@angular/common';
import { MessageService } from 'src/app/core/message.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  public user = new UserDTO();

  constructor(private apiService: ApiService, 
              private location: Location,
              private messageService: MessageService) { }

  ngOnInit() {
  }

  save(): void {
    this.apiService.registerUser(this.user).subscribe(data => {
     this.messageService.showSuccess('Cadastro de Usuário',
     'Usuário regsitrado com sucesso, favor ferificar o seu e-mail para confirmar o seu cadastro!');
    }, error => {
      this.messageService.showError('Cadastro de usuário', 'Falha ao tentar registrar!');
    });
  }
  goBack() {
    this.location.back();
  }
}

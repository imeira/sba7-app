import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastrService: ToastrService) { }

  showSuccess(titulo, message) {
    this.toastrService.success(titulo, message);
  }

  showWarning(titulo, message) {
    this.toastrService.warning(titulo, message);
  }

  showError(titulo, message) {
    this.toastrService.error(titulo, message);
  }

}

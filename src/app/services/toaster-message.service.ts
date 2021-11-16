import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ToasterMessageService {

    constructor(private toastr: ToastrService) { }

    showErrorMessage(message: string, title?: string, timeOut?: number) {
        this.toastr.error(message, title, {
            timeOut: timeOut || 3000,
            enableHtml: true,
            progressBar: true
        });
    }

    showSuccessMessage(message: string, title?: string, timeOut?: number) {
        this.toastr.success(message, title, {
            timeOut: timeOut || 3000,
            enableHtml: true,
            progressBar: true
        });
    }

    showInfoMessage(message: string, title?: string, timeOut?: number) {
        this.toastr.info(message, title, {
            timeOut: timeOut || 3000,
            enableHtml: true,
            progressBar: true
        });
    }

    showWarningMessage(message: string, title?: string, timeOut?: number) {
        this.toastr.warning(message, title, {
            timeOut: timeOut || 3000,
            enableHtml: true,
            progressBar: true
        });
    }

    closeAllMessages() {
        this.toastr.clear();
    }
}

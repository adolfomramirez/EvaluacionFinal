import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  requestForm!: FormGroup;

  constructor(private fb: FormBuilder, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.requestForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      carrera: ['', [Validators.required, Validators.minLength(5)]],
      carnet: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      mensaje: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  async submitRequest() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Está seguro de enviar esta solicitud?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log(this.requestForm.value);
          }
        }
      ]
    });

    await alert.present();
  }
}

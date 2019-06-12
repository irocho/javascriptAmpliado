import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'condicional';
    pregunta = 'Como vai a cousa?';

    contesta;
    resposta(valor){
        this.contesta = valor;
    }
}

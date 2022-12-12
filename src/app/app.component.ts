import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clone-ifood';

  restaurantes: any;
  constructor(private apiservice: ApiService){}

ngOnInit() {
  this.getAllRestaurantes();
}

getAllRestaurantes() {
  this.apiservice.getAllData().subscribe((res)=>{
    this.restaurantes = res.data;
  });
}

}

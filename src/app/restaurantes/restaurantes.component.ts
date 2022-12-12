import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

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

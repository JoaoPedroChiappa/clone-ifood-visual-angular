import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  restaurantes: any;
  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.getAllRestaurantes();
  }

  getAllRestaurantes() {
    this.apiservice.getAllData().subscribe((res)=>{
      this.restaurantes = res.data;
    });
  }

}

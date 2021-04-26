import { Component, OnInit } from '@angular/core';
import { Flower, FlowerServiceService } from 'src/app/services/flower-service.service';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent implements OnInit {
  
  imagen: any;
  flores: Flower[];
  
  constructor(private flowerService: FlowerServiceService) { 
    this.flores = [];
  }

  ngOnInit(): void {
    this.imagen=localStorage.getItem('img');
    this.flowerService.getAll().subscribe((res) =>{
      this.flores = res.map((flor) => {
        return{
          ...flor.payload.doc.data() as {},
        } as Flower;
      });
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { Flower, FlowerServiceService } from 'src/app/services/flower-service.service';
import { FloresComponent } from '../flores/flores.component';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent implements OnInit {
  
  imagen: any;
  flores: Flower[];
  predictedName: string;
  predictedFlower: Flower;
  
  constructor(private flowerService: FlowerServiceService) { 
    this.flores = []; 
  }

  ngOnInit(): void {   
    
    this.flowerService.getAll().subscribe((res) =>{
      this.flores = res.map((flor) => 
          flor.payload.doc.data() as Flower
      );
    });

    this.imagen=localStorage.getItem('img');

    this.predictedName = this.predict(this.imagen);

    for(let d in this.flores){
      console.log(d);
    }
  }

  predict(img: string): string{
    return null;
  }


}

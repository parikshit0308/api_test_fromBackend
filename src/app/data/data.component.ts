import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  data: any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getDummyData();
  }

  getDummyData(){
    this.api.getData().subscribe(data =>{
      this.data = data;
      console.log(this.data);
    })

  }

}

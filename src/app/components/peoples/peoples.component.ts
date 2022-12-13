import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/interfaces/ipeople';
import { HttpService } from 'src/app/servicess/http.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {
  peoples!: IPeople[];
  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.update();
  }
  update() {
    this.service.getPeople().subscribe((response) => { this.peoples = response })
  }
}

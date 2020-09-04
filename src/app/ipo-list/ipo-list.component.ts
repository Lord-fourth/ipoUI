import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IpoClass} from './../ipo-class';

import { IpoServiceService } from './../ipo-service.service';



@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IpoListComponent implements OnInit {

  IpoClasses :IpoClass[];

  constructor(private _router : Router , private IpoServiceService: IpoServiceService) { }

  ngOnInit(): void {

    this.IpoServiceService.findAll().subscribe(data => {
      this.IpoClasses = data;
    });

  }
}

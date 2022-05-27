import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/components/interface/usuario';






const listusuarios: Usuario[] = [
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},
  {id: 1, nombrecampana: 'Hydrogen', direccion: 'cr 38d #1233', nresponsable: 'Haaa'},

];

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombrecampaña', 'direccion', 'nresponsable' , 'acciones'];
  dataSource = listusuarios;
  constructor() { }

  ngOnInit() {
  }

}

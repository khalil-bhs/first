import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{
  name :string = ""
  tab !: [{name:string}]
  c=localStorage.getItem('name')
  ngOnInit(): void {
this.setValue();

  }
setValue(){
this.tab.push({name:this.name})
}
clear(){
  localStorage.clear()
}
}

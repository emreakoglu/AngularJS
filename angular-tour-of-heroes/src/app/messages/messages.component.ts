import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { } // messageService değişkenine message.component.html içinde kullanılıacak
  // kullanılacağı için bu değişken public olmuştur

  ngOnInit() {
  }

}

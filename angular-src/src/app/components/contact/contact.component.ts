import { Component, OnInit } from '@angular/core';
import { Contact, CONTACTS } from '../../../../../data/contact-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../css/app.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = CONTACTS;

  constructor() { }

  ngOnInit() {
  }

}

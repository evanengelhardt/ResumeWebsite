import { Component, OnInit } from '@angular/core';
import { Contact, CONTACTS } from '../../../../../data/contact-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = CONTACTS;

  constructor() { }

  ngOnInit() {
  }

}

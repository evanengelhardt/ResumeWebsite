import { Component, OnInit } from '@angular/core';
import { Experience, EXPERIENCES } from '../../../../../data/experience-data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css',
              '../../css/app.css']
})
export class ExperienceComponent implements OnInit {
  experiences : Experience[] = EXPERIENCES;
  companyName: String;
  position: String;
  startDate: String;
  endDate: String;
  description: String[];
  headingTag: String;
  collapseTag1: String;
  collapseTag2: String;

  constructor() { }

  ngOnInit() {
  }

  getCompanyDetails(company){
    console.log(company);
    this.companyName = company.company;
    this.position = company.position;
    this.startDate = company.startDate;
    this.endDate = company.endDate;
    this.description = company.description
  }

}

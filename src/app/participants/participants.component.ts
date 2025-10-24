import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  PARTICIPANT_GROUPS,
  GUESTS,
  LECTURERS
} from './participants.data';

@Component({
  selector: 'app-participants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  title = 'قائمة المشاركين';

  participantGroups = PARTICIPANT_GROUPS;
  guests = GUESTS;
  lecturers = LECTURERS;

  allLeaders: string[] = [];
  table2MaxLength = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.allLeaders = this.participantGroups
      .flatMap(group => group.leaders)
      .filter(leader => leader); 

    this.table2MaxLength = Math.max(
      this.allLeaders.length,
      this.lecturers.list.length,
      this.guests.list.length
    );
  }

  get table2Rows(): number[] {
    return Array(this.table2MaxLength).fill(0).map((x, i) => i);
  }
  get totalParticipants(): number {
    return this.totalYouth + this.totalLeaders + this.guests.list.length + this.lecturers.list.length;
  }
  get totalCountries(): number {
    return this.participantGroups.filter(
      (group) => group.youthParticipants.length > 0 || group.leaders.length > 0
    ).length;
  }
  get totalLeaders(): number {
    return this.participantGroups.reduce(
      (total, group) => total + group.leaders.length,
      0
    );
  }
  get totalYouth(): number {
    return this.participantGroups.reduce(
      (total, group) => total + group.youthParticipants.length,
      0
    );
  }
  cleanCountryName(country: string): string {
    const parts = country.split(' ');
    return parts[parts.length - 1];
  }


  goBack(): void {
    this.router.navigate(['/documents']);
  }
}
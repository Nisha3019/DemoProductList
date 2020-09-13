import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  IsmodelShow: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.IsmodelShow = false;
    this.router.navigate(['/list']);
  }
}

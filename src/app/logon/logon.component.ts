import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss']
})
export class LogonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogon(): void {
    this.router.navigate(['/home']);
  }

}

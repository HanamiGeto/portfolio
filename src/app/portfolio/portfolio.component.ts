import { Component, OnInit } from '@angular/core';
import AOS from "aos";


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}

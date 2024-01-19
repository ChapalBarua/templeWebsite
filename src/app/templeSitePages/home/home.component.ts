import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  
  @Input()
  images: Record<string, string | number>[] = [];

  ngOnInit(): void {
  }

}

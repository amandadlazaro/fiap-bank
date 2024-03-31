import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  public links = [
    {
      label: 'Home',
      link: './home',
      index: 0
    }
  ];
  public activeLinkIndex = -1; 


}
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    }, 
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home page'
    }, 
    
  ];


  
  export default routeConfig;
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { ProfileComponent} from './profile/profile.component';
import { ProfileService} from './profile/profile.service';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  AppRoutingModule
                  ],
  declarations: [ AppComponent,
                  ProfileComponent
                  ],
  providers:    [ProfileService],   
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

  // imports:      [ BrowserModule,
  //                 FormsModule,
  //                 HttpModule,
  //                 InMemoryWebApiModule.forRoot(InMemoryDataService),
  //                 AppRoutingModule
  //                 ],

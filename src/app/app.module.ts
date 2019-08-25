import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { PricingOptionsComponent } from './pricing-options/pricing-options.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { OurAppComponent } from './our-app/our-app.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http';

import { CountPipe } from './pipes/count.pipe';
import { SummeryPipe } from './pipes/summery.pipe';
import{UsersService} from  './services/users.service'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
   
    PricingOptionsComponent,
    TestimonialsComponent,
    OurAppComponent,
    FooterComponent,
    PagenotfoundComponent,
    CountPipe,
    SummeryPipe,
 
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

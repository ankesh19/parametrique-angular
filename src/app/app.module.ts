import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FtthComponent } from './ftth/ftth.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CorporateRestructuringComponent } from './expertise/corporate-restructuring/corporate-restructuring.component';
import { LitigationConsultingComponent } from './expertise/litigation-consulting/litigation-consulting.component';
import { StrategicConsultingComponent } from './expertise/strategic-consulting/strategic-consulting.component';
import { CorporateFinanceComponent } from './expertise/corporate-finance/corporate-finance.component';
import { EconomicConsultingComponent } from './expertise/economic-consulting/economic-consulting.component';
import { MenuComponent } from './layout/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    FtthComponent,
    ServicesComponent,
    GalleryComponent,
    ContactUsComponent,
    CorporateRestructuringComponent,
    LitigationConsultingComponent,
    StrategicConsultingComponent,
    CorporateFinanceComponent,
    EconomicConsultingComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

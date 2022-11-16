import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CorporateFinanceComponent } from './expertise/corporate-finance/corporate-finance.component';
import { CorporateRestructuringComponent } from './expertise/corporate-restructuring/corporate-restructuring.component';
import { EconomicConsultingComponent } from './expertise/economic-consulting/economic-consulting.component';
import { LitigationConsultingComponent } from './expertise/litigation-consulting/litigation-consulting.component';
import { StrategicConsultingComponent } from './expertise/strategic-consulting/strategic-consulting.component';
import { FtthComponent } from './ftth/ftth.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'ftth', component: FtthComponent},
  {path: 'expertise/corporate-finance', component: CorporateFinanceComponent},
  {path:'expertise/corporate-restructuring', component: CorporateRestructuringComponent},
  {path:'expertise/economic-consulting', component: EconomicConsultingComponent},
  {path:'expertise/litigation-consulting', component: LitigationConsultingComponent},
  {path:'expertise/strategic-consulting', component: StrategicConsultingComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

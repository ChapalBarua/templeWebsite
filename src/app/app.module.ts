import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService, MonthAgendaService, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { CarouselModule } from "@syncfusion/ej2-angular-navigations";
import { FileDownloaderComponent } from './file-downloader/file-downloader.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import  {MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import  {MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './templeSitePages/home/home.component';
import { AboutBSOComponent } from './templeSitePages/about-bso/about-bso.component';
import { AboutTempleComponent } from './templeSitePages/about-temple/about-temple.component';
import { WelcomeComponent } from './templeSitePages/welcome/welcome.component'
import { EventCalendarComponent } from './calendar/eventCalendar.component';
import { AlmsCalendarComponent } from './calendar/almsCalendar.component';
import { CommitteeComponent } from './templeSitePages/committee/committee.component';
import { TrusteeComponent } from './templeSitePages/trustee/trustee.component';
import { ContactComponent } from './templeSitePages/contact/contact.component';
import { EmailFormComponent } from './templeSitePages/email-form/email-form.component';
import { RegisterComponent } from './templeSitePages/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './templeSitePages/login/login.component';
import { NotificationMessageComponent } from './notification-message/notification-message.component';
import { FooterComponent } from './templeSitePages/footer/footer.component';
import { LeftPanelComponent } from './templeSitePages/left-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ImageUploadComponent,
    DocumentUploadComponent,
    FileDownloaderComponent,
    HomeComponent,
    AboutBSOComponent,
    AboutTempleComponent,
    WelcomeComponent,
    EventCalendarComponent,
    AlmsCalendarComponent,
    CommitteeComponent,
    TrusteeComponent,
    ContactComponent,
    EmailFormComponent,
    RegisterComponent,
    LoginComponent,
    NotificationMessageComponent,
    FooterComponent,
    LeftPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScheduleModule,
    CarouselModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
     DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService, MonthAgendaService, TimelineViewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

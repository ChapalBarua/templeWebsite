import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, TimelineMonthService, MonthAgendaService, TimelineViewsService, EventSettingsModel, View,ActionEventArgs, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { Component } from '@angular/core';
import { CalendarComponent } from './calendar.component';
@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
  })
  export class EventCalendarComponent extends CalendarComponent{

  }
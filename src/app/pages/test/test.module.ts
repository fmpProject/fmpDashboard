import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Test } from './test.component';
import { routing }       from './test.routing';

// import { PopularApp } from './popularApp';
// import { PieChart } from './pieChart';
// import { TrafficChart } from './trafficChart';
// import { UsersMap } from './usersMap';
// import { LineChart } from './lineChart';
// import { Feed } from './feed';
// import { Todo } from './todo';
// import { Calendar } from './calendar';
// import { CalendarService } from './calendar/calendar.service';
// import { FeedService } from './feed/feed.service';
// import { LineChartService } from './lineChart/lineChart.service';
// import { PieChartService } from './pieChart/pieChart.service';
// import { TodoService } from './todo/todo.service';
// import { TrafficChartService } from './trafficChart/trafficChart.service';
// import { UsersMapService } from './usersMap/usersMap.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    // PopularApp,
    // PieChart,
    // TrafficChart,
    // UsersMap,
    // LineChart,
    // Feed,
    // Todo,
    // Calendar,
    Test
  ],
  providers: [
    // CalendarService,
    // FeedService,
    // LineChartService,
    // PieChartService,
    // TodoService,
    // TrafficChartService,
    // UsersMapService
  ]
})
export class TestModule {}
  // export default class TestModule {}    //NOTA: Si se usa DEFAULT, en el ROUTING no se puede indicar la clase, sino que se debe dejar vacia y viceversa ... { path: 'test', loadChildren: 'app/pages/test/test.module#TestModule' },

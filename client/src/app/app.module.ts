import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TasklistService } from './services/tasklist.service';
import { CompletedPipe } from './pipes/completed.pipe';
import { InProgressPipe } from './pipes/in-progress.pipe';
import { ArchivePipe } from './pipes/archive.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CompletedPipe,
    InProgressPipe,
    ArchivePipe,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [TasklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }

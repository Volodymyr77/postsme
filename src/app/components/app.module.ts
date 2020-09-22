import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FullpostComponent } from './fullpost/fullpost.component';

let FullPostComponent;
const routes: Routes = [
  {path:'posts', component : PostComponent},
  {path:'posts/:id',component:FullPostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FullpostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

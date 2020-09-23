import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FullpostComponent} from './fullpost/fullpost.component';



const routes: Routes = [
  {path:'posts', component : PostComponent},
  {path:'posts/:id', component: FullpostComponent}
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

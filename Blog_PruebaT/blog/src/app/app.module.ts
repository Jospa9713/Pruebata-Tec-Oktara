import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BlogComponent} from './blog/blog.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsBlogComponent } from './details-blog/details-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    MenuComponent,
    DetailsBlogComponent
  ],
  imports: [ 
    FormsModule,
    BrowserModule,
    HttpClientModule,NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

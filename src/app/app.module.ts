import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './page/login/login.component';
import { IndexComponent } from './page/index/index.component';
import { AsideComponent } from './component/aside/aside.component';
import { HomeComponent } from './page/index/home/home.component';
import { SystemComponent } from './page/index/system/system.component';
import { AsideNavComponent } from './component/aside/aside-nav/aside-nav.component';
import { ContentComponent } from './page/index/content/content.component';
import { ContentHeaderComponent } from './page/index/content/content-header/content-header.component';
import { ContentMainComponent } from './page/index/content/content-main/content-main.component';
import { ContentFooterComponent } from './page/index/content/content-footer/content-footer.component';
import { SystemUserComponent } from './page/index/system/system-user/system-user.component';
import { SystemGroupComponent } from './page/index/system/system-group/system-group.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { HomeTextComponent } from './page/index/home/home-text/home-text.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HomeComponent,
    SystemComponent,
    AsideNavComponent,
    LoginComponent,
    IndexComponent,
    ContentComponent,
    ContentHeaderComponent,
    ContentMainComponent,
    ContentFooterComponent,
    SystemUserComponent,
    SystemGroupComponent,
    PageNotFoundComponent,
    HomeTextComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

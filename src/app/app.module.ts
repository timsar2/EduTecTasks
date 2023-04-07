import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ShellModule } from '@app/shell/shell.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

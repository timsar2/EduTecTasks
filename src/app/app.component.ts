import { Component, OnInit } from '@angular/core'
import { UiStore } from '@app/shared/data-access/store/ui.store'
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(public uiStore: UiStore, private breakpointObserver: BreakpointObserver) {}

  public ngOnInit(): void {
    this.uiStore.observeIsMobile(this.breakpointObserver.observe('(max-width: 640px)'))
  }
}

import { BreakpointState } from '@angular/cdk/layout'
import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { Observable, tap } from 'rxjs'

interface UiState {
  isSidebarCollapsed: boolean
  isMobile: boolean
}

@Injectable({ providedIn: 'root' })
export class UiStore extends ComponentStore<UiState> {
  public isMobile$ = this.select(state => state.isMobile)

  private _isSidebarCollapsed$ = this.select(state => state.isSidebarCollapsed)
  public isSidebarCollapsed$ = this.select(
    this.isMobile$,
    this._isSidebarCollapsed$,
    (isMobile, isSidebarCollapsed) => {
      return isSidebarCollapsed
    }
  )

  constructor() {
    super({ isSidebarCollapsed: false, isMobile: false })
  }

  public readonly toggleSidebar = this.updater(
    (state): UiState => ({ ...state, isSidebarCollapsed: !state.isSidebarCollapsed })
  )

  public readonly observeIsMobile = this.effect((trigger$: Observable<BreakpointState>) => {
    return trigger$.pipe(tap(v => this.patchState({ isMobile: v.matches })))
  })
}

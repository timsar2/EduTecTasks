/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { TopSectionComponent } from './top-section.component'

describe('TopSectionComponent', () => {
  let component: TopSectionComponent
  let fixture: ComponentFixture<TopSectionComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopSectionComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

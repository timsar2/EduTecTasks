/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { SectionOneComponent } from './section-one.component'

describe('TopSectionComponent', () => {
  let component: SectionOneComponent
  let fixture: ComponentFixture<SectionOneComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionOneComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

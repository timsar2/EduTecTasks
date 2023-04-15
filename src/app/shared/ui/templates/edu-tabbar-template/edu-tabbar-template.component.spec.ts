import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EduTabbarTemplateComponent } from './edu-tabbar-template.component'

describe('EduTabbarTemplateComponent', () => {
  let component: EduTabbarTemplateComponent
  let fixture: ComponentFixture<EduTabbarTemplateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduTabbarTemplateComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(EduTabbarTemplateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

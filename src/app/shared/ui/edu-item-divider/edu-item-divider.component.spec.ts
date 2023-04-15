import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EduItemDividerComponent } from './edu-item-divider.component'

describe('EduItemDividerComponent', () => {
  let component: EduItemDividerComponent
  let fixture: ComponentFixture<EduItemDividerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduItemDividerComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(EduItemDividerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

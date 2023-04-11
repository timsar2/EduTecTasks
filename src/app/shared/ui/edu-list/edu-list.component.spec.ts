import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EduListComponent } from './edu-list.component'

describe('EduListComponent', () => {
  let component: EduListComponent
  let fixture: ComponentFixture<EduListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduListComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(EduListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

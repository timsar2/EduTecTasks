import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SpaceSystemComponent } from './space-system.component'

describe('SpaceSystemComponent', () => {
  let component: SpaceSystemComponent
  let fixture: ComponentFixture<SpaceSystemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceSystemComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(SpaceSystemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdvancedCardComponent } from './advanced-card.component'

describe('AdvancedCardComponent', () => {
  let component: AdvancedCardComponent
  let fixture: ComponentFixture<AdvancedCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedCardComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(AdvancedCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

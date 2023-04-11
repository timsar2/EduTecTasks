import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor() {}

  public scrollToElementById(id: string): void {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }
}

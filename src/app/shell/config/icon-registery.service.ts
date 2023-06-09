import { Injectable } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

interface Icon {
  name: string
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class IconRegisteryService {
  private icons: Icon[] = [
    {
      name: 'edu-astronut',
      url: '../../../assets/images/svgs/astronut.svg'
    },
    {
      name: 'edu-snow',
      url: '../../../assets/images/svgs/snow.svg'
    },
    {
      name: 'edu-ball',
      url: '../../../assets/images/svgs/eduball.svg'
    },
    {
      name: 'edu-chip',
      url: '../../../assets/images/svgs/educhip.svg'
    }
  ]

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.icons.forEach(elm => {
      this.matIconRegistry.addSvgIcon(elm.name, this.domSanitizer.bypassSecurityTrustResourceUrl(elm.url))
    })
  }
}

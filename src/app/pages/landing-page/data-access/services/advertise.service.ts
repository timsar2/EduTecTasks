import { Injectable } from '@angular/core'
import { IContentLoder } from '@app/shared/data-access/models/content-loader.model'

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {
  public getAdvertise(): IContentLoder {
    return {
      title: 'The first provider of space systems,applications and services in Luxembourg',
      content: `Since 2006 as part of the large network of OHB companies, LuxSpace is offering innovative and affordable
      infrastructure products and solutions for space, as well as space-augmented applications and services.`
    } satisfies IContentLoder
  }
}

import { Injectable } from '@angular/core'
import { IContentLoder } from '@app/shared/data-access/models/content-loader.model'

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {
  getAdvertise(): IContentLoder {
    return {
      title: '85% OFF',
      content: `Find Dress Offer stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection.`
    } satisfies IContentLoder
  }
}

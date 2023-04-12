import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IContentLoder } from '@app/shared/data-access/models/content-loader.model'

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionOneComponent implements OnInit {
  data?: IContentLoder = {
    title: 'The first provider of space systems,applications and services in Luxembourg',
    content: `Since 2006 as part of the large network of OHB companies, LuxSpace is offering innovative and affordable
    infrastructure products and solutions for space, as well as space-augmented applications and services.`
  } satisfies IContentLoder

  protected advertise?: IContentLoder

  constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ advertise }) => {
      this.advertise = advertise
    })
  }
}

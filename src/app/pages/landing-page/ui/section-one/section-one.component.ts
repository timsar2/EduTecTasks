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
  advertise?: IContentLoder

  constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit() {
    this.activatedRoute.data.subscribe(({ advertise }) => {
      this.advertise = advertise
    })
  }
}

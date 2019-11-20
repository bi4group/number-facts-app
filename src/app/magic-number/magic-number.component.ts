import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MagicNumberService} from '../../services/magic-number.service';

@Component({
  selector: 'app-magic-number',
  templateUrl: './magic-number.component.html',
  styleUrls: ['./magic-number.component.scss']
})
export class MagicNumberComponent implements OnInit, OnChanges {
  public text: string;
  public found: boolean = false; // tslint:disable-line
  @Input() protected magicNumber;

  constructor(protected magicNumberService: MagicNumberService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.magicNumber) {
      this.magicNumberService.getRandomFact(this.magicNumber).subscribe(response => {
        this.text = response.text;
        this.found = response.found;
      });
    }
  }
}

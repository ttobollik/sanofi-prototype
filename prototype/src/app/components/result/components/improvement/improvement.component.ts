import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-improvement',
  templateUrl: './improvement.component.html',
  styleUrls: ['./improvement.component.css']
})
export class ImprovementComponent implements OnInit {

  @Input() improvementType;
  @Input() improvements;
  title = '';

  constructor() { }

  ngOnInit(): void {
    this.determineTitleText();
  }

  determineTitleText() {
    switch(this.improvementType){
      case 'red':
        this.title = 'An diesen Dingen könntest du noch arbeiten.';
        break;
      case 'yellow':
        this.title = 'Hier könntest du dich ein bisschen verbessern.';
        break;
      case 'green':
        this.title = 'Weiter so. Das machst du super!';
        break;
      default:
        this.title = 'Unknown improvement';
    }
  }


}

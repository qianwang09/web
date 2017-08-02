import { Component } from '@angular/core';
import { ConfidentialMatch} from './confidentials/confidentialmatch';
import {ConfidentialMatchService} from './confidentials/confidentialmatchservice';
import '../assets/css/base.css';
import '../../node_modules/primeng/resources/themes/omega/theme.css';
import '../../node_modules/primeng/resources/primeng.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class MyConfidentialMatch implements ConfidentialMatch {
    constructor(public Status?, public ResultId?, public ClientName?, public ProjectName?) {}
}


@Component({
  selector: 'myreview',
  templateUrl: './myreview.component.html'
})
export class MyReviewComponent {


    confidential: ConfidentialMatch = new MyConfidentialMatch();

    selectedConfidential: ConfidentialMatch;

    confidentials: ConfidentialMatch[];

    constructor(private confidentialService: ConfidentialMatchService) { }

    ngOnInit() {
        this.confidentialService.getConfidentials().then(confs => this.confidentials = confs);
    };


    findSelectedCarIndex(): number {
        return this.confidentials.indexOf(this.selectedConfidential);
    }
}

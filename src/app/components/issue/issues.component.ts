import {Component, OnInit} from '@angular/core';
import {HelpService} from '../../services/help.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issues.component.html',
  styles: []
})
export class IssuesComponent implements OnInit {

  constructor(private help: HelpService) {
  }

  ngOnInit() {
  }

  test() {
    this.help.test()
  }

  logOut() {
    this.help.logOut()
  }
}

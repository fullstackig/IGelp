import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../services/help.service';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styles: []
})
export class IssueComponent implements OnInit {

  constructor(private help:HelpService) { }

  ngOnInit() {
  }
test(){
  this.help.test()
}

logOut(){
  this.help.logOut()
}
}

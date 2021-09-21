import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { Org } from './org.model';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  orgs: Org[];
  contacts: Contact[];
  searchExpression: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchExpression = '';
    this.executeSearch(this.searchExpression);
  }

  onSearchChanged(item) {
    this.searchExpression = item.value;
    this.executeSearch(this.searchExpression);
  }

  executeSearch(expr) {
    this.orgs = this.searchService.getAllOrgs(expr);
    this.contacts = this.searchService.getAllContacts(expr);
  }

}

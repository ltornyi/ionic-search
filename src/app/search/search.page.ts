import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';
import { Org } from './org.model';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  orgs$: Observable<Org[]>;
  contacts$: Observable<Contact[]>;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.orgs$ = this.searchService.orgs;
    this.contacts$ = this.searchService.contacts;
  }

  onSearchChanged(item) {
    this.searchService.searchOrgs(item.value).subscribe();
    this.searchService.searchContacts(item.value).subscribe();
  }

}

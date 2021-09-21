import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { Org } from './org.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private orgs: Org[] = [
    {entityId: 1, clientName: 'First client', clientType: 'Administrative'},
    {entityId: 2, clientName: 'Second client', clientType:'Portfolio Company'}
  ];

  private contacts: Contact[] = [
    {entityId: 3, clientName: 'First contact', orgName: 'A random org'},
    {entityId: 4, clientName: 'Second contact', orgName: 'Another org'}
  ];

  getAllOrgs(searchExpression: string) {
    if (searchExpression === '') {
      return [];
    }
    return [...(this.orgs.filter(e => e.clientName.includes(searchExpression)))];
  }

  getAllContacts(searchExpression: string) {
    if (searchExpression === '') {
      return [];
    }
    return [...this.contacts.filter(e => e.clientName.includes(searchExpression))];
  }
}

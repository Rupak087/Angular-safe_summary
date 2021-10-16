import { Injectable } from '@angular/core';
import { environment } from '../../../../../src/environments/environment';
import { AddTransaction, SafeSummary, Transaction} from '../model/safeSummary.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SafeSummaryService {

  constructor(private http: HttpClient) { }

  getSafeSummary() {
    const url = `${environment.backendUrl}` + "safeSummary/viewAllSafeSummary";
    return this.http.get<SafeSummary[]>(url);
  }
  getTransaction() {
    const url = `${environment.backendUrl}` + "transaction/getAllTransaction";
    return this.http.get<Transaction[]>(url);
  }
  addSafeSummary(){
    const empUrl = `${environment.backendUrl}`  + "transaction/addTransaction";
    return this.http.post<AddTransaction[]>(empUrl, emp); 
  }
}
function emp<T>(empUrl: string, emp: any) {
    throw new Error('Function not implemented.');
}


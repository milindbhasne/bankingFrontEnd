import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject, BehaviorSubject } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()

export class DataService {


        
        public subject = new BehaviorSubject<any>(null);

        sendMessage(message: string) {
                this.subject.next({ text: message });
            }
        
            clearMessages() {
                this.subject.next(null);
            }
        
            getMessage(): Observable<any> {
                return this.subject.asObservable();
            }

constructor(private httpclient: HttpClient) { }


}







import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CommuncationServiceService {

  private subject = new Subject<any>();
    sendMessage(message: any) {
      // console.log("message", message)
        this.subject.next({ data: message });

    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}

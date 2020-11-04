import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FakeService2 {

    constructor(private httpClient: HttpClient) { }

    sayHello(): string {
        return 'Welcome to Custom Service using DI'
    }

    loadData(): Observable<Fake[]> {
        return this.httpClient.get<Fake[]>("https://jsonplaceholder.typicode.com/todos/");
    }
}

export class Fake {
    constructor(public userId: number,
        public id: number,
        public title: string,
        public completed: boolean) { }
}
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class db {
    constructor(private http: Http) { }

    private data: any[] = [
        { id: "1", name: "Gareth", email: "urna.suscipit.nonummy@nisi.org" },
        { id: "2", name: "Edward", email: "semper.Nam.tempor@est.edu" },
        { id: "3", name: "Kamal", email: "felis.orci@diamPellentesquehabitant.edu" },
        { id: "4", name: "Ezra", email: "tortor.at.risus@hendrerit.co.uk" },
        { id: "5", name: "Beck", email: "lobortis.Class@Integer.net" },
        { id: "6", name: "Armand", email: "ipsum@etmalesuadafames.org" },
        { id: "7", name: "Stewart", email: "Donec@Donecelementumlorem.co.uk" }
    ];
    getDataFromUrl(url: string) {
       return this.http.get(url);
    }
    getData() {
        return this.data;
    }
    getDataById(id: string) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                console.log(this.data[i]);
                return this.data[i];
            }
        }
        return null;
    }
    // A channel so component1 and component2 can exchange data
    pushedData = new EventEmitter<string>();
    pushData(value: string) {
        this.pushedData.emit(value);
    }
}

class Person {
    constructor(public enumerable: Boolean, public configurable: Boolean){

    }
    private _firstName:String;
    get FirstName(){
        return this._firstName;
    }
    set FirstName(value: String){
        this._firstName = value.toUpperCase();
    }
}

var person = new Person(true, true);
person.FirstName= "Thanh";
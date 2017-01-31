// Exercise 1: Type
let bankAccount = {
    money: Number(2000),
    deposit(value: number){
        this.money += value;
    }
}
let myself = {
    name : String("Asaad"),
    bankAccount :  bankAccount,
    hobbies: new Array("Violin", "Cooking")
}
myself.bankAccount.deposit(3000);
console.log(myself);
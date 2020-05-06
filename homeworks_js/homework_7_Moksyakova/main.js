let person={}
    person.firstName='Ivan'
    person.lastName='Ivanov'
    person.showData=function() {
        console.log(`${this.firstName} ${this.lastName}`)
    }

person.showData()

let newPerson=person
newPerson.firstName='Petro'
newPerson.lastName='Petrov'

newPerson.showData()


//-----------2-------------------


let MyMath={}

MyMath.a=5;
MyMath.b=2;

MyMath.sum=function(){
    let suma=this.a+this.b
    console.log(`${this.a}+${this.b}=${suma}`)
}
MyMath.multiplication = function(){
    let mult = this.a * this.b;
    console.log(`${this.a}*${this.b}= ${mult}`); 
}
MyMath.division = function(){
    let div = this.a / this.b;
    console.log(`${this.a}/${this.b} = ${div}`); 
}
MyMath.subtraction = function(){
    let sub = this.a - this.b;
    console.log(`${this.a}-${this.b}= ${sub}`); 
}

MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();
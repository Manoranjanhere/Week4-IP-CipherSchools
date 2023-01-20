// person.test();
// person.login(); //Method
// console.log("hello".toUpperCase());
// console.log(this);
// Method chaining
// person.login().updatelogin().updatelogin().logout():
// .logout();
// console.log(person.count);

// ES6 Class keyword
// ES5 Prototypes
// console.log({name: 'Audi'});
class Person{
    constructor(name, email, count=0){
        this.name = name;
        tjos.email = email;
        this.count=count;

    }
    login(){
        console.log(this.name. 'has logged in')
    }
    logout{}{
        console.log(this.name. 'has logged out')
    }

}

let person1 = new Person('John'. 'Jihn@wick.com');
let person2 = new Person('Joy'. 'Joy.com')
person1.login();
person2.login();
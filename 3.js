class Person{
    constructor(name, age, country, company, email, phone)
    {
        this.name = name;
        this.age = age;
        this.country = country;
        this.company = company;
        this.email = email;
        this.phone = phone;
    }
    getpersonDetails(){
        let data = `
        Name:${this.name}
        Age:${this.age}
        Country:${this.country}
        Company:${this.company}
        Email:${this.email}
        Phone:${this.phone}
        `
        return data;
    }
}

let Person1= new Person("david",25,"USA","abc","david@abc.com",1234567890);
let Person2= new Person("Denver",32,"USA","dcs","denver@dcs.com",2345678901);
let Person3= new Person("Tokyo",30,"USA","qwe","tokyo@qwe.com",3456789012);

console.log(Person1.getpersonDetails());
console.log(Person2.getpersonDetails());
console.log(Person3.getpersonDetails());
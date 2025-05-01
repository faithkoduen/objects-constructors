1.
//create an object with properties name,balance
//add method deposit,,,add the amout to balance,log the update balance
//add method withdrawal,,,,,if the balance>=amount,subtract ,else show insuffficient funds


function BankAccount(name,balance){
    this.name= name;
    this.balance = balance;
    this.deposit = function(amount){
        this.balance += amount;
        console.log(`${this.name} deposited ${amount}.The new balance is ${this.name}`);
    };
    this.withdraw = function(amount){
        if(amount <= this.balance){
            this.balance -= amount; 
            console.log(`${this.name} withdrew ${amount}.The new balance is ${this.balance}`);
        }else{
            console.log(`${this.name} has insufficient funds`);
        }
    }

};
const account1 = new BankAccout("John",500,100);
account1.deposit(300);
const account2 = new BankAccount("James",600,500);
account2.deposit(200);



2.
//create an object with a property task(array)
//addTask(task)
//completeTask(task)
//listTask


const taskList = {
    addTask(task){
        this.task.indexOf(task);
        console.log(`Added task ${task}`);
    },
    completeTask(task){
        const index = this.task.indexOf(task);
        if(index != -1){
            this.task.splice(index, 1);
            console.log(`Completed task ${task}`);
        }else{
            console.log(`Task not found ${task}`)
        }

    },
    listTask(){
        console.log("Remainig task");
        this.task.forEach((task,i)=>console.log(`${i+1} ${task}`));

    }
};
taskList.addTask("Read book");
taskList.addTask("Do assignments");
taskList.addTask("Clean the house");
taskList.completeTask("Do assignments");
taskList.listTask();


3.
//create two students
//each with name,scores
//getAvarage() and hasPassed()methods
//print 

const student1 = {
    name:"Peter",
    scores:[50,65,79],
    getAverage(){
        const total = this.scores.reduce((sum,score)=>sum+score,0);
        return total/this.scores.length;
    },
    hasPassed(){
        return this.getAverage()>=50;
    }
};
const student2 = {
    name:"James",
    scores:[45,50,40],
    getAverage:student1.getAverage,
    hasPassed:student1.hasPassed
};
console.log(`${student1.name}Avarage ${student1.getAverage()},passed ${student1.hasPassed()}`);
console.log(`${student2.name}Avarage ${student2.getAverage()}, Passed ${student2.hasPassed()}`);



4.
//create a shoppingcart with an empty array
//add method, additem(item)
//push the item to the array
//add method, to addTotal
//sum the prices of all items using reduce
//add items
//print total cost

const shoppingCart = {
    items:[],
    addItem(item){
        this.items.push(item);
        console.log(`Added ${item.name} for ${item.price}`);

    },
    getTotal(){
        return this.items.reduce((sum,item)=>sum + item.price,0);
    }
};
shoppingCart.addItem({name:"Book",price:50});
shoppingCart.addItem({name:"pen",price:10});

console.log(shoppingCart.getTotal());


5.
//create am movie object with tittle,year and rating
//add method is classic(),,return true if year <2000
//add method is recommended,,if rate is >8 return recommend
//repeat for three movies
//call and print results for both methods for each movie
const movie1 = {
    tittle:"Century",
    year:1998,
    rating:7,
    isClassic(){
        return this.year<2000;

    },
    recommend(){
        return this.rating>6?
        recommend:movie1.recommend
    },
    

};
const movie2 ={
    tittle:"Inception",
    year:2015,
    rating:8,
    isClassic:movie2.isClassic,
    recommend:movie2.recommend
};
const movie3 ={
    tittle:"other movie",
    year:2008,
    rating:6,
    isClassic:movie3.isClassic,
    recommend:movie3.recommend
};
console.log(`${movie1.tittle} ${movie1.isClassic}, ${movie1.recommend}`);
console.log(`${movie2.tittle} $${movie2.isClassic}, ${movie2.recommend}`);
console.log(`${movie3.tittle} ${movie3.isClassic}, ${movie3.recommend}`);
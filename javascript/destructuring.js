var person={name:"isra khab",fName:"Nasir ullah khan"};

const {name,fName}=person; // using object and passing variables directly as objects

const printName= (name)=>{
    console.log(name);
}; // using object but it's specific variables directly passing into methods
//destructing

const hobbies=["sports","cooking"];
const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2)
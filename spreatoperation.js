

const name={"name":"isra khan",
    "fatherName":"nasir ullah khan",
    func:()=>{}
};
// if i don't add ... spreat operation it will make the nested object {{}} object inside object but i want to copy object

const newObject={...name};



array1=[10,20,30]

array2=[...array1];
//if i dont add copy of array use this for copying array otheriwse it will be nested array


//rest operator

const toArray=(...args)=>{
    return args;
}
console.log(toArray(2,3,4,5));
//Otherwise, I would need to define the number of arguments in advance. But if I need to add more arguments later, it could become an issue. With this approach, I can pass as many arguments as I want without any problems.

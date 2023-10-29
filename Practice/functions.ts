//Interface

interface sayHiToIsma{
    (name:string):string;
}
const sayHiToIsma:sayHiToIsma=(name:string)=>{
    return `Hello Isma, my name is ${name}`
}

//Type
type sayHiToJavi=(name:string)=>String;
const sayHiToJavi:sayHiToJavi=function(name){
    return `Hello Javi, my name is ${name}`
}
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

//1 TYPE
function getArrayGood<Type>(params: Type[]): Type[] {
  return new Array<Type>().concat(params);
}
let numberArray = getArrayGood([1, 2, 3, 4]);
let stringArray = getArrayGood(["cats", "Dogs"]);

//Push Okey
numberArray.push(1);

//Push BAD - Wrong Type
//numberArray.push('1234')

//Multiple TYPE
function identity<Ttype, Utype>(value: Ttype, message: Utype): Ttype {
  console.log(message);
  return value;
}

type ValidTypes = string | number;
function identitySum<T extends ValidTypes, U>(value: T, message: U) {
  // Return type is inferred
  let result: ValidTypes = "";
  let typeValue: string = typeof value;
  //let result: T = value + value;    // Error
  // Tira error, porque no sabe si tiene que hacer una suma o una concatenacion

  //Usa el tiempo de compilacion para saber el tipo del dato y actuar en base al tipo
  if (typeof value === "number") {
    // Is it a number?
    result = value + value; // OK
  } else if (typeof value === "string") {
    // Is it a string?
    result = value + value; // OK
  }

  console.log(
    `The message is ${message} and the function returns a ${typeValue} value of ${result}`
  );

  return result;
}

let numberValue = identity<number, string>(100, "Hello");
let stringValue = identity<string, string>("100", "Hello");

console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100

const response = identity("Hola", "mensaje");

//Interface to an Object
interface Identity<T, U> {
  value: T;
  message: U;
}

const IdentityExample: Identity<number, string> = {
  value: 5,
  message: "HOLA",
};

const IdentityExample2: Identity<boolean, string> = {
  value: true,
  message: "HOLA",
};

const IdentityExample3: Identity<string, boolean> = {
  value: 'ASD',
  message: true,
};


//Interface of a function
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

const processIdentityImplementation:ProcessIdentity<number,string>=(value,message)=>{
    console.log(message);
    return value
};

class processorIdentityImplementation<X,Y>{
  value: X;
  message: Y;
  constructor(value:X,message:Y){
    this.value=value,
    this.message=message
  }
  process(): X {
    return this.value
  }
}
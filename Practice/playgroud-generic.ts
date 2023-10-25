function getArray(items: any[]): any[] {
    return new Array().concat(items)
}

//1 TYPE
function getArrayGood<Type>(params:Type[]):Type[] {
return  new Array<Type>().concat(params)    
}
let numberArray=getArrayGood([1,2,3,4]);
let stringArray=getArrayGood(['cats','Dogs']);


//Push Okey
numberArray.push(1)

//Push BAD - Wrong Type
//numberArray.push('1234')

//Multiple TYPE
function identity<Ttype, Utype>(value:Ttype, message:Utype):Ttype{
console.log(message);
return value
}
const response=identity('Hola','mensaje')
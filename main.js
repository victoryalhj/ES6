//ES6 문제

//1.다음의 코드를 es6문법을 이용하여 재작성 하시오
let name="noona's fruit store"
let fruits = ["banana","apple","mango"]
let address="Seoul"

let store = {name, fruits, address}
console.log(store)


//2.es6 문법을 이용하여 다음과 같이 출력하시오
//제 가게 이름은 Noona's fruit store 입니다. 위치는 Seoul 에 있습니다.

let name="noona's fruit store"
let fruits = ["banana","apple","mango"]
let address="Seoul"

let store = {name, fruits, address}
console.log(`제 가게 이름은 ${store.name} 입니다. 위치는 ${store.address} 에 있습니다.`)


//3.다음코드를 Destructoring을 이용하여 해결하시오 ★

function calculate(obj){ 
  let {a,b,c} = obj;
  return a+b+c
}
console.log(calculate({a:1,b:2,c:3}))


//4.다음 문제에 정답이 true가 나오게 하시오★
let name = "noona's store"
let fruits = ["Banana","Apple","Mango"]
let address = {
  country:"Korea",
  city:"Seoul"
}

function findStore(obj){
  let {name,address:{city}} = obj
  return name === "noona's store" && city === "Seoul"
}

console.log(findStore({name,fruits,address}))


//5.다음과같이 프린트되게 코드를 바꾸시오
function getNumber() {
  let array = [1,2,3,4,5,6]
  let [first,,third,forth] = array
  
  return {first,third,forth}
}
console.log(getNumber())


//6.다음의 결과가 true가 되게하시오
function getCalender(first, ...rest) {
    return(
        first === "January" &&
        rest[0] === "February" &&
        rest[1] === "March" &&
        rest[2] === undefined
    );
}
console.log(getCalender("January","February","March"));


//7.두 어레이들중 최소값을 찾는 함수를 완성하시오

function getMinimum() {
  let a = [45,23,78]
  let b = [54,11,9]
  return Math.min(...a,...b)
}
console.log(getMinimum())


//8.다음의 함수를 화살표 함수로 바꾸시오
function sumNumber(){
  let sum = (a,b)=> a+b
  return sum(40,10);
}

console.log(sumNumber())

//9.다음함수를 화살표 함수로 바꾸시오
function sumNumber() {
  let addNumber = (a)=>(b)=>(c)=> a+b+c;
  return addNumber(1)(2)(3);
}

console.log(sumNumber());


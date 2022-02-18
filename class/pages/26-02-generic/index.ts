//1. 문자
export function getString(args: string): string {
  return args;
}

const R1 = getString("asd");
console.log(R1);

//2. 숫자
export function getNumber(args: number): number {
  return args;
}

const R2 = getNumber(555);
console.log(R2);

// any type
export function getAny(args: any): any {
  return args;
}

const R3 = getAny("철수");

console.log(R3);

// generic
// generic도 입력값의 타입은 모름, any랑 다른점은 generic type은 들어온 타입을 그대로 사용한다. 즉 문자가 들어오면 string type으로 정의.
export function getGeneric<MyType>(args: MyType): MyType {
  return args;
}
const aaa: string = "asd";
const bbb: number = 9;
const ccc: boolean = true;

const R41 = getGeneric(aaa);
const R42 = getGeneric(bbb);
const R43 = getGeneric(ccc);

console.log(R41);
console.log(R42);
console.log(R43);

//
// any 응용
//prettier-ignore
export function getAnyReverse(arg1: any, arg2: any, arg3: any): [...any] {
  return [arg3, arg2, arg1];
}
const R5 = getAnyReverse("철수", "초등학교", 8);
console.log(R5);
//
// generic 응용
//prettier-ignore
export function getGenericReverse<MyType1,MyType2,MyType3>(arg1: MyType1,arg2: MyType2,arg3: MyType3): [MyType3,MyType2,MyType1] {
  return [arg3,arg2,arg1];
}
const R6 = getGenericReverse("영희", "초등", 9);
console.log(R6);

// generic 응용 2 - 축약버전1
//prettier-ignore
export function getGenericReverseT<T1,T2,T3>(arg1: T1,arg2: T2,arg3: T3): [T3,T2,T1] {
  return [arg3,arg2,arg1];
}
const R7 = getGenericReverse("영희", "초등", 9);
console.log(R7);

// generic 응용 3 - 축약버전2
//prettier-ignore
export function getGenericReverseTUV<T,U,V>(arg1: T,arg2: U,arg3: V): [V,U,T] {
  return [arg3,arg2,arg1];
}
const R8 = getGenericReverse("영희", "초등", 9);
console.log(R8);

//

// 클로저 - 기초
export function firstFn(arg1: string) {
  return function secondFn(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}

const resultFn1 = firstFn("영희")(20);
console.log(resultFn1);

// 클로저 - 기초(any)
export function firstFn2(arg1: any) {
  return function secondFn2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}

const resultFn2 = firstFn2("영희")(20);
console.log(resultFn2);

// 클로저 - 기초(generic)
export function firstFn3<T>(arg1: T) {
  return function secondFn3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const resultFn3 = firstFn3("영희")(20);
console.log(resultFn3);

// 클로저 - 기초(generic) ver. Arrow Function
// prettier-ignore
export const firstFn4=<T>(arg1: T)=> <U>(arg2: U): [T, U]=> {
    return [arg1, arg2];
  };

const resultFn4 = firstFn4("영희")(20);
console.log(resultFn4);

// 클로저 - 기초(generic) ver. HOC
// prettier-ignore
export const firstFn5=<C>(Compotnent: C)=> <P>(props: P): [C, P]=> {
  return [Compotnent, props];
};

const resultFn5 = firstFn5("bbb")({ aaa: "aaa" });
console.log(resultFn5);

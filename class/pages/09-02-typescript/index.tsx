
export default function TypescriptPage() {
    // .tsx 파일에서는 '타입추론' 기능이 생긴다.
    //변수 생성 후 데이터를 대입하면 처음 대입된 데이터의 타입에 따라 해당 변수의 타입이 정해짐
    // let aaa ="안녕"
    // aaa=3
    // aaa='하세요'

    // let bbb:string;
    // bbb='12345'

    // let ccc:number=5
    // ccc=21    

    // let ddd:boolean;
    // ddd= true

    const eee:number[] = [1,2,3,4,5];
    eee.push(9)

    const fff:string[]=['a','b','c','d']
    fff.push('e')

    // const ggg=['a','b','c',1,2,3,4,5]
    // ggg.push['1']
    const hhh:((number|string)[])=[];
    hhh.push(1,2,'3','c')

    const iii: string[] | number[] = [1,2,3]
    iii.push(1)

    //객체 타입 생성
    interface IProfile {
        name: string,
        age: number|string,
        school:string
    }

    const profile:IProfile = {
        name: '철수',
        age: 8,
        school: '다람쥐초'
    }
    profile.age='여덟살'

    return(
        <div> 

        </div>
    )
}
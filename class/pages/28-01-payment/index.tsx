import {useState} from 'react'
import Head from 'next/head'

export default function PaymentPage(){
    

    const [amount, setAmount]= useState(0)

    const onChangeAmount=(e)=>{
        setAmount(Number(e.target.value))
    }


    const onClickPayment=()=>{
        const IMP = window.IMP; // 생략 가능
        IMP.init("imp49910675"); // Example: imp00000000
        // IMP.request_pay(param, callback) 결제창 호출
      IMP.request_pay({ // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "고라니 털",
        amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181"
        //m_redirect_url: ,  << 모바일 웹에서 결제 후 돌아갈 주소
      }, rsp => { // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          // 포인트 충전시 이 곳에서 BE로 정보를 넘겨주는 로직을 작성해야함 ( imp_uid , paid_amount ) 즉, Mutation 실행 (createPointTransactionOfLoading)
          console.log(rsp)
            
          
        } else {
          // 결제 실패 시 로직,
        }
      });
    }

    return(
        <div>
            <Head>
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>    
            <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>
            </Head>

            결제 금액 <input type='text' onChange={onChangeAmount}/>
            <button onClick={onClickPayment}>결제</button>
        </div>
    )
}
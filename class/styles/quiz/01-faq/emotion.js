import styled from '@emotion/styled'


export const Wrapper = styled.div`
    width: 640px;
    background-color: var(--white);

    margin: 100px;
`


// Title part
export const IconLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: flex-end;

    background-color: white;
    margin-bottom: 15px;
`
export const Icon = styled.div`
    width: 30px;
    height: 30px;
    background-color: white;
    /* src='images/lotto.png' */
    background-image: url(/images/search.png);
    

    
    
    

    
`

export const WrapperHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 15px;


`


export const HeaderTitle = styled.div`
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 15px;
    margin-top: 15px;

    font-family: SpoqaHanSans;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: -1.33px;
    color: #1f1f1f;
`

export const HeaderMyPage = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    margin-right: 30px;
    
`
export const Myname = styled.div`
    font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.78;
    letter-spacing: -0.8px;
    color: #1f1f1f;

    
    border: none;

    

`
export const MyImage = styled.div`
    width: 60px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 20px;

    background-image: url(/images/profileImage.png);
    background-color: white;
    border: none;
    border-radius: 20px;
    
`
export const Arrow = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 5px;
    margin-left: 20px;

    background-image: url(/images/arrow.png);
    background-color: white;
    border: none;
    
    
`


export const WrapperMenu = styled.div`
    width: 100%;

    display:flex ;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 30px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid silver;


`


export const Menu = styled.button`
    

    font-family: SpoqaHanSans;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 40px;
    letter-spacing: normal;
    color: #cacaca;

    background-color: white;
    border: none;

`



// WrapperBody part

export const WrapperBody = styled.div`
    width: 100%;

    margin-bottom: 30px;
`

export const QuestionBox = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Question = styled.div`
    width: 100%;

    margin: 15px;
    padding: 10px 15px 10px 15px;
`

export const QuestionLogo = styled.div`
    font-family: SpoqaHanSans;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    color: #adadad;
    width: 100%;
`

export const QuestionText = styled.div`
    width: 100%;
    font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: normal;
    color: greyish-brown;
`

export const QuestionOpen = styled.div`
    width: 40px;
    height: 40px;

    padding-left: 10px;
    margin-right: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: white;
    background-image: url(/images/arrow_right.png);
    border: none;

    border-radius: 20px;
`

// WrapperFooter part
export const WrapperFooter = styled.div`
    width: 100%;
    

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    border-top: 1px solid silver;
    padding: 15px 10px 15px 20px;
    margin-left: 15px;
`

export const HomePart = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: column;

    padding-left: 10px;
    margin-right: 10px;
    

`

export const FooterHome = styled.div`
    width: 60px;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding-left: 10px;
    margin-right: 10px;

    background-color: white;
    background-image: url(/images/home.png);
    border: none;

    border-radius: 20px;
`
export const FooterHome__txt = styled.div`
    width: 55px;
    height: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding-top: 15px;

    border: none;
    background-color: white;
    

    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.13;
    letter-spacing: normal;
    text-align: center;
    color: #adadad;
`

export const EatsRoadPart = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: column;
    
    padding-left: 10px;
    margin-right: 10px;

`
export const FooterEatsRoad = styled.div`
    width: 60px;
    height: 60px;

    padding-left: 10px;
    margin-right: 10px;

    border: none;
    background-color: white;
    background-image: url(/images/location.png);

    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    
    letter-spacing: normal;
    text-align: center;
`
export const FooterEatsRoad__txt = styled.div`
    width: 65px;
    height: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding-top: 15px;

    border: none;
    background-color: white;
    

    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.13;
    letter-spacing: normal;
    text-align: center;
    color: #adadad;
`

export const MinePart = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: column;

    padding-left: 10px;
    margin-right: 10px;
    

`
export const FooterMine = styled.div`
    width: 60px;
    height: 60px;

    padding-left: 10px;
    margin-right: 10px;

    border: none;
    background-color: white;
    background-image: url(/images/like.png);

    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    
    letter-spacing: normal;
    text-align: center;
`
export const FooterMine__txt = styled.div`
    width: 65px;
    height: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding-top: 15px;

    border: none;
    background-color: white;
    

    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.13;
    letter-spacing: normal;
    text-align: center;
    color: #adadad;
`

export const MyPart = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: column;

    padding-left: 10px;
    margin-right: 10px;
    

`
export const FooterMy = styled.div`
    width: 60px;
    height: 60px;

    
    padding-left: 30px;
    margin-right: 10px;

    

    border: none;
    background-color: white;
    background-image: url(/images/my.png);

    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    
    letter-spacing: normal;
    text-align: center;
`

export const FooterMy__txt = styled.div`
    width: 40px;
    height: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: white;
    
    padding-top: 15px;
    

    font-family: SpoqaHanSans;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.13;
    letter-spacing: normal;
    text-align: center;
    color: red;

`
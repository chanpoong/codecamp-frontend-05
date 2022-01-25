

import { 
    //header part
    Wrapper,IconLine,Icon,WrapperHeader,Menu,HeaderTitle,HeaderMyPage,Myname,MyImage,WrapperMenu,QuestionBox,Arrow,
    //WrapperBody part
    WrapperBody,Question,QuestionLogo,QuestionText,QuestionOpen,
    //WrapperFooter part
    WrapperFooter,FooterMy,FooterMine,FooterEatsRoad,FooterHome,
    MyPart,HomePart,MinePart,EatsRoadPart,FooterHome__txt,
    FooterMine__txt,FooterMy__txt,FooterEatsRoad__txt} from '../../../styles/quiz/01-faq/emotion.js';

export default function Faqpage(){


    return(
        <Wrapper>
            <IconLine>
                <Icon ></Icon>
                
            </IconLine>
            <WrapperHeader>
                <HeaderTitle>마이</HeaderTitle>
                <HeaderMyPage>
                    <MyImage></MyImage>
                    <Myname>임정아</Myname>
                    <Arrow />
                </HeaderMyPage>                
            </WrapperHeader>
            <WrapperMenu>
                <Menu>공지사항</Menu>
                <Menu>이벤트</Menu>
                <Menu>FAQ</Menu>
                <Menu>QnA</Menu>
            </WrapperMenu>
            <WrapperBody>
                <QuestionBox>
                    <Question>
                        <QuestionLogo>Q. 01</QuestionLogo>
                        <QuestionText>리뷰 작성은 어떻게 하나요?</QuestionText>
                    </Question>
                    <QuestionOpen/>
                </QuestionBox>
                <QuestionBox>
                    <Question>
                        <QuestionLogo>Q. 02</QuestionLogo>
                        <QuestionText>리뷰 수정/삭제는 어떻게 하나요?</QuestionText>
                    </Question>
                    <QuestionOpen/>
                </QuestionBox>
                <QuestionBox>
                    <Question>
                        <QuestionLogo>Q. 03</QuestionLogo>
                        <QuestionText>아이디/비밀번호를 잊어버렸어요.</QuestionText>
                    </Question>
                    <QuestionOpen/>
                </QuestionBox>
                <QuestionBox>
                    <Question>
                        <QuestionLogo>Q. 04</QuestionLogo>
                        <QuestionText>회원탈퇴를 하고싶어요.</QuestionText>
                    </Question>
                    <QuestionOpen/>
                </QuestionBox>
                <QuestionBox>
                    <Question>
                        <QuestionLogo>Q. 05</QuestionLogo>
                        <QuestionText>출발지 설정은 어떻게 하나요?</QuestionText>
                    </Question>
                    <QuestionOpen/>
                </QuestionBox>
                <QuestionBox>
                    <Question>
                        <QuestionLogo>Q. 06</QuestionLogo>
                        <QuestionText>비밀번호를 변경하고 싶어요.</QuestionText>
                    </Question>
                    <QuestionOpen/>
                </QuestionBox>
            </WrapperBody>

            <WrapperFooter>
                <HomePart>
                    <FooterHome/>
                    <FooterHome__txt>홈</FooterHome__txt>
                </HomePart>
                <EatsRoadPart>
                    <FooterEatsRoad/>
                    <FooterEatsRoad__txt>잇츠로드</FooterEatsRoad__txt>
                </EatsRoadPart>
                <MinePart>
                    <FooterMine/>
                    <FooterMine__txt>마이찜</FooterMine__txt>
                </MinePart>
                <MyPart>
                    <FooterMy/>
                    <FooterMy__txt>마이</FooterMy__txt>
                </MyPart>
            </WrapperFooter>

            
        </Wrapper>


    )

}
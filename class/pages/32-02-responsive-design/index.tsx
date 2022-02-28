import styled from "@emotion/styled"

const Wrapper=styled.div`
    width: 1000px;
    height: 1000px;
    background-color: yellow;

    @media (min-width: 768px) and (max-width: 991px) {
        width: 800px;
        height: 800px;
        background-color: #00ffff;
    }

    @media(max-width: 767px) {
        width: 600px;
        height: 600px;
        background-color: royalblue;
    }
    

`

export default function ResponsiveDesignPage(){

    return (
        <>
            <Wrapper>상자</Wrapper>
        </>
    )
}
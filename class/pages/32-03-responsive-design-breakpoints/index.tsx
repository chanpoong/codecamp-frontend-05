import styled from "@emotion/styled"
import { breakPoints } from "../../src/commons/styles/media"


const Wrapper=styled.div`
    width: 1000px;
    height: 1000px;
    background-color: yellow;

    @media ${breakPoints.tablet} {
        width: 800px;
        height: 800px;
        background-color: #00ffff;
    }

    @media ${breakPoints.mobile} {
        width: 6.25rem;
        height: 600px;
        background-color: #ff0000;
    }
    

`

export default function ResponsiveDesignPage(){

    return (
        <>
            <Wrapper>상자</Wrapper>
        </>
    )
}
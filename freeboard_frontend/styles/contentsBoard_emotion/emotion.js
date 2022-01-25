import styled from '@emotion/styled'

export const Wrapper=styled.div`
    
    width: 1200px;
    height: 100%;
    top: 317px;
    left: 360px;
    bottom: 350px;

    padding: 50px;
    margin-top: 100px;
    margin-left: 100px;
    
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);    

`

//WrapperHeader Part
export const WrapperHeader=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-bottom: 1px solid black;
    padding-bottom: 20px;

`
export const HeaderTitle=styled.div`
    width: 100%;
    
    font-weight: bold;
    font-size: 30px;
`

export const HeaderSearch=styled.div`
    width: 100%;
`

export const SearchBar=styled.input`
    width: 100%;
`
export const SearchBtn=styled.button`

`


//WrapperBody Part
export const WrapperBody= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`
export const ContentsLine=styled.div`
    width: 100%;
    height: 80px;

    border-bottom: 1px solid gray;
    padding: 15px 20px 15px 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const ContentsLineTitle=styled.div`
    width: 500px;
    margin: 15px 20px 15px 15px ;
    background-color: silver;
`
export const ContentsLineWriter=styled.div`
    width: 100px;
    margin: 15px 20px 15px 15px ;
    background-color: skyblue;
` 
export const ContentsLineLike=styled.div`
    width: 100px;
    margin: 15px 20px 15px 15px ;
    background-color: steelblue;
`
export const ContentsLineTime=styled.div`
    width: 100px;
    margin: 15px 20px 15px 15px ;
    background-color: violet;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


//WapperFooter Part
export const WrapperFooter=styled.div`
    width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    

    
    
`

export const ContentsBtnLine=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    padding-right: 20px;
`

export const MakeContentsBtn=styled.button`
    width: 150px;
    height: 50px;
    background-color: grey;

    font-size: medium;
    color: white;
    font-weight: bold;
    cursor: pointer;
    
`



export const ContentsPagesLine=styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 20px;
`

export const ContentsPages=styled.div`
    width: 500px;
    height: 80px;
    padding: 20px;


    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`


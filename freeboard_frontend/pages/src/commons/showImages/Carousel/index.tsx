import styled from "@emotion/styled";
import { Carousel } from "antd";

const ContentStyle = styled.img`
  width: 100%;
  height: 100%;

  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled(Carousel)`
  width: 70%;
  height: 70%;
`;
const ImageWrapper = styled.div``;

export default function ShowImagesInCarouselPage(props) {
  return (
    <Wrapper>
      {props.data?.fetchUseditem.images.map((el, index) =>
        el ? (
          <ImageWrapper>
            <ContentStyle
              key={index}
              src={`${props.src}${props.data?.fetchUseditem.images?.[index]}`}
            />
          </ImageWrapper>
        ) : (
          ""
        )
      )}
    </Wrapper>
  );
}

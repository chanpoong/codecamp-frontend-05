import { Card } from "antd";

export default function ProductListHoverPage(props) {
  const { Meta } = Card;

  function test(images) {
    console.log(images);
    if (images.length !== 0) {
      return (
        <img src={`https://storage.googleapis.com/${props.el.images[0]}`} />
      );
    } else {
      return <img src="/img/commonImg/nolza.jpeg" />;
    }
  }

  const aaa = test(props.el.images);

  return (
    <div>
      <Card hoverable style={{ width: 240 }} cover={aaa}>
        <Meta title={props.el.name} />
        <div style={{ overflow: "hidden" }}>{props.el.contents}</div>
      </Card>
    </div>
  );
}

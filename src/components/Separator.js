import { Col } from "react-bootstrap";

const Separator = ({
  index = 0,
  array = [],
  span = 12,
  offset = 0,
  ...props
}) => {
  return (
    index !== array.length - 1 && (
      <Col xs={{ span: span, offset: offset }} {...props}>
        <hr className={"my-4"} />
      </Col>
    )
  );
};

export default Separator;

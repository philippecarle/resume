import { Badge } from "react-bootstrap";

const Interest = ({ interest: { name, keywords } }) => (
  <>
    <h4>{name}</h4>
    {keywords.map((keyword) => (
      <Badge
        bg={"dark"}
        text={"light"}
        pill={true}
        className={"m-1"}
        key={keyword}
      >
        {keyword}
      </Badge>
    ))}
  </>
);

export default Interest;

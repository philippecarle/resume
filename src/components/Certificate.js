import Moment from "moment";

const Certificate = ({ certificate: { name, date, issuer, url } }) => (
  <div className={"mb-3"}>
    <h4 className={"pb-2"}>
      {name}
      <br />
      <small>{Moment(date).format("MMM YYYY")}</small>
    </h4>
    <p>
      {issuer}
      {url && (
        <>
          {" "}
          - <a href={url}>Download</a>
        </>
      )}
    </p>
  </div>
);

export default Certificate;

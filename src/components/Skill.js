const Skill = ({ skill: { name, level, keywords } }) => (
  <div className={"mb-3"}>
    <h4 className={"pb-2"}>
      {name}
      <br />
      <small>{level}</small>
    </h4>
    <ul className={"list-condensed list-unstyled keywords"}>
      {keywords.map((keyword) => (
        <li key={keyword}>{keyword}</li>
      ))}
    </ul>
  </div>
);

export default Skill;

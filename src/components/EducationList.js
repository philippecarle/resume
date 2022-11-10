import Education from "./Education";
import Separator from "./Separator";

const EducationList = ({ list }) => (
  <div id={"education"}>
    <h2 className={"section-title pb-3"}>Education</h2>
    {list.map((education, index, array) => (
      <div key={education.studyType} className={"py-2"}>
        <Education education={education} />
        <Separator index={index} array={array} span={6} offset={6} />
      </div>
    ))}
  </div>
);

export default EducationList;

import Experience from "./Experience";
import Separator from "./Separator";

const ExperienceList = ({list}) => (
    <div id={'experience'}>
        <h2 className={'section-title pb-3'}>Experience</h2>
            {list.map((experience, index, array) =>
                <div key={experience.company}>
                    <Experience experience={experience}/>
                    <Separator index={index} array={array}/>
                </div>
            )}
    </div>
);

export default ExperienceList;

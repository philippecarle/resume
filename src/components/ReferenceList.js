import Reference from "./Reference";

const ReferenceList = ({list}) => (
    <div id={'references'}>
        <h2 className={'section-title pb-3'}>References</h2>
        {list.map((reference) =>
            <div key={reference.name} className={'py-2'}>
                <Reference reference={reference}/>
            </div>
        )}
    </div>
);

export default ReferenceList;
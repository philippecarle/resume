import Separator from "./Separator";
import Certificate from "./Certificate";

const CertificateList = ({list}) => (
    <div id={'certificates'}>
        <h2 className={'section-title pb-3'}>Certifications</h2>
        {list.map((certificate, index, array) =>
            <div key={certificate.name}>
                <Certificate certificate={certificate}/>
                <Separator index={index} array={array} offset={6}/>
            </div>
        )}
    </div>
);

export default CertificateList;
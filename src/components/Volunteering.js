import Experience from './Experience';
import Separator from './Separator';
import { Row } from 'react-bootstrap';

const Volunteering = ({ volunteering }) => (
	<div id={'volunteer'}>
		<h2 className={'section-title pb-3'}>Volunteering</h2>
		<Row>
			{volunteering.map((volunteer, index, array) => (
				<div key={volunteer.organization}>
					<Experience
						experience={{ company: volunteer.organization, ...volunteer }}
					/>
					<Separator index={index} array={array} />
				</div>
			))}
		</Row>
	</div>
);

export default Volunteering;

import { Col, Row } from 'react-bootstrap';
import Interest from './Interest';
import Separator from './Separator';

const InterestList = ({ list }) => (
	<div id={'interests'}>
		<h2 className={'section-title pb-3'}>Interests</h2>
		<Row>
			{list.map((interest, index, array) => (
				<Col md={12 / Math.ceil(array.length)} key={interest.name}>
					<Interest interest={interest} />
				</Col>
			))}
		</Row>
		<Separator />
	</div>
);

export default InterestList;

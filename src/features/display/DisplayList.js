import {Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard';
import { SelectFeaturedCampsite } from '../campsites/campsitesSlice';
import { SelectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [SelectFeaturedCampsite(), SelectFeaturedPromotion(), selectFeaturedPartner()];

    return (
        <Row>
            {items.map((item, idx) => {
                return(
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })};
        </Row>
    );
};

export default DisplayList;
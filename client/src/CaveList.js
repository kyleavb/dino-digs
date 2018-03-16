import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

const CaveList = props => (
    <div className="row">
    {props.caves.map((cave, index) =>
      <div className="col s12 m6 l4" key={index}>
        <Card style={{ width: '100%', margin: '0 0 20px 0' }}>
        <CardHeader
          title={cave.type}
          subtitle= 'Available to Rent!' 
          avatar="../dino.png"
        />
        <CardMedia className='cave-pic'
          overlay={<CardTitle title={cave.title} subtitle={cave.location} />}
        >
          <img src={cave.image_path} alt=''/>
        </CardMedia>
        <CardTitle title={cave.title} subtitle={cave.location} />
        <CardText style={{ overflow: 'scroll', height: '100px'}}>
          {cave.overview}
          <ul>
            <li>Beds: {cave.number_of_beds}</li>
            <li>Baths: {cave.number_of_baths}</li>
            <li>Guests: {cave.number_of_guests}</li>
          </ul>
          <p>Cave Amenities: {cave.amenities}</p>
          <p>Cave Rules: {cave.cave_rules}</p>
        </CardText>
        <CardActions>
          <DatePicker><span><FlatButton label="Book here" /></span></DatePicker>
          <span><FlatButton label="Contact host" /></span>
        </CardActions>
      </Card>
    </div>
  )}
</div>

)

export default CaveList;

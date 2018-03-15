import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CaveList = props => (
  <div className="inline">
    {props.caves.map((cave, index) =>
      <Card key={index} style={{ width: '60%', margin: '10px' }}>
      <CardHeader
        title="URL Avatar"
        subtitle="Subtitle"
        avatar="../img/standing-dino.png"
      />
      <CardMedia
        overlay={<CardTitle title={cave.title} subtitle={cave.location} />}
      >
        <img src={cave.image_path}  alt="picture of property" />
      </CardMedia>
      <CardTitle title={cave.title} subtitle={cave.location} />
      <CardText>
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
        <FlatButton label="Book this location" />
        <FlatButton label="Contact the host" />
      </CardActions>
    </Card>
  )}
</div>
)

export default CaveList;

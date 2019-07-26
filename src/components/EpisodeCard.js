import React from 'react'
import { Card } from 'semantic-ui-react'

 export default function EpisodeCard (props) {
  // image={image}
  return (
    <Card>
      <Card.Content>
      <Card.Header>{props.episode.name}</Card.Header>
      <Card.Meta><span>{props.episode.episode}</span></Card.Meta>
      <Card.Description>
        Characters: {props.episode.characters.length}
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
        Type: {props.episode.air_date}
      </Card.Content>
    </Card>
  )
}

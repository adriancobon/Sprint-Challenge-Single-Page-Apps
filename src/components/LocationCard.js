import React from 'react'
import { Card } from 'semantic-ui-react'

export default function LocationCard (props) {
  // image={image}
  return (
    <Card>
      <Card.Content>
      <Card.Header>{props.location.name}</Card.Header>
      <Card.Meta><span>{props.location.dimension}</span></Card.Meta>
      <Card.Description>
        Residents: {props.location.residents.length}
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
        Type: {props.location.type}
      </Card.Content>
    </Card>
  )
}

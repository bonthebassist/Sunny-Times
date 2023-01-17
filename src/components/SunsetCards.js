import axios from 'axios'
import React, { useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap'

function SunsetCards() {

//States
const [SunsetData, setSunsetData] = useState('')

const loadData = () => {
    axios.get(`http://localhost:4000/all/today`)
    .then((resp)=>{
    console.log(resp)
    setSunsetData(resp.data)
    })
}

  return (
    <div>
        <button onClick={loadData}>Sunny times for Today</button>
        <Card>
        </Card>
        <CardGroup>
        {SunsetData ? SunsetData.map((city)=> {
            return (
                    <Card>
                        <Card.Body>
                            <Card.Title>{city.cityName}</Card.Title>
                            <Card.Text>Sunrise - {city.sunriseTime}</Card.Text>
                            <Card.Text>Sunset - {city.sunsetTime}</Card.Text>
                        </Card.Body>
                    </Card>
            )
            })
        :null}
        </CardGroup>
    </div>
  )
}

export default SunsetCards
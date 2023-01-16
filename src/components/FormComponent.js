import React, { Component } from 'react'
import axios from 'axios'

class FormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "city": '',
            "lat": '',
            "lng": '',
            "msg": '',
            "resp": '',
            "clickSumbit": false
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    fetchCityData(cityName) {

        axios.get(`http://localhost:4000/find/${cityName}/week`)
            .then(response => {
                console.log(response.data)
                this.setState({ "resp": response })
            })
    }
    submitHandler = e => {
        e.preventDefault()
        this.setState({"clickSumbit": true})

        axios.post('http://localhost:4000/addACity', this.state)
            .then(response => {
                // console.log(response.data.msg)
                let msg = response.data.msg
                this.setState({ "msg": msg })
                this.fetchCityData(this.state.city)
            }).catch(error => {
                console.log(error)
                alert(error)
            })

    }
    render() {
        const { city, lat, lng, msg, clickSumbit } = this.state
        return (
            <div>
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label for="city">City</label>
                        <input type="text" name="city" value={city} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label for="lat">Latitude</label>
                        <input type="text" name="lat" value={lat} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label for="lng">Longitude</label>
                        <input type="text" name="lng" value={lng} onChange={this.changeHandler} />
                    </div>
                    <button type="submit" onClick={this.submitHandler}>Submit</button>

                </form>
            </div>
            {clickSumbit ? msg: null}
            </div>
        )
    }
}

export default FormComponent


  
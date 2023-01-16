import React from "react";
import axios from 'axios';

class MessageDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "city": '',
            "lat": '',
            "lng": '',
            "msg": '',
            "resp": '',
        }
    }
    componentDidMount(){
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
        return (
          <div>
            <h2>{this.state.msg ? this.state.msg : null}</h2>
            </div>
        )
      }
}

export default MessageDisplay
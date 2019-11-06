import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            code: '',
            name: '',
            address: '',
            latitude: '',
            longitude: '',
            entry: this.props.data
        }
    }

    addCode = (event) => {
        this.setState({
            code: event.target.value
        })
    }

    addName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    addAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    addLatitude = (event) => {
        this.setState({
            latitude: event.target.value
        })
    }
    
    addLongitude = (event) => {
        this.setState({
            longitude: event.target.value
        })
    }


    addElement = () => {
        this.state.entry.push({
            "id" : this.props.newestId,
            "code" : this.state.code,
            "name" : this.state.name,
            "coordinates" : {
                "latitude" : this.state.latitude,
                "longitude" : this.state.longitude
            },
            "address" : this.state.address
        })

        this.updateValues();


    }

    updateValues() {
        this.props.dataUpdate(this.state.entry);
        this.props.incrementNewId(this.props.new_id);
    }

	render() {
		return (
                <div>
                <br></br>
                <div>
                    <h4>Add Building</h4><span></span>
                </div>
                <br></br>
                <br></br>
                <form>
                    <input class="form-control" placeholder="Building Code" ref="code" value = {this.state.code} onChange={this.addCode} />
                    <input class="form-control" placeholder="Building Name" ref="name" value = {this.state.name} onChange={this.addName} />
                    <input class="form-control" placeholder="Address" ref="addr" value = {this.state.address} onChange={this.addAddress} />
                    <input class="form-control" placeholder="Longitude" ref="long" value = {this.state.longitude} onChange={this.addLongitude} />
                    <input class="form-control" placeholder="Latitude" ref="lat" value = {this.state.latitude} onChange={this.addLatitude} />
                </form>
                <br></br>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.addElement}>
                    Add
                </button>
            </div>
		);
    }
}
export default AddBuilding;
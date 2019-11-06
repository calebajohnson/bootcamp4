import React from 'react';

class RemoveBuilding extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            entry: this.props.data
        }

    }

    deleteEntry = (event) => {
       
        const i = String(this.props.selectedBuilding - 1)

        delete this.state.entry[i]
       
        this.props.dataUpdate(this.state.entry)

        this.props.selectedUpdate(0)
    }

	render() {
        if(this.props.selectedBuilding > 0 ){
           
            return (
                <td>
                <div>
                    <button type="button" class="btn btn-danger btn-md" 
                        onClick={this.deleteEntry}>
                            Delete
                    </button>
                </div>
                </td>
                );
        }
        else{
            return(
                <div></div>
            );
        }
	}
}
export default RemoveBuilding;
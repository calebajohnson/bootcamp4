import React from 'react';

class RemoveBuilding extends React.Component {
    constructor(props){
        super(props)

        const val = this.state = {
            entry: this.props.data
        };

    }

    _deleteEntry = () => {
        const i = String(this.props.selectedBuilding - 1);
        delete this.state.entry[i];
        this.props.dataUpdate(this.state.entry);
        this.props.selectedUpdate(0);
    };
    get deleteEntry() {
        return this._deleteEntry;
    }
    set deleteEntry(value) {
        this._deleteEntry = value;
    }

	render() {
        if(this.props.selectedBuilding > 0 ){
           
            return this.display();
        }
        else{
            return(
                <div></div>
            );
        }
	}

    display() {
        return (<td>
            <div>
                <button type="button" class="btn btn-danger btn-md" onClick={this.deleteEntry}>
                    Delete
                </button>
            </div>
        </td>);
    }
}
export default RemoveBuilding;
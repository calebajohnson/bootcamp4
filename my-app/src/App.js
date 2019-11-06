import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'
import Credit from './components/Credit';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data,
      new_id: this.props.data.length + 1
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
  }

  dataUpdate(vals) {
    this.setState({
      data: vals
    })
  }

  incrementNewId(id){
    this.setState({
      new_id: id + 1
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row1">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-dark table-hover">
                  <tbody>
                  <tr>
                    <td classname="title" colSpan="3">
                      <b>Code Building</b>
                    </td>
                  </tr>
                  </tbody>
                  <BuildingList
                    data={this.state.data}
                    filterText = {this.state.filterText}
                    selectedBuilding = {this.state.selectedBuilding}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.state.data}
                selectedBuilding = {this.state.selectedBuilding}
              />
              <div className="column2">
                <RemoveBuilding
                  data={this.state.data}
                  selectedBuilding = {this.state.selectedBuilding}
                  selectedUpdate = {this.selectedUpdate.bind(this)}
                  dataUpdate={this.dataUpdate.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="column2">
                <AddBuilding
                  data={this.state.data}
                  dataUpdate={this.dataUpdate.bind(this)}
                  new_id={this.state.new_id}
                  incrementNewId={this.incrementNewId.bind(this)}
                />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
import React from 'react';

class BuildingList extends React.Component {
	render() {
		const { data } = this.props;

		const buildingList = data

		.filter(directory => {
			return (directory.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0) 
				|| (directory.code.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === 0)
		})
		.map(directory => {
			return (
				<tr 
					key={directory.id} data={directory.id} 
					onClick={this.props.selectedUpdate.bind(this, directory.id)}>
						<td >{directory.code} </td>
						<td> {directory.name} </td>
				</tr>
			);
		});

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuildingList
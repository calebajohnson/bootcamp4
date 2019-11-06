import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props

		if(this.props.selectedBuilding < 1){
			return(
				<div>
					<p>
						<i>
							{' '}
							Click on a name to view more information<br />
						</i>
					</p>
				</div>
			);
		}

		else {
			if((data[selectedBuilding-1].coordinates == null)) 
			{
				data[selectedBuilding-1].coordinates = 0
			}
			if (data[selectedBuilding-1].address == null)
			{
				data[selectedBuilding-1].address = ''
			}

			return (
				<div class="card text-white bg-dark">
				<div class="card-header">
					<b></b>{data[selectedBuilding-1].code}
				</div>
				<div class="card-body">
					<h5 class="card-title"><b>{data[selectedBuilding-1].name}</b></h5>
					<p class="card-text">
					<i>
					<b>Address</b><br />
					</i>
					{data[selectedBuilding-1].address}<br />
					<p></p>
					<i><b>Coordinates</b></i><br />

						<blockquote>Latitude: {data[selectedBuilding-1].coordinates.latitude}</blockquote><br />
						<blockquote>Longitude: {data[selectedBuilding-1].coordinates.longitude}</blockquote><br />
				</p>
				</div>
			</div>
			)
		}
	}
	}
export default ViewBuilding;
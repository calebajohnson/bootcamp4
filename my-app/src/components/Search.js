import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		const val = this.myValue.value
		this.props.filterUpdate(val)
	}
	render() {
		return (
			<form className="searchbar">
				<input
					type="text" 
					placeholder="Type to Filter" 
					ref = {(query) => {this.myValue = query}}	
					onChange = {this.filterUpdate.bind(this)}
				/>
			</form>
		);
	}
}
export default Search;

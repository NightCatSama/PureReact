import React, { Component, PropTypes } from 'react'

export default class Home extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<small>
				{ this.props.name }
			</small>
		)
	}
}

Home.defaultProps = {
    name: 'By NightCat'
}

Home.propTypes = {
	name: PropTypes.string.isRequired
}
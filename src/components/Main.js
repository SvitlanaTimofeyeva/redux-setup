import React, {Component} from 'react' 
import { connect } from 'react-redux'
import * as actions from '../actions'   
import './css/Main.css'

class Main extends Component { 
componentDidMount() {
	this.props.dispatch(actions.test()); 
}
	render() {
		return (<div>{this.props.test}</div>)
	}
}

const mapMain = (state) => ({
	test: state.test.message
})

export default connect(mapMain)(Main)

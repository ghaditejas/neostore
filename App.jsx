import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			data : 1,
			array : [
				{
						component : 'first',
						value : 1
				},
				{
						component : 'second',
						value : 2
				},
				{
						component : 'third',
						value : 3
				},
			]
		}
		this.setStateHandler = this.setStateHandler.bind(this);
		this.setDomElement = this.setDomElement.bind(this);
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
	}

	setStateHandler(){
		var mydata=this.state.data+1;
		this.setState({data:mydata})
	}

	setDomElement(){
		// var element = document.getElementById('setdata');
		ReactDOM.findDOMNode(this.refs.setdata).style.color='red';
	}

	forceUpdateHandler(){
		this.forceUpdate();
	}

   render() {
   	return(
   			<div>
   		{/*	<h1> Hello {this.props.name} , </h1>
            <h3>Array: {this.props.propArray}</h3>			
            <h3>Bool: {this.props.asdsa ? "True..." : "False..."}</h3>
            <h3>Func: {this.props.propFunc(3)}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>*/}
            <button onClick = {this.setStateHandler}>Set state</button>
            <button onClick = {this.setDomElement}>Change colour</button>
            <button onClick = {this.forceUpdateHandler}>Update</button>
            <h1>state: <b ref="setdata">{this.state.data}</b></h1>
            <h2>Random Number:<b>{Math.random()}</b></h2>
            {this.state.array.map((componentdata,i)=><Header key={i} description={componentdata}/>)}
   			</div>
   		)

   }
}

/*App.propTypes = {
	name: PropTypes.string,
   propArray: PropTypes.array.isRequired,
   asdsa: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
}

App.defaultProps = {
   name: 'Tejas',
    propArray: [1, 2, 3, 4, 5],
   asdsa: true,
   propFunc: function(e) {
      return e
   },
   propNumber: 1,
   propString: "String value..."
}*/
class Header extends React.Component{
	render(){
		return (
				<div>
					<h1>{this.props.description.component}</h1>
					<h2>{this.props.description.value}</h2>
				</div>
			);
	}
}
class Footer extends React.Component{
	render(){
		return (
				<div>
					<h3>{this.props.description}</h3>
				</div>
			);
	}
}

Footer.defaultProps={
	name : "Tejas",
	description : "Says HEllo!"
}
export default App;
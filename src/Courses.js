import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../actions/courseActions'; 
class Courses extends Component {
	constructor(props){
		super(props);
		this.state={
			course : {title :""}
		}
		 this.save = this.save.bind(this);
		 this.change= this.change.bind(this);
	}
	change(event){
		const course = this.state.course;
		course.title = event.target.value;
		this.setState({course: course});
	}
	save(){
		this.props.dispatch(courseActions.createCourse(this.state.course));
	}
	
	courseRow(course,index){
		return <div key={index}> {course.title} </div>
	}

   render() {
      return (
            <div>
            <input type = 'text' onChange={this.change} value={this.state.course.title}></input>
            <input type="submit" onClick={this.save}></input>
            <h1> Course List </h1>
            {this.props.courses.map(this.courseRow)}
            </div>
      );
   }
}
function mapStateToProps(state,ownProps){
	return{
	courses : state.courseReducer
	};
}
export default connect(mapStateToProps)(Courses);
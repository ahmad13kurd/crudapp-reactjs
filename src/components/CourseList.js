import React, { Component, Fragment } from 'react';
import "../App.css";
class CourseList extends Component {

    state ={
        isEdit : false,
        courseName: ''
    }

    // render Course
    renderCourse = ()=>{
        return (
            <li className="elements">
                <span>{this.props.details.name}</span>
                <button onClick={()=>{this.toggleState()}} className="btn">Edit Course</button>
                <button className="btn" onClick={()=> {this.props.deleteCourse(this.props.index)}}>Delete</button>
            </li>      
        )
    }


    // toggleState
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }


    // updateCourseItem
    updateCourseItem = (e)=> {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value );
        this.toggleState();
    }

    // render Update Form
    renderUpdateForm = ()=>{
        return (
          <form onSubmit={this.updateCourseItem} className="btn">
            <input ref={(v) => {this.input = v}} type="text" defaultValue={this.props.details.name} />
            <button >Update Course</button>
          </form>
        );
  }

 

    
    render() { 

        let {isEdit} = this.state;

        return(
           <Fragment>
               { isEdit ? this.renderUpdateForm() : this.renderCourse()}
           </Fragment>
        )
    }
}
 
export default CourseList;
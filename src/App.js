import React, {Component} from 'react';
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

import "./App.css";




class App extends Component {
  state ={
    courses: [
      { name: "html"   },
      { name: "CSS" },
      { name: "JS" }
    ],
    current : ""
  }

  // Update Course
  updateCourse =(e)=>{
    this.setState({
      current: e.target.value
    });
  }


  // Add Course
  addCourse = (e)=>{
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name: current})
    this.setState({
      courses,
      current: ""
    });
  }



  // delete Course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }


  //editCourse
  editCourse = (index,value)=> {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState ({
      courses
    })
  }


  
  
  render() {

    
    let {courses} = this.state;
    let length = courses.length;

    const courseList = length ? (
      courses.map((course, index) => {
        return (
          <CourseList
            details={course}
            deleteCourse={this.deleteCourse}
            courses={this.state.courses}
            key={index}
            index={index}
            editCourse={this.editCourse}
          />
        );
      })
    ) : (
      <p> Ther is no Course to show</p>
    )
    

    return (
      <div className="App">
      <h1>Add Course</h1>
      <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
        
        <ul>{courseList}</ul>
      </div>
    );
  }
}
 
export default App;
import React, { Component } from 'react'; 
import CourseForm from './Components/CourseForm'
import CourseList from './Components/CourseList' 


class App extends Component {
  state = {
    courses: [
      {name : "HTML"},
      {name : "CSS"},
      {name : "Jquery"},
    ] , 
    current : ''
  }

  // UpdateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }
  // AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name: current})
    this.setState({
      courses,
      current: ''
    })
  }
  // DeleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses
    courses.splice(index, 1)
    this.setState({
      courses
    })
  }

  //EditCourse        -- bensba lel value temchy ken ki yebda fama ref={} hawka fel CourseList
  editCourse = (index,value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    }) 
  } 



  render() {
    const courses = this.state.courses;
    const courseList = courses.map( (course , index) => {
      return <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    })

    return ( 
      <section className="App">
  
          <h2>Add Courses - Not Responsive</h2>
          <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>

          <ul>{courseList}</ul> 

  
      </section>
    );
  } 
}

export default App;

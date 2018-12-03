import React, { Component } from 'react';
import './App.css';
import students from './components/resources/studentNames';
import TopBanner from './components/TopBanner'
import InfoCard from './components/InfoCard'
import NextBar from './components/NextBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: students,
      currStudent: 0,
      change: null,
      newName: null,
      newFrom: null,
      newFunFact: null,
      newCityOrCountry: null,
      newIndoorsOrOutdoors: null,
      newTravel: null,
      newFood: null,
      newDogOrCat: null
    }
    this.increaseCurrStudent = this.increaseCurrStudent.bind(this);
    this.decreaseCurrStudent = this.decreaseCurrStudent.bind(this);
    this.removeStudent = this.removeStudent.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.editStudent = this.editStudent.bind(this);
    this.changeStudent = this.changeStudent.bind(this);
  }
  increaseCurrStudent() {
    if(this.state.currStudent === this.state.students.length-1) {
      this.setState({currStudent: 0});
    } else 
      this.setState({currStudent: this.state.currStudent + 1});
  }
  decreaseCurrStudent() {
    if(this.state.currStudent === 0) {
      this.setState({currStudent: this.state.students.length-1});
    } else {
      this.setState({currStudent: this.state.currStudent - 1});
    }
  }
  removeStudent() {
    let oneArr = [{name: null, from: null, funFact: null, cityOrCountry: null, indoorsOrOutdoors: null, travel: null, food: null, dogOrCat: null, key: 'Zk7gfx7X4wbSlhnmReW4o9qYI7kdKNwGoL3imDnBHJ8CVupT851lnWxgSOzh'}];
    if(this.state.students.length === 1) {
      this.setState({students: oneArr});
      console.log(students);
      return;
    }
    var arr = [];
    for(let i = 0; i < this.state.students.length; i++) {
      if(i != this.state.currStudent) {
        arr.push(this.state.students[i]);
      }
    }
    if(this.state.currStudent === this.state.students.length -1 ) {
      this.setState({currStudent: this.state.currStudent-1});
    }
    this.setState({students: arr});
  }
  addStudent() {
    let name = prompt("What is the student's name?");
    let from = prompt("Where is the student from?");
    let funFact = prompt("What's a fun fact about this student?");
    let cityOrCountry = prompt("Would this student rather live in the city or the country?");
    let indoorsOrOutdoors = prompt("Would this student always be indoors or outdoors?");
    let travel = prompt("Would this student like to always travel or always be at home?");
    let food = prompt("Would this student like Top's or Subway better?");
    let dogOrCat = prompt("Does this student like dogs or cats better?");
    let obj = {name, from, funFact, cityOrCountry, indoorsOrOutdoors, travel, food, dogOrCat};
    if(this.state.students.length === 1 && this.state.students.key === 'Zk7gfx7X4wbSlhnmReW4o9qYI7kdKNwGoL3imDnBHJ8CVupT851lnWxgSOzh') {
      this.setState({students: [obj]});
    } else 
      this.setState({students: [...this.state.students, obj], currStudent: this.state.students.length});
  }
  changeStudent() {
    let obj = this.state.students[this.state.currStudent];
    if(this.state.newName !== null) {
      obj.name = this.state.newName;
    }
    if(this.state.newFrom !== null) {
      obj.from = this.state.newFrom;
    }
    if(this.state.newFunFact !== null) {
      obj.funFact = this.state.newFunFact;
    }
    if(this.state.newCityOrCountry !== null) {
      obj.cityOrCountry = this.state.newFunFact;
    }
    if(this.state.newIndoorsOrOutdoors !== null) {
      obj.indoorsOrOutdoors =this.state.newIndoorsOrOutdoors;
    }
    if(this.state.newTravel !== null) {
      obj.travel = this.state.newTravel;
    }
    if(this.state.newFood !== null) {
      obj.food = this.state.newFood;
    } 
    if(this.state.newDogOrCat !== null) {
      obj.dogOrCat = this.state.newDogOrCat;
    }
    let arr = [...this.state.students];
    arr.splice(this.state.currStudent,1,obj);
    this.setState({students: arr, change: null});
    this.setState({})
  }
  editStudent() {
    console.log('working');
    this.setState({change: 
    <div className='edit-container'>
      <input className='edit' placeholder={this.state.students[this.state.currStudent].name} onChange={(e) => this.setState({newName: e.target.value})}></input>
      <input className='edit' placeholder={this.state.students[this.state.currStudent].from} onChange={(e) => this.setState({newFrom: e.target.value})}></input>
      <input className='edit' placeholder={this.state.students[this.state.currStudent].funFact} onChange={(e) => this.setState({newFunFact: e.target.value})}></input>
      <input className='edit' placeholder={this.state.students[this.state.currStudent].cityOrCountry} onChange={(e) => this.setState({newCityOrCountry: e.target.value})}></input>
      <input className='edit' placeholder={this.state.students[this.state.currStudent].indoorsOrOutdoors} onChange={(e) => this.setState({newIndoorsOrOutdoors: e.target.value})}></input>
      <input className='edit' placeholder={this.state.students[this.state.currStudent].travel} onChange={(e) => this.setState({newTravel: e.target.value})}></input>
      <input className='edit' placeholder={this.state.students[this.state.currStudent].food} onChange={(e) => this.setState({newFood: e.target.value})}></input>
      <input className='edit' placeholder={this.state.students[this.state.currStudent].dogOrCat} onChange={(e) => this.setState({newDogOrCat: e.target.value})}></input>
      <button className='commit-changes' onClick={this.changeStudent}>Submit</button>
    </div>})
  }
  render() {
    return (
      <>
        <TopBanner />
        <div className='body'>
          <InfoCard current={this.state.students[this.state.currStudent]} index={this.state.currStudent} total={this.state.students.length}/>
        </div>
        <div className='bar-container'>
          <NextBar edit={this.editStudent} increaseStudent={this.increaseCurrStudent} decreaseStudent={this.decreaseCurrStudent} remove={this.removeStudent} add={this.addStudent}/>
        </div>
        {this.state.change}
      </>
    );
  }
}

export default App;

import React from 'react';
import EditStudents from '../Students/EditStudents';
import moment from 'moment';

class StudentsData extends React.Component {
  state = {
    students: [],
    query: ''
  };

  componentDidMount() {
    this.fetchStudents();
  }

  onUpdatedDataBase = () => {
    this.fetchStudents();
  };

  async fetchStudents() {
    try {
      const url = 'http://localhost:80/students';
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const studentsData = data.students.map(student => ({
        id: student.id,
        first_name: student.first_name,
        last_name: student.last_name,
        guardian_first_name: student.guardian_first_name,
        guardian_last_name: student.guardian_last_name,
        student_DOB: moment(student.student_DOB).format('MM-DD-YYYY'),
        phone: student.phone,
        email: student.email,
        address: student.address,
        city: student.city,
        state: student.state,
        zip: student.zip,
        alt_first_name: student.alt_first_name,
        alt_last_name: student.alt_last_name,
        alt_phone: student.alt_phone,
        photo_permission: student.photo_permission
      }));
      // console.log(studentsData);
      this.setState({ students: studentsData });
    } catch (err) {
      console.log(err);
    }
  }

  onSortNameAsc = () => {
    let newStudents = [...this.state.students];
    newStudents.sort(function(a, b) {
      let nameA = a.last_name.toLowerCase();
      let nameB = b.last_name.toLowerCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    // console.log(newStudents);
    this.setState({ students: newStudents });
  };

  onSortNameDesc = () => {
    let newStudents = [...this.state.students];
    newStudents.sort(function(a, b) {
      let nameA = a.last_name.toLowerCase();
      let nameB = b.last_name.toLowerCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    // console.log(newStudents);
    this.setState({ students: newStudents });
  };

  onSortCreatedAsc = () => {
    let newStudents = [...this.state.students];
    newStudents.sort(function(a, b) {
      let numA = a.id;
      let numB = b.id;
      if (numA > numB) {
        return 1;
      }
      if (numA < numB) {
        return -1;
      }
      return 0;
    });
    // console.log(newStudents);
    this.setState({ students: newStudents });
  };

  onSortCreatedDesc = () => {
    let newStudents = [...this.state.students];
    newStudents.sort(function(a, b) {
      let numA = a.id;
      let numB = b.id;
      if (numA < numB) {
        return 1;
      }
      if (numA > numB) {
        return -1;
      }
      return 0;
    });
    // console.log(newStudents);
    this.setState({ students: newStudents });
  };

  searchFieldText = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { students, query } = this.state;

    // let newStudents = students.filter(student => {
    //   return student.indexOf(query) !== -1;
    // });

    return (
      <div>
        <EditStudents
          students={students}
          onUpdatedDataBase={this.onUpdatedDataBase}
          onSortNameAsc={this.onSortNameAsc}
          onSortNameDesc={this.onSortNameDesc}
          onSortCreatedAsc={this.onSortCreatedAsc}
          onSortCreatedDesc={this.onSortCreatedDesc}
          searchFieldText={this.searchFieldText}
          query={query}
        />
      </div>
    );
  }
}

export default StudentsData;

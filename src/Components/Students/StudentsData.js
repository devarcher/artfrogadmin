import React from 'react';
import EditStudents from '../Students/EditStudents';

class StudentsData extends React.Component {
  state = {
    students: []
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
        last_name: student.last_name
      }));
      // console.log(studentsData);
      this.setState({ students: studentsData });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { students } = this.state;
    // console.log('in render: ', students);
    return (
      <div>
        <EditStudents
          students={students}
          onUpdatedDataBase={this.onUpdatedDataBase}
        />
      </div>
    );
  }
}

export default StudentsData;

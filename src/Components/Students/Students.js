import React from 'react';

class Students extends React.Component {
  state = {
    students: null
  };

  componentDidMount() {
    this.fetchStudents();
  }

  async fetchStudents() {
    try {
      const url = 'http://localhost:80/adminEditStudent';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const studentData = data.students.map(student => ({
        id: student.id,
        fist_name: student.first_name,
        last_name: student.last_name,
        bio: student.bio
      }));
      console.log(studentData);
      this.setState({ student: studentData });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <div>Students</div>
      </div>
    );
  }
}

export default Students;

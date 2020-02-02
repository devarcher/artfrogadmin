import React from 'react';

class Teachers extends React.Component {
  state = {
    teachers: null
  };

  componentDidMount() {
    this.fetchTeachers();
  }

  async fetchTeachers() {
    try {
      const url = 'http://localhost:80/adminEditTeacher';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const teacherData = data.teachers.map(teacher => ({
        id: teacher.id,
        fist_name: teacher.first_name,
        last_name: teacher.last_name,
        bio: teacher.bio
      }));
      console.log(teacherData);
      this.setState({ teacher: teacherData });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <div>Teachers</div>
      </div>
    );
  }
}

export default Teachers;

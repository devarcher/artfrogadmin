import React from 'react';
import TeacherCard from './TeacherCard';

class Teachers extends React.Component {
  state = {
    teachers: []
  };

  componentDidMount() {
    this.fetchTeachers();
  }

  async fetchTeachers() {
    try {
      const url = 'http://localhost:80/adminEditTeacher';
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const teacherData = data.teachers.map(teacher => ({
        id: teacher.id,
        first_name: teacher.first_name,
        last_name: teacher.last_name,
        bio: teacher.bio
      }));
      console.log(teacherData);
      this.setState({ teachers: teacherData });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { teachers } = this.state;
    console.log('in render: ', teachers);
    return (
      <div>
        <ul>
          {teachers.map(teacher => (
            <li key={teacher.id}>{teacher.first_name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Teachers;

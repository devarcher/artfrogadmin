import React from 'react';
import EditTeachers from './EditTeachers';

class TeachersData extends React.Component {
  state = {
    teachers: [],
  };

  componentDidMount() {
    this.fetchTeachers();
  }

  onUpdatedDataBase = () => {
    this.fetchTeachers();
  };

  async fetchTeachers() {
    try {
      const url = 'http://localhost:80/teachers/getAllTeachersCMS';
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const teacherData = data.teachers.map(teacher => ({
        id: teacher.id,
        first_name: teacher.first_name,
        last_name: teacher.last_name,
        bio: teacher.bio
      }));
      // console.log(teacherData);
      this.setState({ teachers: teacherData });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { teachers } = this.state;
    // console.log('in render: ', teachers);
    return (
      <div>
        <EditTeachers
          teachers={teachers}
          changeEditMode={this.changeEditMode}
          saveEditedText={this.saveEditedText}
          inputHandler={this.inputHandler}
          onUpdatedDataBase={this.onUpdatedDataBase}
        />
      </div>
    );
  }
}

export default TeachersData;

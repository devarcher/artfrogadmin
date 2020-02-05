import React from 'react';
import EditTeachers from './EditTeachers';

class TeachersData extends React.Component {
  state = {
    teachers: [],
    isInEditMode: false
  };

  componentDidMount() {
    this.fetchTeachers();
  }

  changeEditMode = () => {
    this.setState({ isInEditMode: !this.state.isInEditMode });
  };

  saveEditedText = () => {
    // only allow it to be saved if the text isn't an empty string
    if (this.refs.editText.value.length > 0) {
      this.setState({
        isInEditMode: false
      });
      this.props.updateText(this.refs.editText.value, this.props.index);
    }
  };

  onKeyUp = event => {
    if (event.keyCode === 13)
      // 'RETURN' key
      return this.saveEditedText();
    if (event.keyCode === 27)
      // 'ESC' key
      this.changeEditMode();
  };

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
      // console.log(teacherData);
      this.setState({ teachers: teacherData });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { teachers, changeEditMode, isInEditMode } = this.state;
    // console.log('in render: ', teachers);
    return (
      <div>
        <EditTeachers
          teachers={teachers}
          changeEditMode={this.changeEditMode}
          isInEditMode={isInEditMode}
          saveEditedText={this.saveEditedText}
          onKeyUp={this.onKeyUp}
        />
      </div>
    );
  }
}

export default TeachersData;

import React from 'react';
import EditTeachers from './EditTeachers';

class TeachersData extends React.Component {
  state = {
    teachers: [],
    query: ''
  };

  componentDidMount() {
    this.fetchTeachers();
  }

  onUpdatedDataBase = () => {
    this.fetchTeachers();
  };

  async fetchTeachers() {
    try {
      const url = 'http://localhost:80/teachersCMS';
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

  onSortNameAsc = () => {
    let newTeachers = [...this.state.teachers];
    newTeachers.sort(function(a, b) {
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
    this.setState({ teachers: newTeachers });
  };

  onSortNameDesc = () => {
    let newTeachers = [...this.state.teachers];
    newTeachers.sort(function(a, b) {
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
    this.setState({ teachers: newTeachers });
  };

  onSortCreatedAsc = () => {
    let newTeachers = [...this.state.teachers];
    newTeachers.sort(function(a, b) {
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
    this.setState({ teachers: newTeachers });
  };

  onSortCreatedDesc = () => {
    let newTeachers = [...this.state.teachers];
    newTeachers.sort(function(a, b) {
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
    this.setState({ teachers: newTeachers });
  };

  searchFieldText = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { teachers, query } = this.state;
    // console.log('in render: ', teachers);
    return (
      <div>
        <EditTeachers
          teachers={teachers}
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

export default TeachersData;

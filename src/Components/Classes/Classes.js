import React from 'react';

class Classes extends React.Component {
  state = {
    section: null
  };

  componentDidMount() {
    this.fetchClasses();
  }

  async fetchClasses() {
    try {
      const url = 'http://localhost:80/adminEditClass';
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const sectionData = data.classes.map(section => ({
        id: section.class_id,
        name: section.class_name,
        description: section.description,
        date: section.date,
        startTime: section.start_time,
        endTime: section.end_time
      }));
      this.setState({ section: sectionData });
      // console.log(sectionData);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state.section);
    return (
      <div>
        <div>Classes</div>
      </div>
    );
  }
}

export default Classes;

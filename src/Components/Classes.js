import React from 'react';

class Classes extends React.Component {
  state = {
    sections: []
  };

  componentDidMount() {
    this.fetchClasses();
  }

  async fetchClasses() {
    const url = 'http://localhost/adminClasses';
    const response = await fetch(url);
    const data = await response.json();
    const sectionData = data.map(section => ({
      id: section.class_id,
      name: section.class_name,
      date: section.date,
      startTime: section.start_time,
      endTime: section.end_time
    }));
    console.log(sectionData);
  }

  render() {
    return (
      <div>
        <div>Classes</div>
      </div>
    );
  }
}

export default Classes;

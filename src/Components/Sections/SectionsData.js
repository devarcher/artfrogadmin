import React from 'react';
import EditSections from '../Sections/EditSections';
import moment from 'moment';

class SectionsData extends React.Component {
  state = {
    sections: [],
    query: ''
  };

  componentDidMount() {
    this.fetchSections();
  }

  onUpdatedDataBase = () => {
    this.fetchSections();
  };

  async fetchSections() {
    try {
      // const query = xyz
      const url = 'http://localhost:80/classesCMS';
      const response = await fetch(url);
      // console.log('fetchSections response', response);
      const data = await response.json();
      // console.log('fetch data', data);
      const sectionsData = data.classes.map(section => ({
        id: section.class_id,
        section_name: section.class_name,
        description: section.description,
        date: moment(section.date).format('MM-DD-YYYY'),
        start_time: section.start_time,
        end_time: section.end_time
      }));
      // console.log('local data', SectionsData);
      this.setState({ sections: sectionsData });
    } catch (err) {
      console.log(err);
    }
  }

  onSortNameAsc = () => {
    let newSections = [...this.state.sections];
    newSections.sort(function(a, b) {
      let nameA = a.section_name.toLowerCase();
      let nameB = b.section_name.toLowerCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    // console.log(newSections);
    this.setState({ sections: newSections });
  };

  onSortNameDesc = () => {
    let newSections = [...this.state.sections];
    newSections.sort(function(a, b) {
      let nameA = a.date.toLowerCase();
      let nameB = b.date.toLowerCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    // console.log(newSections);
    this.setState({ sections: newSections });
  };

  onSortCreatedAsc = () => {
    let newSections = [...this.state.sections];
    newSections.sort(function(a, b) {
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
    this.setState({ sections: newSections });
  };

  onSortCreatedDesc = () => {
    let newSections = [...this.state.sections];
    newSections.sort(function(a, b) {
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
    // console.log(newSections);
    this.setState({ sections: newSections });
  };

  searchFieldText = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { sections, query } = this.state;

    // let filteredSections = sections.filter(section => {
    //   return section.last_name.indexOf(this.state.query) !== -1;
    // });

    return (
      <div>
        <EditSections
          sections={sections}
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

export default SectionsData;

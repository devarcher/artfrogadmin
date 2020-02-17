import React from 'react';
import EditBoard from './EditBoard';
import axios from 'axios';

class BoardData extends React.Component {
  state = {
    board: [],
    query: ''
  };

  componentDidMount() {
    this.fetchBoard();
  }

  onUpdatedDataBase = () => {
    this.fetchBoard();
  };

  async fetchBoard() {
    try {
      const url = 'http://localhost:80/aboutCMS';
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      const boardData = data.board.map(member => ({
        id: member.id,
        first_name: member.first_name,
        last_name: member.last_name,
        bio: member.bio
      }));
      // console.log('board fetch: ', boardData);
      this.setState({ board: boardData });
    } catch (err) {
      console.log(err);
    }
  }

  onSortNameAsc = () => {
    let newBoard = [...this.state.board];
    newBoard.sort(function(a, b) {
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
    this.setState({ board: newBoard });
  };

  onSortNameDesc = () => {
    let newBoard = [...this.state.board];
    newBoard.sort(function(a, b) {
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
    this.setState({ board: newBoard });
  };

  onSortCreatedAsc = () => {
    let newBoard = [...this.state.board];
    newBoard.sort(function(a, b) {
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
    this.setState({ board: newBoard });
  };

  onSortCreatedDesc = () => {
    let newBoard = [...this.state.board];
    newBoard.sort(function(a, b) {
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
    this.setState({ board: newBoard });
  };

  searchFieldText = e => {
    this.setState({ query: e.target.value });
  };

  onSearchSubmit = e => {
    this.setState({ board: [] });
    const search_query = this.state.query;
    axios.get(`http://localhost:80/aboutQuery?q=${search_query}`).then(res => {
      // console.log(res);
      const boardData = res.data.board.map(member => ({
        id: member.id,
        first_name: member.first_name,
        last_name: member.last_name,
        bio: member.bio
      }));
      // console.log('board fetch: ', boardData);
      this.setState({ board: boardData });
    });
  };

  render() {
    const { board, query } = this.state;
    // console.log('in render: ', board);
    return (
      <div>
        <EditBoard
          board={board}
          onUpdatedDataBase={this.onUpdatedDataBase}
          onSortNameAsc={this.onSortNameAsc}
          onSortNameDesc={this.onSortNameDesc}
          onSortCreatedAsc={this.onSortCreatedAsc}
          onSortCreatedDesc={this.onSortCreatedDesc}
          searchFieldText={this.searchFieldText}
          onSearchSubmit={this.onSearchSubmit}
          query={query}
        />
        />
      </div>
    );
  }
}

export default BoardData;

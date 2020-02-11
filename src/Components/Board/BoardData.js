import React from 'react';
import EditBoard from './EditBoard';

class BoardData extends React.Component {
  state = {
    board: []
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
      console.log(data);
      const boardData = data.board.map(member => ({
        id: member.id,
        first_name: member.first_name,
        last_name: member.last_name,
        bio: member.bio
      }));
      console.log('board fetch: ', boardData);
      this.setState({ board: boardData });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { board } = this.state;
    // console.log('in render: ', board);
    return (
      <div>
        <EditBoard board={board} onUpdatedDataBase={this.onUpdatedDataBase} />
      </div>
    );
  }
}

export default BoardData;

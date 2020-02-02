import React from 'react';

class Board extends React.Component {
  state = {
    board: null
  };

  componentDidMount() {
    this.fetchBoard();
  }

  async fetchBoard() {
    try {
      const url = 'http://localhost:80/adminEditBoard';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const boardData = data.board.map(board => ({
        id: board.id,
        fist_name: board.first_name,
        last_name: board.last_name,
        bio: board.bio
      }));
      console.log(boardData);
      this.setState({ board: boardData });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <div>Board</div>
      </div>
    );
  }
}

export default Board;

import React, {Component} from 'react';

class Movie extends Component {
  render() {
    let addButton = '';
    let removeButton = '';
    if (this.props.addable === "true") {
      addButton = <button
        onClick={(event) => this.props.add(event, this.props.title)}> Add Me
      </button>;
    }
    else if (this.props.removeable === "true") {
      removeButton = <button
        onClick={(event) => this.props.remove(event, this.props.title)}> Remove Me
      </button>;
    }
    return (
      <div className="Movie">
        <img src={'https://image.tmdb.org/t/p/w154' + this.props.poster_path} />
        <div>{this.props.title}</div>
        <br />
        {addButton}
        {removeButton}
      </div>
    );
  }
}

export default Movie;

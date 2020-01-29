import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searches: 0,
      number: null,
      result: null
    };
  }

  dataset = `89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5`.split(
    ' '
  );

  linearSearch = (data, value) => {
    this.setState({ searches: 0 });
    for (
      let i = 0;
      i < data.length;
      i++
    ) {
      this.setState({
        searches: i
      });
      if (value === data[i]) {
        return 'found it';
      }
    }
    return "didn't find it";
  };

  binarySearch = () => {};

  render() {
    return (
      <div className="App">
        <p className="searches">
          # of searches:{' '}
          {this.state.searches}
        </p>
        <form>
          <input
            type="text"
            name="number"
            onChange={e => {
              this.setState({
                ...this.state,
                number: e.target.value
              });
            }}
          ></input>
          <button
            onClick={e => {
              e.preventDefault();
              console.log(this.state);
              this.linearSearch(
                this.dataset,
                this.state.number
              );

              // this.setState({
              //   ...this.state,
              //   result: this.linearSearch(
              //     this.dataset,
              //     Number(
              //       this.state.number
              //     )
              //   )
              // });
            }}
          >
            {' '}
            perform linear search
          </button>
        </form>
      </div>
    );
  }
}

export default App;

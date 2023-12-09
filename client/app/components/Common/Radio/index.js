/**
 *
 * Checkbox
 *
 */

import React from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if(event.target.value === 'Шинэ нь эхэндээ'){
      this.setState({
        size: 'Newest First'
      });
      this.props.handleChangeSubmit(event.target.name,'Newest First');
    } else if(event.target.value ==='Үнэ буурахаар') {
      this.setState({
        size: 'Price High to Low'
      });
      this.props.handleChangeSubmit(event.target.name, 'Price High to Low');
    } else if(event.target.event === 'Үнэ Өсөхөөр') {
      this.setState({
        size: 'Price High to Low'
      });
      this.props.handleChangeSubmit(event.target.name, 'Price High to Low');
    }

  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Шинэ нь эхэндээ"
                checked={this.state.size === "Newest First"}
                onChange={this.handleChange}
              />
              Шинэ нь эхэндээ
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Үнэ буурахаар"
                checked={this.state.size === "Price High to Low"}
                onChange={this.handleChange}
              />
              Үнэ буурахаар
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Үнэ Өсөхөөр"
                checked={this.state.size === "Price Low to High"}
                onChange={this.handleChange}
              />
              Үнэ Өсөхөөр
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radio;

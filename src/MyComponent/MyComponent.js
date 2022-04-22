import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
    static defaultProps = {
        name : 'basic'
    };

    static propTypes = {
        name : PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        안녕하새요, 제 이름은 {name} 입니다.
        <br />
        children value is {children}.<br />
        my favoriteNumber is {favoriteNumber}
      </div>
    );
  }
}
export default MyComponent;

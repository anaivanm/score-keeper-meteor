import React from 'react';

class TitleBar extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h6>{this.props.subtitle}</h6>
        </div>
      )
    }
}

TitleBar.propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired

}

export default TitleBar;
import React from 'react';

class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h6>{this.props.subtitle}</h6>
    }
  }

    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      )
    }
}

TitleBar.propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string
}

export default TitleBar;
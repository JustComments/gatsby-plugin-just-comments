const React = require('react');

class JustComments extends React.Component {
  constructor(...args) {
    super(...args);
    this.ref = React.createRef();
  }

  render() {
    return React.createElement('div', {
      className: 'just-comments',
      ref: this.ref,
      ...this.getProps(),
    });
  }

  getProps() {
    const keys = Object.keys(this.props);
    const props = keys.reduce((props, key) => {
      props[`data-${key.toLowerCase()}`] = this.props[key];
      return props;
    }, {});
    return props;
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.src = 'https://just-comments.com/w.js';
    this.ref.current.appendChild(s);
  }
}

module.exports = JustComments;

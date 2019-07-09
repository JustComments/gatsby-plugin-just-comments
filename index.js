const React = require('react');

const WIDGET_URL = 'https://just-comments.com/w2.js';

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

  shouldComponentUpdate(nextProps, nextState) {
    const keys = Object.keys(nextProps);

    return keys.some((k) => nextProps[k] !== this.props[k]);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.src = WIDGET_URL;
    // s.setAttribute('data-timestamp', +new Date());
    this.ref.current.appendChild(s);
  }

  componentDidUpdate() {
    const s = document.createElement('script');
    s.src = WIDGET_URL;
    // s.setAttribute('data-timestamp', +new Date());
    this.ref.current.innerHTML = '';
    delete this.ref.current.dataset.rendered;
    window.location.hash = '';
    const style = document.getElementById('jcStyle');
    if (style) style.parentNode.removeChild(style);
    this.ref.current.appendChild(s);
  }
}

module.exports = JustComments;

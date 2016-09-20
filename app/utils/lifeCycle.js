console.group('[DEBUGGER] LifeCycle');

export default {
  getInitialState: function() {
    console.log('-> getInitialState', arguments);
    return null;
  },

  getDefaultProps: function() {
    console.log('-> getDefaultProps', arguments);
  },

  componentWillMount: function() {
    console.log('-> componentWillMount', arguments);
  },

  componentDidMount: function() {
    console.log('-> componentDidMount', arguments);
  },

  componentWillReceiveProps: function() {
    console.log('-> componentWillReceiveProps', arguments);
  },

  componentWillUnmount: function() {
    console.log('-> componentWillUnmount', arguments);
  },

  shouldComponentUpdate: function() {
    console.log('-> shouldComponentUpdate', arguments);
    return true;
  },

  componentWillUpdate: function() {
    console.log('-> componentWillUpdate', arguments);
  },

  componentDidUpdate: function() {
    console.log('-> componentDidUpdate', arguments);
  }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Persone extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-persone-page">
        <h1>Counter</h1>
        <p>This is simple counter demo to show how Redux sync actions work.</p>
        <button className="btn-minus-one" onClick={this.props.actions.personMinusOne} disabled={this.props.home.count === 0}>
          -
        </button>
        <span>{this.props.home.count}</span>
        <button className="btn-plus-one" onClick={this.props.actions.personPlusOne}>+</button>
        <button className="btn-reset" onClick={this.props.actions.personReset}>
          Reset
        </button>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persone);

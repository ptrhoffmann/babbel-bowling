import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ControlBar from '../components/ControlBar';
import * as GameActions from '../redux/actions/game';

@connect(
    null,
    dispatch => ({
        addUser: bindActionCreators(GameActions.addUser, dispatch),
        addScore: bindActionCreators(GameActions.addScore, dispatch)
    })
)
class ControlBarContainer extends Component {
    static propTypes = {
        addUser: PropTypes.func.isRequired,
        addScore: PropTypes.func.isRequired
    };

    render() {
        return (
            <ControlBar
                addUser={this.props.addUser}
                addScore={this.props.addScore}
            />
        );
    }
}

export default ControlBarContainer;
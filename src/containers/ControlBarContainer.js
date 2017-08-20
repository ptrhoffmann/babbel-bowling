import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ControlBar from '../components/ControlBar';
import * as GameActions from '../redux/actions/game';

@connect(
    state => ({
        activeFrame: state.getIn(['game', 'players'])
            .get(state.getIn(['game', 'activePlayer']))
            .get(state.getIn(['game', 'activeFrame']))
    }),
    dispatch => ({
        addUser: bindActionCreators(GameActions.addUser, dispatch),
        addScore: bindActionCreators(GameActions.addScore, dispatch)
    })
)
class ControlBarContainer extends Component {
    static propTypes = {
        activeFrame: PropTypes.object,
        addUser: PropTypes.func.isRequired,
        addScore: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            maxPins: 10
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.activeFrame.get('activeRoll') > 0) {
            this.setState({
                maxPins: 10 - nextProps.activeFrame.get('result');
            });
        }
    }

    render() {
        return (
            <ControlBar
                addUser={this.props.addUser}
                addScore={this.props.addScore}
                maxPins={this.state.maxPins}
            />
        );
    }
}

export default ControlBarContainer;
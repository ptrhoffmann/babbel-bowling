import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './player-frames.scss';

class PlayerFrames extends PureComponent {
    static propTypes = {
        isActive: PropTypes.bool.isRequired,
        activeFrame: PropTypes.number.isRequired,
        playerFrames: PropTypes.array.isRequired
    };

    render() {
        return (
            <div className={`player-frames player-frames${this.props.isActive ? '--active' : ''}`}>
                {
                    this.props.playerFrames.map((frame, index) => {
                        return <div key={index}>Frame {frame}</div>
                    })
                }
            </div>
        )
    }
}

export default PlayerFrames;
import React, {PureComponent} from 'react';
import ControlBarContainer from '../../containers/ControlBarContainer';
import DevTools from '../../containers/DevTools';
import './app.scss';

class App extends PureComponent {

    render() {
        return (
            <div className="app">
                <ControlBarContainer />
                {__DEV__ && <DevTools/>}
            </div>
        );
    }
}

export default App;
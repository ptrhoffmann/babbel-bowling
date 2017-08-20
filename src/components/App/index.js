import React, {PureComponent} from 'react';
import DevTools from '../../containers/DevTools';
import './app.scss';

class App extends PureComponent {

    render() {
        return (
            <div className="app">
                Application
                {__DEV__ && <DevTools/>}
            </div>
        );
    }
}

export default App;
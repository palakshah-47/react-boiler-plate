// @packages
import React from 'react';
import _ from 'lodash';
import { BrowserRouter } from 'react-router-dom';

// @Components
import Routes from './config/routes/routes';

// @scripts
import colors from './styles/extra-colors';
import overrides from './styles/extra-overrides';

// @styles
import { ThemeProvider } from '@material-ui/styles';
import { theme } from 'gcui';
import CommonControls from './components/organisms/common-controls';

theme.palette = _.merge(theme.palette, colors);
theme.overrides = _.merge(theme.overrides, overrides.overrides);

const App = () => (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
        <CommonControls />
      </BrowserRouter>
    </ThemeProvider>
);

export default App;

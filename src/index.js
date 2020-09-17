import React from 'react';
import {render} from 'react-dom';

import AuthenticationPage from './layouts/AuthenticationPage';

import './assets/scss/style.scss';

render(
  <AuthenticationPage />,
  document.getElementById('root')
)
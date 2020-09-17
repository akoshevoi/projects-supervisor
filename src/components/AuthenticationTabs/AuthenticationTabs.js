import React, {useState} from 'react';
import SignUpContainer from '../../containers/SignUpContainer';
import SignInContainer from '../../containers/SignInContainer';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useStyles} from './styles';
import './authentication-tabs.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className='authentication-tabs__content' p={3}>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='authentication-tabs'>
      <div className='container'>
        <div className={classes.root}>
          <AppBar className={classes.appBar} position='static'>
            <Tabs 
              value={value} 
              onChange={handleChange}   
              variant='fullWidth'
              aria-label='full width tabs example'
              classes={{
                indicator: classes.indicator
              }}
            >
            <Tab label='Sign In' {...a11yProps(0)} />
            <Tab label='Sign Up' {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <SignInContainer />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUpContainer />
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

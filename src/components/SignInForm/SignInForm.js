import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {useStyles} from './styles';

import './form.scss';

const SignInForm = () => {
  const classes = useStyles();
  return (
    <form className='form'>
        <TextField
          className={classes.root}
          error={false}
          id='outlined-error-helper-text'
          label='Email'
          helperText=' '
          variant='outlined'
          
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              //focused: classes.cssFocused,
            }
          }}
          
          
          InputLabelProps={{
            className: classes.floatingLabelFocusStyle,
          }}
          
        />
      <FormControl className={classes.margin} variant='outlined'>
        <InputLabel className={classes.label} htmlFor='outlined-adornment-password'>Password</InputLabel>
        <OutlinedInput
          className={classes.root}
          id='outlined-adornment-password'
          //type={values.showPassword ? 'text' : 'password'}
          //value={values.password}
          //onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                //onClick={handleClickShowPassword}
                //onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </form>
  );
};

export default SignInForm;
import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '&.Mui-focused fieldset': {
      borderColor: '#232f34 !important',
    },
  },
  margin: {
    margin: '15px 0',
  },
  label: {
    color: '#232f34 !important'
  },

  notchedOutline: {
    borderColor: "#232f34 !important"
  },

  floatingLabelFocusStyle: {
    color: "#232f34 !important"
  },
}));

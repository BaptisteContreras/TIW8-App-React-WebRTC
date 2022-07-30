import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import globalConnector from '../../redux/connector/globalConnector';
import UsernameModal from '../Modal/UsernameModal';

function Header({
  username,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }));

  const classes = useStyles();
  const [state, setState] = useState({
    openModalUsername: false,
  });

  const handleChangeUsername = () => {
    setState({
      openModalUsername: true,
    });
  };

  const handleCloseUsernameModal = () => {
    setState({
      openModalUsername: false,
    });
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" noWrap>
            { username() || '' }
          </Typography>
          <Typography variant="h6" className={classes.title} />
          <UsernameModal open={state.openModalUsername} handleClose={handleCloseUsernameModal} />
          <Button
            onClick={handleChangeUsername}
            variant="contained"
            color="secondary"
            endIcon={<EditIcon fontSize="small" />}
          >
            Mon pseudo
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default globalConnector()(Header);

Header.propTypes = {
  username: PropTypes.func.isRequired,
};

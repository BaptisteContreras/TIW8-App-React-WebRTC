import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import globalConnector from '../../redux/connector/globalConnector';

function UsernameForm({ handleClose, setUsername }) {
  let value;

  const submit = (event) => {
    if (value) {
      setUsername(value);
      handleClose();
    }
    event.preventDefault();
  };

  const handleChange = (event) => {
    value = event.target.value;
  };

  return (
    <form onSubmit={submit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Username"
            helperText="Rentrer un username"
            variant="filled"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="outlined">Confirmer</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default globalConnector()(UsernameForm);

UsernameForm.propTypes = {
  setUsername: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

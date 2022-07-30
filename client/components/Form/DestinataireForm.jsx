import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import chatConnector from '../../redux/connector/chatConnector';

function DestinataireForm({
  destinataire, setDestinataire, handleClose, username,
}) {
  let value = destinataire;

  const submit = (event) => {
    if (value && value !== username()) {
      setDestinataire(value);
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
            label="Destinataire"
            defaultValue={value}
            helperText="Qui voulez-vous contacter ?"
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

export default chatConnector()(DestinataireForm);

DestinataireForm.propTypes = {
  destinataire: PropTypes.string.isRequired,
  username: PropTypes.func.isRequired,
  setDestinataire: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

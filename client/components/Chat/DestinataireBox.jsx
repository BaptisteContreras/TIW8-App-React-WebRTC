import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import DestinataireForm from '../Form/DestinataireForm';
import mixedConnector from '../../redux/connector/mixedConnector';
import peerClient from '../../peer/peerClient';

function DestinataireBox({
  destinataire,
  isConnected,
  username,
}) {
  const [state, setState] = useState({
    edit: false,
  });

  const handleDeconnexion = () => {
    peerClient.disconnect();
  };
  const handleConnexion = () => {
    peerClient.connectTo(username(), destinataire);
  };
  const switchMode = () => {
    setState({
      edit: !state.edit,
    });
  };
  const displayAction = () => {
    if (state.edit || !username() || !destinataire) {
      return '';
    }
    return !isConnected() ? <Button onClick={handleConnexion} size="small">Se connecter</Button> : <Button onClick={handleDeconnexion} size="small">Se Déconnecter</Button>;
  };

  const displayForm = () => (!state.edit ? <></> : <DestinataireForm handleClose={switchMode} />);

  const displayEditButton = () => (isConnected() ? '' : <Button onClick={switchMode} size="small">Modifier</Button>);
  const displayDestinataire = () => (!state.edit ? (
    <>
      <div>
        Destinataire :
        { displayEditButton() }
      </div>
      <div>
        {' '}
        { destinataire }
      </div>

    </>
  ) : 'Destinataire');

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          { displayDestinataire() }
        </Typography>
        { displayForm() }
      </CardContent>
      { displayAction() }
      <CardActions />
    </Card>
  );
}

export default mixedConnector()(DestinataireBox);

DestinataireBox.propTypes = {
  destinataire: PropTypes.string.isRequired,
  isConnected: PropTypes.func.isRequired,
  username: PropTypes.func.isRequired,
};

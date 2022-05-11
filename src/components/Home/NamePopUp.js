import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import BotIcon from '../../assets/bot.png';
import './namepopup.css';

const useStyles = makeStyles({
  input: {
    color: 'white',
    fontSize: '13px'
  }
});

const NamePopUp = ({ namePopUp, setDisplayChat, setName, name, setNamePopUp }) => {
  const classes = useStyles();

  const styles = {
    dialogbox: {
      backgroundColor: '#001b96',
      padding: '7px 30px 30px 30px'
    },
    botIcon: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '30px'
    },
    dialogActions: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '15px 0px 10px 0px',
      backgroundColor: '#001b96'
    }
  };
  const handleClose = () => {
    setDisplayChat(true);
    setNamePopUp(false);
  };

  return (
    <div>
      <Dialog
        open={namePopUp}
        PaperProps={{
          style: { borderRadius: 10 }
        }}>
        <div style={styles.dialogbox}>
          <DialogContent>
            <div style={styles.botIcon}>
              <img src={BotIcon} style={{ width: 58 }} />
            </div>
            <p className='bot-name'>Hola my name is Amigo!!!</p>
            <p className='user-name'>How do I call you?</p>
            <TextField
              inputProps={{ className: classes.input }}
              autoFocus
              id='name'
              type='name'
              fullWidth
              variant='standard'
              onChange={(event) => {
                setName(event.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  handleClose();
                }
              }}
            />
          </DialogContent>
          <DialogActions style={styles.dialogActions}>
            <button className='enter-btn' onClick={handleClose} disabled={!name.trim()}>
              Enter
            </button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

NamePopUp.propTypes = {
  namePopUp: PropTypes.bool,
  setDisplayChat: PropTypes.func,
  setName: PropTypes.func,
  name: PropTypes.string,
  setNamePopUp: PropTypes.func
};

export default NamePopUp;

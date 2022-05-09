import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import BotGif from '../../assets/bot.png';

const useStyles = makeStyles({
  input: {
    color: 'white',
    fontSize: '13px'
  }
});

const NamePopUp = ({ namePopUp, setDisplayChat, setName, name }) => {
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
    iconFontColor: {
      color: 'white',
      fontSize: '16px',
      paddingBottom: '25px',
      fontFamily: 'Eina 01',
      fontStyle: 'normal',
      fontWeight: 600
    },
    nameFontColor: {
      color: 'white',
      fontSize: '12px',
      fontFamily: 'Eina 01',
      fontStyle: 'normal',
      fontWeight: 600
    },
    DialogActions: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '15px 0px 10px 0px',
      backgroundColor: '#001b96'
    },
    submitButton: {
      backgroundColor: 'white',
      color: '#001b96',
      padding: '7px 25px 5px 25px',
      borderRadius: 20,
      fontSize: '16px',
      fontFamily: 'Eina 01',
      fontStyle: 'normal',
      fontWeight: 600
    }
  };
  const handleClose = () => {
    setDisplayChat(true);
  };

  return (
    <div>
      <Dialog
        open={namePopUp}
        PaperProps={{
          style: { borderRadius: 10 }
        }}>
        <div className='dialogbox' style={styles.dialogbox}>
          <DialogContent>
            <div className='botIcon' style={styles.botIcon}>
              <img src={BotGif} style={{ width: 60 }} />
            </div>
            <DialogContentText style={styles.iconFontColor}>
              Hola my name is Amigo!!!
            </DialogContentText>
            <DialogContentText style={styles.nameFontColor}>How do I call you?</DialogContentText>
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
          <DialogActions className='DialogActions' style={styles.DialogActions}>
            <Button onClick={handleClose} disabled={!name.trim()} style={styles.submitButton}>
              Enter
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default NamePopUp;

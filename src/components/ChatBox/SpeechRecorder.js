import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import MicNoneSharpIcon from '@mui/icons-material/MicNoneSharp';
import './chatbox.css';
const SpeechRecorder = ({ audioInput, setAudioInput, handleSpeechInput }) => {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const styles = {
    micIcon: {
      border: '1px solid',
      borderRadius: 15,
      padding: '3px',
      backgroundColor: '#001b96',
      color: 'white',
      width: 33,
      height: 30
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  listening
    ? setAudioInput(transcript)
    : audioInput == transcript && audioInput.length != 0
    ? handleSpeechInput()
    : null;

  return (
    <div>
      {listening ? (
        <MicSharpIcon
          id='toggle'
          style={styles.micIcon}
          onClick={SpeechRecognition.stopListening}
        />
      ) : (
        <MicNoneSharpIcon onClick={SpeechRecognition.startListening} style={styles.micIcon} />
      )}
    </div>
  );
};

export default SpeechRecorder;

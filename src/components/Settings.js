//Voice Setup
import React, { PropTypes,Component } from 'react';
import SpeechRecognition from 'react-speech-recognition'
//import { Box, Button as GrommetButton, Grommet } from 'grommet';
import './Pro.css';
import { Linking } from 'react-native';
import Communications from 'react-native-communications';
const propTypes = {
    // Props injected by SpeechRecognition
 
}
let lastDebounceTranscript,transcript;

export class Settings extends Component {
    constructor() {
        super();
        this.fixIntent = this.fixIntent.bind(this);
        this.checkIntent = this.checkIntent.bind(this);
        this.make_call = this.make_call.bind(this);
    }
  
    fixIntent(transcr) {
        //var intent = JSON.stringify(transcr);
        localStorage.setItem(transcr, 'intent');
        //'intent' is the key for the specific situation: we get this from Situations.js
        alert('Intent added successfully!');
        //this.make_call()
        
    }

    checkIntent(spoken) {
        //spoken = transcr TYPE.
        if (localStorage.hasOwnProperty(spoken)) {
            var trigger = localStorage.getItem(spoken);
            //parse through localStorage to find the situation name 'trigger'.
            var list = localStorage.getItem('situations');
            var number;
            
            list = JSON.parse(list);
            for (let key in list) {
                if (trigger = list[key].text) {
                    //go through the contacts list for this situation and make calls.
                    number = '+919440336616';
                    this.make_call(number);
                }
            }
            //alert(JSON.stringify(list));
        }
        /*else {
            continue listening...
        }*/
    }

    make_call(number_to_call) {
        //Linking.openURL(`tel://${number_to_call}`);
        Communications.phonecall(number_to_call, false);
        alert('Calling...');
    }

    componentWillMount() {
        localStorage.setItem('always', JSON.stringify(transcript));
        //alert(JSON.stringify(transcript));
    }

    
    render() {
        
        const { interimResults, stopListening, startListening, transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
        if (!browserSupportsSpeechRecognition) {
            return null
        }
    
        return (
            //interimResults = false;

            <div className="profile">
                <br /><br/>
                <h2>Voice Setup</h2><br/>
                <p>Click on 'Start Listening' to activate microphone in the application.</p>
                <p>Click on 'Stop Listening' to deactivate it.</p>
                <br />
                <i class="fa fa-lg fa-microphone" ></i><br /><br />
                <p>For situation ____ call contacts associated with it:</p>
                <button onClick={startListening} className="btn btn-lg btn-primary">Start Listening</button><br /><br/>
                <button onClick={stopListening} className="btn btn-lg btn-primary" style={{ paddingTop: '2px' }}>Stop Listening</button><br />
               
                <p>Intent:</p>{transcript} <br />
                <button onClick={resetTranscript} className="btn btn-lg btn-primary" >Reset</button><br /><br />
                <form action="/situations">
                    <button type="submit" onClick={() => this.fixIntent(transcript)} className="btn btn-lg btn-primary" >Fix Intent</button><br /><br />
                </form>
                <button onClick={() => this.checkIntent(transcript)} className="btn btn-lg btn-primary" >Check</button><br /><br />

                <br />
                <br />
                <br />
                <br />
                <br />
                 
             

               
            </div>
        )
    }

}
Settings.propTypes = propTypes
const options = {
    autoStart: true
}


export default SpeechRecognition(options)(Settings);
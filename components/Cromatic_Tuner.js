import React, { Compopent } from "react";
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    PermissionsAndroid
} from 'react-native'

import Tuner from '../classes/tuner_src/Tuner.js';
import Note from "../classes/tuner_src/Note.js";
import Meter from "../classes/tuner_src/Meter.js";

export default class Chromatic_Tuner extends Component {
    constructor() {
        super();
    }

    state = {
        note: {
            name: "A",
            octave: 4,
            frequency: 440,
        }
    }

    _update( note ) {
        this.setState({ note });
    }

    async componentDidMount() {
        if (Platform.OS === "android") {
            await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]);
        }

        const tuner = new Tuner();
        tuner.start();
        tuner.onNoteDetected = (note) => {
            if (this._lastNoteName === note.name) {
                this._update( note );
            } else {
                this._lastNoteName = note.name;
            }
        };
    }

    render() {
        return (
            <View style={ style.body }>
                <StatusBar backgroundColor="#000" translucent />
                <Meter cents={ this.state.note.cents }/>
                <Note { ...this.state.note }>
                    <Text styel={ style.frequency }>
                        { this.state.note.frequency.toFixed(1) } Hz
                    </Text>
                </Note>
            </View>

        )
    }
}
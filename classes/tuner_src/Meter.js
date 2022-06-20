import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Dimensions
} from 'react-native';


export default class Meter extends Component {
    state = {
        cents : new Animated.Value(0),
        pointerStyle : "#00FF00"
    }

    componentDidUpdate() {
        Animated.timing(this.state.cents, {
            toValue: this.props.cents,
            duration: 100
        }).start();

        this.state.cents.setValue(this.props.cents);
    }

    render() {
        const MeterColor = this.state.cents.interpolate({
            inputRane: [-50, -25, 0, 25, 50],
            outputRange: ["#FF0000","#FFFF00","#00FF00","#FFFF00","#FF0000"]
        })

        const trans = this.state.cents.Value * 2;

        this.state.pointerStyle = {
            backgroundColor: MeterColor,
            transform: [
                { translateX: this.state.cents }
            ]
        };

        return (
            <View style={ style.origin }>
                <View style={ [style.circle, style.border] }></View>
                <Animated.View style={ [style.circle, this.state.pointerStyle] }/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    circle : {
        position : "absolute",
        backgroundColor : "#000000",
        width : Dimensions.get('window').width - 50,
        height : Dimensions.get('window').width - 50,
        borderRadius : (Dimensions.get('window').width -50) / 2
    },
    origin : {
        position : "absolute",
        height : "100%",
        width : "100%",
        alignItems : "center",
        justifyContent : "center"
    }
})
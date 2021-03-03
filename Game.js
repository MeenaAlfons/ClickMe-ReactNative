import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';

const DOUBLE_PRESS_DELAY = 500

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xRatio: Math.random(),
      yRatio: Math.random()
    };
  }

  _onPressButton = (e) => {
    // Recognize double click
    // if double click Show celebration
    const now = new Date().getTime();

    if (this.lastImagePress && (now - this.lastImagePress) < DOUBLE_PRESS_DELAY) {
      delete this.lastImagePress;
      this._celebrate(e);
      return // Don't change its position again
    }
    else {
      this.lastImagePress = now;
    }

    // Each tap change position
    this.setState({
      xRatio: Math.random() * 0.8, // from 0 to 80%
      yRatio: Math.random() * 0.8
    })
  }

  _celebrate = (e) => {
    alert('Congratulations!');
  }

  render() {
    const left = Math.floor(this.state.xRatio*100)+'%';
    const top = Math.floor(this.state.yRatio*100)+'%';
    return (
      <>
        <View style={styles.base}>
          <TouchableWithoutFeedback onPress={this._onPressButton}>
            <Text style={[styles.fish, {top,left}]}>
              Double Tap
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </>
    );
  }
};


const styles = StyleSheet.create({
    base: {
      flex: 1,
      backgroundColor: 'blue',
    },
    fish: {
      backgroundColor: 'red',
      width: 100,
      height:100,
      position: 'absolute',

      fontSize: 30,
      textAlign:'center',
      color: 'white'
    },
  });
  
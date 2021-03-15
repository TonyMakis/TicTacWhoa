/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StatusBar, TouchableOpacity, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {connect} from 'react-redux';
import {updateTicTacToe} from './redux/actions/ticTacToe';
import {resetTicTacToe} from './redux/actions/ticTacToe';

import Board from './Board';
import calculateWinner from './WinnerChecking';
import {styles} from './styles/mainStyles';

EStyleSheet.build();

class App extends Component {
  handleBackClick(ticTacToe) {
    if (ticTacToe.stepNumber > 0) {
      this.props.updateTicTacToe({
        history: ticTacToe.history,
        stepNumber: ticTacToe.stepNumber - 1,
        xIsNext: (ticTacToe.stepNumber - 1) % 2 === 0,
      });
    }
  }

  handleForwardClick(ticTacToe) {
    if (ticTacToe.stepNumber + 1 < ticTacToe.history.length) {
      this.props.updateTicTacToe({
        history: ticTacToe.history,
        stepNumber: ticTacToe.stepNumber + 1,
        xIsNext: (ticTacToe.stepNumber + 1) % 2 === 0,
      });
    }
  }

  render() {
    const {ticTacToe} = this.props;
    let currentSquares = ticTacToe.history[ticTacToe.stepNumber].squares;
    const winner = calculateWinner(currentSquares);

    let status;
    if (winner === 'redo') {
      status = 'Nobody won!';
    } else if (winner) {
      status = 'Winner: ' + winner[0] + ' !';
    } else {
      status = 'Next player: ' + (ticTacToe.xIsNext ? 'X' : 'O');
    }

    return (
      <>
        <StatusBar hidden />
        <View style={styles.containerView}>
          <View style={styles.titleView}>
            <Text style={styles.title}>TicTacWhoa</Text>
          </View>
          <View style={styles.gameBoardView}>
            <Board />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.title}>{status}</Text>
          </View>
          <View style={styles.moveView}>
            <TouchableOpacity
              style={styles.moveBtn}
              onPress={() => this.handleBackClick(ticTacToe)}>
              <Text style={styles.btnText}>◀</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.resetTicTacToe()}>
              <Text style={styles.btnText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moveBtn}
              onPress={() => this.handleForwardClick(ticTacToe)}>
              <Text style={styles.btnText}>▶</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ticTacToe: state.ticTacToe,
});

const mapDispatchToProps = dispatch => ({
  updateTicTacToe: ticTacToe => {
    dispatch(updateTicTacToe(ticTacToe));
  },
  resetTicTacToe: () => {
    dispatch(resetTicTacToe());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

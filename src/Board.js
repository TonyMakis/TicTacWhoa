import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {updateTicTacToe} from './redux/actions/ticTacToe';

import calculateWinner from './WinnerChecking';

class Board extends Component {
  handleClick(ticTacToe, i) {
    const history = ticTacToe.history.slice(0, ticTacToe.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = ticTacToe.xIsNext ? 'X' : 'O';
    this.props.updateTicTacToe({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !ticTacToe.xIsNext,
    });
  }

  renderSquare(ticTacToe, i) {
    let squares = ticTacToe.history[ticTacToe.stepNumber].squares;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.handleClick(ticTacToe, i)}>
        <Text style={styles.gamePiece}>{squares[i]}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    let {ticTacToe} = this.props;
    return (
      <>
        <View style={styles.boardRow}>
          <View style={styles.boardCol}>{this.renderSquare(ticTacToe, 0)}</View>
          <View style={styles.boardCol}>{this.renderSquare(ticTacToe, 1)}</View>
          <View style={styles.boardCol}>{this.renderSquare(ticTacToe, 2)}</View>
        </View>
        <View style={styles.boardRow}>
          <View style={styles.boardCol}>{this.renderSquare(ticTacToe, 3)}</View>
          <View style={styles.boardCol}>{this.renderSquare(ticTacToe, 4)}</View>
          <View style={styles.boardCol}>{this.renderSquare(ticTacToe, 5)}</View>
        </View>
        <View style={styles.boardRow}>
          <View style={styles.boardCol}>{this.renderSquare(ticTacToe, 6)}</View>
          <View style={styles.boardCol}>{this.renderSquare(ticTacToe, 7)}</View>
          <View style={styles.boardCol}>{this.renderSquare(ticTacToe, 8)}</View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  boardRow: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'stretch',
    backgroundColor: 'aliceblue',
  },
  boardCol: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c4c4',
  },
  gamePiece: {
    color: '#2a2a2a',
    fontWeight: 'bold',
    fontSize: 100,
  },
});

const mapStateToProps = state => ({
  ticTacToe: state.ticTacToe,
});

const mapDispatchToProps = dispatch => ({
  updateTicTacToe: ticTacToe => {
    dispatch(updateTicTacToe(ticTacToe));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);

import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = EStyleSheet.create({
  containerView: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    backgroundColor: '#2a2a2a',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  titleView: {
    flex: 0.5,
    backgroundColor: '#2a2a2a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moveView: {
    flex: 0.5,
    backgroundColor: '#2a2a2a',
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 50,
    letterSpacing: 6,
    textShadowColor: '#000',
    textShadowRadius: 2,
  },
  gameBoardView: {
    width: '85%',
    flex: 2,
    backgroundColor: '#9b7474',
    borderBottomColor: '#363535',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c4c4',
    padding: 0,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 55,
    marginLeft: '0.2em',
    marginRight: '0.2em',
  },
  moveBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c4c4',
    padding: 0,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 55,
    marginLeft: '0.2em',
    marginRight: '0.2em',
  },
  btnText: {
    color: '#2a2a2a',
    fontWeight: 'bold',
    fontSize: 50,
  },
  '@media (max-width: 600px)': {
    title: {
      fontSize: 40,
    },
    btnText: {
      fontSize: 40,
    },
  },
  '@media (max-width: 375px)': {
    title: {
      fontSize: 30,
    },
    btnText: {
      fontSize: 30,
    },
  },
  '@media (min-width: 290px)': {
    gameBoardView: {
      marginTop: '3.5em',
      marginBottom: '3.5em',
    },
  },
  '@media (min-width: 350px)': {
    gameBoardView: {
      width: '85%',
      marginTop: '3em',
      marginBottom: '3em',
    },
  },
  '@media (min-width: 375px)': {
    gameBoardView: {
      marginTop: '2em',
      marginBottom: '2em',
    },
  },
  '@media (min-width: 600px)': {
    gameBoardView: {
      width: '65%',
    },
  },
  '@media (min-width: 700px)': {
    gameBoardView: {
      width: '55%',
    },
  },
  '@media (min-width: 900px)': {
    gameBoardView: {
      width: '45%',
    },
  },
  '@media (min-width: 1000px)': {
    gameBoardView: {
      width: '35%',
    },
  },
  '@media (min-width: 1100px)': {
    gameBoardView: {
      width: '33%',
    },
  },
  '@media (min-width: 1200px)': {
    gameBoardView: {
      width: '30%',
    },
  },
});

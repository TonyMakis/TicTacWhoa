export default function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // Horizontals
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Verticals
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], [a, b, c]];
    }
  }

  let squaresC = squares.slice();

  let playSquaresLeft = squaresC
    .map(e => (e === null ? 1 : 0))
    .reduce((a, b) => a + b, 0);

  if (playSquaresLeft === 0) {
    return 'redo';
  }

  return null;
}

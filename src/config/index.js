const defaultConfig = {
  players: [
    { name: 'Guest 1' },
    { name: 'Guest 2' },
  ],
  rules: {
    roundsWonToWinMatch: 3,
    moves: [
      {
        id: 'rock',
        beats: ['scissors'],
      },
      {
        id: 'paper',
        beats: ['rock'],
      },
      {
        id: 'scissors',
        beats: ['paper'],
      },
    ]
  },
}

export default defaultConfig

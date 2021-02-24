const lists = [
  {
    id: 1,
    header: 'List 1',
    cardIds: [1]
  },
  {
    id: 2,
    header: 'List 2',
    cardIds: [1, 2]
  },
];
const cards = [
  {
    id: 1,
    title: 'Task 1',
    content: 'This is card 1'
  },
  {
    id: 2,
    title: 'Task 2',
    content: 'This is card 2'
  },
];

module.exports = { cards, lists }
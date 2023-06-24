import { napkin, book, cat, napkinAnim, catOrange, catOrangeAnim, bookAnim, catAnim, bookGreen, bookGreenAnim, letter, letterAnim } from './table';

export const levelsData = [
  { // 0
    'header': '',
    'tableItems': [],
    'cssCode': '',
    'htmlCode': '',
  },
  { // 1
    'header': 'Select the books',
    'tableItems': [bookAnim, bookAnim, bookAnim],
    'cssCode': 'book',
    'htmlCode': '<book /><book /><book />',
  },
  { // 2
    'header': 'Select the napkins',
    'tableItems': [napkinAnim, book, napkinAnim],
    'cssCode': 'napkin',
    'htmlCode': '<napkin /><book /><napkin />',
  },
  { // 3
    'header': 'Select the green book',
    'tableItems': [bookGreenAnim, napkin, book],
    'cssCode': '#green',
    'htmlCode': '<book id="green" /><napkin /><book />',
  },
  { // 4
    'header': 'Select the cat on the book',
    'tableItems': [napkin, [book, catAnim], cat],
    'cssCode': 'book cat',
    'htmlCode': '<napkin /><book><cat /></book><cat>',
  },
  { // 5
    'header': 'Select the letter on the green book',
    'tableItems': [[napkin, catOrange], [bookGreen, letterAnim], [book, cat]],
    'cssCode': '#green cat',
    'htmlCode': '<napkin><cat class="orange" /</napkin><book id="green"><letter /></book><book><cat /></book>',
  }
]

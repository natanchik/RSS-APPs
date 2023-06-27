import { napkin, book, cat, napkinAnim, catOrange, catOrangeAnim, bookAnim, catAnim, 
    bookGreen, bookGreenAnim, letter, letterAnim, catSmall, catSmallAnim, catOrangeSmall, 
    catOrangeSmallAnim, letterSmall, letterSmallAnim } from './table';

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
    'cssCode': ['#green', 'book#green'],
    'htmlCode': '<book id="green" /><napkin /><book />',
  },
  { // 4
    'header': 'Select the cat on the book',
    'tableItems': [napkin, [book, catAnim], cat],
    'cssCode': ['book cat', 'book > cat'],
    'htmlCode': '<napkin /><book><cat /></book><cat>',
  },
  { // 5
    'header': 'Select the letter on the green book',
    'tableItems': [[napkin, catOrange], [bookGreen, letterAnim], [book, letter]],
    'cssCode': ['#green letter', 'book#green letter', 'book#green > letter'],
    'htmlCode': '<napkin><cat class="orange" /</napkin><book id="green"><letter /></book><book><letter /></book>',
  },
  { // 6
    'header': 'Select the small orange cats',
    'tableItems': [catOrangeSmallAnim, cat, [napkin, catOrangeSmallAnim], [napkin, book]],
    'cssCode': ['.small', 'cat.small', 'cat.orange', 'cat.orange.small', 'cat.small.orange'],
    'htmlCode': '<cat class="small" /><cat /><napkin><cat class="small" /></napkin><book /><napkin />',
  },
  { // 7
    'header': 'Select the small orange cats',
    'tableItems': [cat, catSmall, [napkin, catOrangeSmallAnim], [book, catOrange], [book, catOrangeSmallAnim]],
    'cssCode': ['cat.orange.small', 'cat.small.orange', '.small.orange', '.orange.small'],
    'htmlCode': '<cat /><cat class="small" /><napkin><cat class="orange small" /></napkin><book><cat class="orange" /><book /><book><cat class="orange small" /><book />',
  },
  { // 8
    'header': 'Select the small orange cats on the napkins',
    'tableItems': [[napkin, cat], catOrangeSmall, [napkin, catOrangeSmallAnim], [napkin, [book, catSmall]], [napkin, catOrangeSmallAnim]],
    'cssCode': ['napkin cat.orange.small', 'napkin cat.orange', 'napkin .orange', 'napkin > cat.small', 'napkin > .small', 'napkin > cat.orange','napkin > .orange', 'napkin > cat.small.orange', 'napkin > cat.orange.small', 'napkin > .small.orange', 'napkin > .orange.small'],
    'htmlCode': '<napkin><cat /><napkin><cat class="orange small" /><napkin><cat class="orange small" /></napkin><napkin><cat class="small" /></napkin><napkin><cat class="orange small" /></napkin>',
  },
  { // 9
    'header': 'Select the books and napkins',
    'tableItems': [letterSmall, letter, [bookAnim, letter], [napkinAnim, letter], [bookAnim, letter], letter, letterSmall],
    'cssCode': ['book, napkin', 'napkin, book'],
    'htmlCode': '<letter class="small /><letter /><book><letter /></book><napkin><letter /></napkin><book><letter /></book><letter /><letter class="small />',
  },
  { // 10
    'header': 'Select all the things',
    'tableItems': [catAnim, [bookAnim, catOrangeSmall], napkinAnim, [napkinAnim, catOrangeAnim], [napkinAnim, catSmall]],
    'cssCode': ['*', 'napkin, book, cat', 'napkin, cat, book', 'book, napkin, cat', 'book, cat, napkin', 'cat, book, napkin', 'cat, napkin, book'],
    'htmlCode': '<cat /><book><cat class="orange small" /></book><napkin /><napkin><cat class="orange" /></napkin><napkin><cat class="small" /></napkin>',
  }
]


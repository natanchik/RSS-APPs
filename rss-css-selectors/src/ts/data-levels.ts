import {
  napkin,
  book,
  cat,
  napkinAnim,
  catOrange,
  catOrangeAnim,
  bookAnim,
  catAnim,
  bookGreen,
  bookGreenAnim,
  letter,
  letterAnim,
  catSmall,
  catOrangeSmall,
  catOrangeSmallAnim,
  letterSmall,
} from './blocks/table';

interface LevelData extends Object {
  header: string;
  tableItems: (HTMLDivElement | (HTMLDivElement | HTMLDivElement[])[])[];
  cssCode: string | string[];
  htmlCode: string;
}

export const levelsData = new Map<number, LevelData>([
  [
    1,
    {
      header: 'Select the books',
      tableItems: [bookAnim, bookAnim, bookAnim],
      cssCode: 'book',
      htmlCode: '<book /><book /><book />',
    },
  ],
  [
    2,
    {
      header: 'Select the napkins',
      tableItems: [napkinAnim, book, napkinAnim],
      cssCode: 'napkin',
      htmlCode: '<napkin /><book /><napkin />',
    },
  ],
  [
    3,
    {
      header: 'Select the green book',
      tableItems: [bookGreenAnim, napkin, book],
      cssCode: ['#green', 'book#green'],
      htmlCode: '<book id="green" /><napkin /><book />',
    },
  ],
  [
    4,
    {
      header: 'Select the cat on the book',
      tableItems: [napkin, [book, catAnim], cat],
      cssCode: ['book cat', 'book > cat'],
      htmlCode: '<napkin /><book><cat /></book><cat>',
    },
  ],
  [
    5,
    {
      header: 'Select the letter on the green book',
      tableItems: [
        [napkin, catOrange],
        [bookGreen, letterAnim],
        [book, letter],
      ],
      cssCode: ['#green letter', 'book#green letter', 'book#green > letter', '#green > letter'],
      htmlCode: '<napkin><cat class="orange" /</napkin><book id="green"><letter /></book><book><letter /></book>',
    },
  ],
  [
    6,
    {
      header: 'Select the small orange cats',
      tableItems: [catOrangeSmallAnim, cat, [napkin, catOrangeSmallAnim], [napkin, book]],
      cssCode: ['.small', '.orange', 'cat.small', 'cat.orange', 'cat.orange.small', 'cat.small.orange'],
      htmlCode:
        '<cat class="orange small" /><cat /><napkin><cat class="orange small" /></napkin><napkin><book /></napkin>',
    },
  ],
  [
    7,
    {
      header: 'Select the small orange cats',
      tableItems: [cat, catSmall, [napkin, catOrangeSmallAnim], [book, catOrange], [book, catOrangeSmallAnim]],
      cssCode: ['.orange.small', '.small.orange', 'cat.orange.small', 'cat.small.orange'],
      htmlCode:
        '<cat /><cat class="small" /><napkin><cat class="orange small" /></napkin><book><cat class="orange" /></book><book><cat class="orange small" /></book>',
    },
  ],
  [
    8,
    {
      header: 'Select the small orange cats on the napkins',
      tableItems: [
        [napkin, cat],
        catOrangeSmall,
        [napkin, catOrangeSmallAnim],
        [napkin, [book, catSmall]],
        [napkin, catOrangeSmallAnim],
      ],
      cssCode: [
        'napkin .orange',
        'napkin cat.orange',
        'napkin .orange.small',
        'napkin .small.orange',
        'napkin cat.orange.small',
        'napkin cat.small.orange',
        'napkin > .small',
        'napkin > .orange',
        'napkin > cat.small',
        'napkin > cat.orange',
        'napkin > .small.orange',
        'napkin > .orange.small',
        'napkin > cat.small.orange',
        'napkin > cat.orange.small',
      ],
      htmlCode:
        '<napkin><cat /></napkin><cat class="orange small" /><napkin><cat class="orange small" /></napkin><napkin><book><cat class="small" /></book></napkin><napkin><cat class="orange small" /></napkin>',
    },
  ],
  [
    9,
    {
      header: 'Select the books and napkins',
      tableItems: [letterSmall, [napkinAnim, letter], [bookAnim, letter], letter, letterSmall],
      cssCode: ['book, napkin', 'napkin, book'],
      htmlCode:
        '<letter class="small /><napkin><letter /></napkin><book><letter /></book><letter /><letter class="small />',
    },
  ],
  [
    10,
    {
      header: 'Select all the things',
      tableItems: [catAnim, [bookAnim, catOrangeSmall], [napkinAnim, catOrangeAnim], [napkinAnim, catSmall]],
      cssCode: [
        '*',
        'napkin, book, cat',
        'napkin, cat, book',
        'book, napkin, cat',
        'book, cat, napkin',
        'cat, book, napkin',
        'cat, napkin, book',
      ],
      htmlCode:
        '<cat /><book><cat class="orange small" /></book><napkin><cat class="orange" /></napkin><napkin><cat class="small" /></napkin>',
    },
  ],
]);

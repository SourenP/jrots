/* Letter */

// Init
for (let i = 0; i < vnotes.length; i++) {
    vnotes[i] = new Letter(i);
    vnotes[i].setFont(open_en_font);
}

// for (let i = 0; i < vnotes.length; i++) {
//     vnotes[i] = new Letter(i);
//     vnotes[i].setFont(noto_am_font);
// }


// Constants
NOTE_TO_LETTER = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
    8: 'I',
    9: 'J',
    10: 'K',
    11: 'L',
}

// NOTE_TO_LETTER = {
//     0: 'Ա',
//     1: 'Բ',
//     2: 'Գ',
//     3: 'Դ',
//     4: 'Ե',
//     5: 'Զ',
//     6: 'Է',
//     7: 'Ը',
//     8: 'Թ',
//     9: 'Ժ',
//     10: 'Ի',
//     11: 'Լ',
// }

TEXT_SIZE = 100;
MARGIN = 0.3;

/* Word */
WORD_LENGTH_TO_WORD = {
    1: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    2: ["ON", "UP", "DO", "GO", "YO", "HI"],
    3: ["THE", "OFF"],
    4: [],
    5: [],
    6: ["CENTER"],
    7: ["RECURSE"]
}

// WORD_LENGTH_TO_WORD = {
//     1: ["Ա", "Բ", "Գ"],
//     2: ["ԲԱ"],
//     3: ["ԳԱԼ"]
// }
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
    3: ["CAT", "DOG", "RAT", "OWL", "FOX"],
    4: ["BIRD", "BEAR", "DEER", "FISH", "WOLF", "GOAT"],
    5: ["HORSE", "WHALE", "SNAKE", "OTTER", "EAGLE"],
    6: ["BEAVER", "MOUSE", "LIZARD", "MONKEY", "TIGER"],
    7: ["DOLPHIN"]
}

// WORD_LENGTH_TO_WORD = {
//     1: ["Ա", "Բ", "Գ"],
//     2: ["ԲԱ"],
//     3: ["ԳԱԼ"]
// }

// COLOR_PALETTE = ['#4F37A6', '#035AA6', '#03A678', '#F2AE2E', '#F23D3D']; // colorful

// COLOR_PALETTE = ['#000000'] // black

COLOR_PALETTE = ['#FFFFFF'] // white
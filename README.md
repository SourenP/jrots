# jrots_atom

A livecode environment in atom that produces visuals from midi notes.

For example: showing a letter each time a midi note is played.

Based on [hydra](https://github.com/ojack/hydra) and web midi.

![example](assets/images/jrots_example_2.png)

## Run

1. Connect midi device
2. Start [atom](https://atom.io/)
 - install [atom-hydra](https://atom.io/packages/atom-hydra)
3. Toggle hydra
 - packages > atom-hydra > toggle
4. Open files in `src/` in order, select all code and press `shift-enter` to execute.
5. Livecode and play midi
 - edit hydra in `*_hydra.js`
 - edit constants in `*_config.js`.
 - play midi notes

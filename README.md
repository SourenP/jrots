# jrots_atom

A livecode environment in atom based on [hydra](https://github.com/ojack/hydra) and [p5](https://p5js.org/) that produces visuals with letters and words from midi input.

![example](assets/images/diagram-01.png)

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

navigator.requestMIDIAccess()
    .then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    console.log(midiAccess);
    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;
    for (var input of midiAccess.inputs.values()) {
        input.onmidimessage = getMIDIMessage;
    }
}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
}

drawMidi = function(command, note, velocity) {
    console.log('Draw midi ' + command + ' ' + note + ' ' + velocity);
}

getMIDIMessage = function(midiMessage) {
    var arr = midiMessage.data
    var command = arr[0];
    var note = arr[1];
    var velocity = arr[2];

    console.log('Midi received ' + command + ' ' + note + ' ' + velocity);

    drawMidi(command, note, velocity);
}
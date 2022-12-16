var hudba = {

    audio: new Audio('audio_2022-12-16_23-26-34.mp3'),

    togglePause: function() {
        if (hudba.audio.paused) {
            hudba.audio.play();
        } else {
            hudba.audio.pause();
        }
    },

    start: function() {
        if (hudba.audio.paused){
            hudba.audio.play();
        }

    }

};

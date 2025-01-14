const { ref } = Vue

// Customize language for dialog menus and carousels here

const load = Vue.createApp({
  setup () {
    return {
      CarouselText1: 'Want a quote here? Go to the quotes channel in the discord and if you get enough reacts then your quote could be featured here!',
      CarouselSubText1: 'Quote by: Bama94#1994',
      CarouselText2: 'Want a quote here? Go to the quotes channel in the discord and if you get enough reacts then your quote could be featured here!',
      CarouselSubText2: 'Quote by: Bama94#1994',
      CarouselText3: 'Want a quote here? Go to the quotes channel in the discord and if you get enough reacts then your quote could be featured here!',
      CarouselSubText3: 'Quote by: Bama94#1994',
      CarouselText4: 'Want a quote here? Go to the quotes channel in the discord and if you get enough reacts then your quote could be featured here!',
      CarouselSubText4: 'Quote by: Bama94#1994',
      CarouselText5: 'Want a quote here? Go to the quotes channel in the discord and if you get enough reacts then your quote could be featured here!',
      CarouselSubText5: 'Quote by: Bama94#1994',
      // CarouselText2: 'Adding additional player data can be achieved by modifying the qb-core player.lua file.',
      // CarouselSubText2: 'Photo captured by: ihyajb#9723',
      // CarouselText3: 'All server-specific adjustments can be made in the config.lua files throughout the build.',
      // CarouselSubText3: 'Photo captured by: FLAPZ[INACTIV]#9925',
      // CarouselText4: 'For additional support please join our community at discord.gg/qbcore',
      // CarouselSubText4: 'Photo captured by: Robinerino#1312',

      DownloadTitle: 'Downloading Great Liberty RP',
      DownloadDesc: "Hold tight while we begin downloading all the resources/assets required to play on Great Liberty RP. \n\nAfter download has been finished successfully, you'll be placed into the server and this screen will disappear. Please don't leave or turn off your PC. ",

      SettingsTitle: 'Settings',
      AudioTrackDesc1: 'When disabled the current audio-track playing will be stopped.',
      AutoPlayDesc2: 'When disabled carousel images will stop cycling and remain on the last shown.',
      PlayVideoDesc3: 'When disabled video will stop playing and remain paused.',

      KeybindTitle: 'Default Keybinds',
      Keybind1: 'Open Inventory',
      Keybind2: 'Cycle Proximity',
      Keybind3: 'Open Phone',
      Keybind4: 'Toggle Seat Belt',
      Keybind5: 'Open Target Menu',
      Keybind6: 'Radial Menu',
      Keybind7: 'Open Hud Menu',
      Keybind8: 'Talk Over Radio',
      Keybind9: 'Open Scoreboard',
      Keybind10: 'Vehicle Locks',
      Keybind11: 'Toggle Engine',
      Keybind12: 'Pointer Emote',
      Keybind13: 'Keybind Slots',
      Keybind14: 'Hands Up Emote',
      Keybind15: 'Use Item Slots',
      Keybind16: 'Cruise Control',

      firstap: ref(true),
      secondap: ref(true),
      thirdap: ref(true),
      firstslide: ref(1),
      secondslide: ref('1'),
      thirdslide: ref('5'),
      audioplay: ref(true),
      playvideo: ref(true),
      download: ref(true),
      settings: ref(false),
    }
  }
})

load.use(Quasar, { config: {} })
load.mount('#loading-main')

var audio = document.getElementById("audio");
audio.volume = 0.05;

function audiotoggle() {
    var audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function videotoggle() {
    var x = document.getElementById("video");
    if (video.paused) {
        x.play();
    } else {
        x.pause();
    }
}

let count = 0;
let thisCount = 0;

const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (data.idx / count) * 100 + "%";
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;

        document.querySelector(".thingy").style.left = "0%";
        document.querySelector(".thingy").style.width = (thisCount / count) * 100 + "%";
    },
};

window.addEventListener("message", function (e) {
    (handlers[e.data.eventName] || function () {})(e.data);
});

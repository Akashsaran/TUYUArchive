const songs = [
  {
    name: "It's Raining After All",
    src: "songs/It's Raining After All.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/It's Raining After All.mp4",
    piano: "piano/It's Raining After All (Piano) 0.mp3",
  },
  {
    name: "Early Summer",
    src: "songs/Early summer.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "",
    piano: "piano/Early Summer (Piano) 0.mp3",
  },
  {
    name: "Under the Summer Breeze",
    src: "songs/Under the Summer Breeze.mp3",
    cover: "albums/Under The Summer Breeze.jpg",
    video: "videos/Under the Summer Breeze.mp4",
    piano: "piano/Under the Summer Breeze (Piano) 0.mp3",
  },
  {
    name: "When the Morning Glory Falls",
    src: "songs/When the Morning Glory Falls.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/When the Morning Glory Falls.mp4",
    piano: "piano/When the Morning Glory Falls (Piano) 0.mp3",
  },
  {
    name: "Loneliness and the Future",
    src: "songs/Loneliness and the Future.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Loneliness and the Future.mp4",
    piano: "piano/Loneliness And The Future (Piano) 0.mp3",
  },
  {
    name: "I'm Getting on the Bus to the Other World, See Ya!",
    src: "songs/I'm getting on the bus to the other world, see ya!.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/I'm getting on the bus to the other world, see ya!.mp4",
    piano:
      "piano/I'm getting on the bus to the other world, see ya! (Piano) 0.mp3",
  },
  {
    name: "Perhaps I'll be Able to Become the Sun",
    src: "songs/Perhaps I'll be able to become the Sun..mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Perhaps I'll be able to become the Sun..mp4",
    piano: "piano/Perhaps I'll be able to become the Sun (Piano) 0.mp3",
  },
  {
    name: "Envy",
    src: "songs/Envy.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "",
    piano: "piano/Envy (Piano) 0.mp3",
  },
  {
    name: "Compared Child",
    src: "songs/Compared Child.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Compared Child.mp4",
    piano: "piano/Compared Child (Piano) 0.mp3",
  },
  {
    name: "Goodbye to Rock You",
    src: "songs/Goodbye to Rock you.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Goodbye to Rock you.mp4",
    piano: "piano/Goodbye to Rock you (Piano) 0.mp3",
  },
  {
    name: "Even Tears Withered",
    src: "songs/Even tears withered.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Even tears withered.mp4",
    piano: "piano/Even tears withered (Piano) 0.mp3",
  },
  {
    name: "Greed",
    src: "songs/Greed.mp3",
    cover: "albums/I'll Put You In Misery (Album).jpg",
    video: "",
    piano: "piano/Greed (Piano) 0.mp3",
  },
  {
    name: "Dämonisch",
    src: "songs/Dämonisch.mp3",
    cover: "albums/Dämonisch.png",
    video: "videos/Dämonisch.mp4",
    piano: "piano/Dämonisch (Piano) 0.mp3",
  },
  {
    name: "Trapped in the Past",
    src: "songs/Trapped in the past.mp3",
    cover: "albums/Trapped In The Past.png",
    video: "videos/Trapped in the past.mp4",
    piano: "piano/Trapped in the Past (Piano) 0.mp3",
  },
  {
    name: "What if This Isn't a Slave?",
    src: "songs/What if this isn't a slave.mp3",
    cover: "albums/What If This Isn't A Slave.jpg",
    video: "videos/What if this isn't a slave.mp4",
    piano: "piano/What If This Isn't A Slave_ (Piano) 0.mp3",
  },
  {
    name: "Loser Girl",
    src: "songs/Loser Girl.mp3",
    cover: "albums/Loser Girl.png",
    video: "videos/Loser Girl.mp4",
    piano: "piano/Loser Girl (Piano) 0.mp3",
  },
  {
    name: "To Bask in the Rain",
    src: "songs/To bask in the rain.mp3",
    cover: "albums/Basking In The Rain.png",
    video: "videos/To bask in the rain.mp4",
    piano: "piano/To Bask in the Rain (Piano) 0.mp3",
  },
  {
    name: "Autumn Rain Front",
    src: "songs/Autumn rain front.mp3",
    cover: "albums/Tenshi Autumn Rain Front.jpg",
    video: "",
    piano: "piano/Autumn Rain Front (Piano) 0.mp3",
  },
  {
    name: "Faithful Dog Hachi",
    src: "songs/Faithful dog Hachi.mp3",
    cover: "albums/Faitful Dog Hachi.png",
    video: "videos/TUYU - Faithful dog _Hachi_  MV 720.mp4",
    piano: "piano/Faithful dog _Hachi_ (Piano) 0.mp3",
  },
  {
    name: "Territory Battle",
    src: "songs/Territory Battle.mp3",
    cover: "albums/Territory Battle.jpg",
    video: "",
    piano: "piano/Territory Battle (Piano) 0.mp3",
  },
  {
    name: "Hide and Seek Alone",
    src: "songs/Hide and Seek Alone.mp3",
    cover: "albums/Hide And Seek Alone.png",
    video: "videos/Hide and Seek Alone.mp4",
    piano: "piano/Hide and Seek Alone (Piano) 0.mp3",
  },
  {
    name: "Being Low as Dirt, Taking What's Important From Me",
    src: "songs/Being low as dirt, taking what's important from me.mp3",
    cover: "albums/Being As Low As Dirt, Taking What's Important From Me.png",
    video: "videos/Being low as dirt, taking what's important from me.mp4",
    piano:
      "piano/Being low as dirt, taking what's important from me (Piano) 0.mp3",
  },
  {
    name: "If There Was an Endpoint",
    src: "songs/If there was an Endpoint. (Album ver.).mp3",
    cover: "albums/If There Was An Endpoint..jpg",
    video: "videos/If there was an Endpoint..mp4",
    piano: "piano/If There Was An Endpoint. 0.mp3",
  },
  {
    name: "Under Mentality",
    src: "songs/Under Mentality.mp3",
    cover: "albums/Under Mentality (Album) [Normal Edition].jpg",
    video: "",
    piano: "piano/Under Mentality (Piano) 0.mp3",
  },
  {
    name: "The Dissatisfaction and Discontent Disease",
    src: "songs/The Dissatisfaction and Discontent Disease.mp3",
    cover: "albums/Under Mentality (Album) [First-Press Limited Edition].jpg",
    video: "",
    piano: "piano/The Dissatisfaction and Discontent Disease (Piano) 0.mp3",
  },
  {
    name: "Under Kids",
    src: "songs/Under Kids.mp3",
    cover: "albums/Under Kids.jpg",
    video: "videos/Under Kids.mp4",
    piano: "piano/Under Kids (Piano) 0.mp3",
  },
  {
    name: "The Ravings of a Scheming Woman",
    src: "songs/The Ravings of a Scheming Woman.mp3",
    cover: "albums/Under Mentality (Album) [First-Press Limited Edition].jpg",
    video: "",
    piano: "piano/The Ravings of a Scheming Woman (Piano) 0.mp3",
  },
  {
    name: "Under Heroine",
    src: "songs/Under Heroine.mp3",
    cover: "albums/Under Heroine.jpg",
    video: "videos/Under Heroine.mp4",
    piano: "piano/Under Heroine (Piano) 0.mp3",
  },
  {
    name: "Would be Nice If You Grow Up One Day",
    src: "songs/I Hope You Can Be an Adult Someday..mp3",
    cover: "albums/Would Be Nice If You Grow Up One Day..jpg",
    video: "videos/Would be nice if you grow up one day..mp4",
    piano: "piano/I Hope You Can Be an Adult Someday. (Piano) 0.mp3",
  },
  {
    name: "Shelter From the Rain",
    src: "songs/Shelter from the Rain.mp3",
    cover: "albums/Under Mentality (Album) [Normal Edition].jpg",
    video: "",
    piano: "piano/Shelter from the Rain (Piano) 0.mp3",
  },
  {
    name: "Overcast Skies",
    src: "songs/Overcast Skies.mp3",
    cover: "albums/Overcast Skies.png",
    video: "videos/Overcast Skies.mp4",
    piano: "piano/Overcast Skies (Piano) 0.mp3",
  },
  {
    name: "Rain Fall",
    src: "songs/Rain Fall.mp3",
    cover: "albums/Rain Fall.jpg",
    video: "",
    piano: "piano/Rain Fall (Piano) 0.mp3",
  },
  {
    name: "And That’s Why I Can't Stop",
    src: "songs/And That's Why I Can't Stop!.mp3",
    cover: "albums/And That's Why I Can't Stop.jpg",
    video: "",
    piano: "piano/And That's Why I Can't Stop! (Piano) 0.mp3",
  },
  {
    name: "It Might Be Painful, But I Still Love It",
    src: "songs/It Might Be Painful, But I Still Love It..mp3",
    cover: "albums/It Might Be Painful, But I Still Love It..jpg",
    video: "videos/It Might Be Painful, But I Still Love It..mp4",
    piano: "piano/It Might Be Painful, but I Still Love It. (Piano) 0.mp3",
  },
  {
    name: "The Tale of a Moonlight Night",
    src: "songs/The Tale of a Moonlight Night.mp3",
    cover: "albums/Under Mentality (Album) [Normal Edition].jpg",
    video: "",
    piano: "piano/The Tale of a Moonlight Night (Piano) 0.mp3",
  },
  {
    name: "What Sort of Ending Are You Wishing For",
    src: "songs/What Sort of Ending Are You Wishing For.mp3",
    cover: "albums/What Sort Of Ending Are You Wishing For.jpg",
    video: "videos/What Sort Of Ending Are You Wishing For.mp4",
    piano: "piano/What Sort of Ending Are You Wishing For_ (Piano) 0.mp3",
  },
  {
    name: "Revolutionary Front",
    src: "songs/Revolutionary Front.mp3",
    cover: "albums/Revolutionary Front.png",
    video: "videos/Revolutionary Front.mp4",
    piano: "piano/Revolutionary Front (Piano) 0.mp3",
  },
  {
    name: "It's Raining Nevertheless",
    src: "songs/It's Raining Nevertheless.mp3",
    cover: "albums/It's Raining Nevertheless.jpg",
    video: "videos/ツユ - それでも雨は降るんだね MV 720.mp4",
    piano: "piano/It's Raining Nevertheless (Piano) 0.mp3",
  },
];

const player = document.getElementById("player");
const songTitle = document.getElementById("song-title");
const albumCover = document.getElementById("album-cover");
const audio = document.getElementById("audio");
const timer = document.getElementById("timer");
const backgroundVideo = document.getElementById("background-video");
const playButton = document.getElementById("play");
const randomButton = document.getElementById("random");
const prevButton = document.getElementById("prev");
const repeatButton = document.getElementById("repeat");
const nextButton = document.getElementById("next");
const pianoButton = document.getElementById("piano");
const timeline = document.getElementById("timeline");
const timelineProgress = document.getElementById("timeline-progress");
const timeContainer = document.getElementById("time-container");
const timelineContainer = document.getElementById("timeline");

let currentSongIndex = 0;
let isPlaying = false;
let isPianoMode = false;

const loadSong = (index) => {
  const song = songs[index];
  if (isPianoMode) {
    const song = songs[index];
    songTitle.textContent = index + 1 + ". " + song.name + " (Piano)";
    if (index >= 0 && index < 11) {
      albumCover.src = "albums/TUYU formation Cropped.jpg";
    } else {
      albumCover.src = "albums/Under Kids Piano Arrangement CD.png";
    }
    audio.src = song.piano;
    backgroundVideo.src = "videos/It's Raining After All Rain.mp4";
    backgroundVideo.currentTime = 0;
  } else {
    songTitle.textContent = index + 1 + ". " + song.name;
    albumCover.src = song.cover;
    audio.src = song.src;
    backgroundVideo.src = song.video;
    backgroundVideo.currentTime = 0;
  }
};

const playSong = () => {
  audio.play();
  backgroundVideo.play();
  isPlaying = true;
  playButton.innerHTML = '<i class="fas fa-stop"></i>';
};
const pauseSong = () => {
  audio.pause();
  backgroundVideo.pause();
  isPlaying = false;
  playButton.innerHTML = '<i class="fas fa-play"></i>';
};

const randomSong = () => {
  currentSongIndex = Math.floor(Math.random() * songs.length);
  fadeOut(() => {
    loadSong(currentSongIndex);
    playSong();
  });
};

const updateTimeline = () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  timelineProgress.style.width = `${progress}%`;
  /* backgroundVideo.currentTime = audio.currentTime; BRO THIS SINGLEPIECE OF CODE LITERALLY MAKES THE VIDEO LIKE 2 FPS WTF */
};

const seek = (event) => {
  const rect = timeline.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const width = rect.width;
  const percent = offsetX / width;
  const newTime = percent * audio.duration;

  audio.currentTime = newTime;
  backgroundVideo.currentTime = newTime;
};

const fadeOut = (callback) => {
  player.classList.add("hidden");
  setTimeout(() => {
    callback();
    player.classList.remove("hidden");
  }, 500);
};

const fadeOutShort = (callback) => {
  player.classList.add("hidden");
  setTimeout(() => {
    callback();
    player.classList.remove("hidden");
  }, 500);
};

playButton.addEventListener("click", () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  fadeOutShort(() => {
    loadSong(currentSongIndex);
    playSong();
  });
});

nextButton.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  fadeOutShort(() => {
    loadSong(currentSongIndex);
    playSong();
  });
});

randomButton.addEventListener("click", () => {
  randomSong();
});

repeatButton.addEventListener("click", () => {
  audio.currentTime = 0;
  backgroundVideo.currentTime = 0;
});

pianoButton.addEventListener("click", () => {
  isPianoMode = !isPianoMode;
  fadeOut(() => {
    loadSong(currentSongIndex);
    playSong();
  });
});

timeline.addEventListener("click", seek);
audio.addEventListener("timeupdate", updateTimeline);
audio.addEventListener("ended", () => {
  randomSong();
});

loadSong(currentSongIndex);

const togglePlayerElements = () => {
  albumCover.classList.toggle("hiddenspace");
  timeline.classList.toggle("hiddenspace");
  timer.classList.toggle("hiddenspace");
  timeContainer.classList.toggle("hiddenspace");
};

const toggleAllPlayerElements = () => {
  albumCover.classList.toggle("hiddenspace");
  timeline.classList.toggle("hiddenspace");
  playButton.classList.toggle("hiddenspace");
  prevButton.classList.toggle("hiddenspace");
  nextButton.classList.toggle("hiddenspace");
  pianoButton.classList.toggle("hiddenspace");
  player.classList.toggle("hiddenspace");
  timeContainer.classList.toggle("hiddenspace");
  timer.classList.toggle("hiddenspace");
};

// Key Presses LMAO
document.addEventListener("keydown", (event) => {
  if (event.key === "c") {
    togglePlayerElements();
  } else if (event.key === "ArrowLeft") {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    fadeOut(() => {
      loadSong(currentSongIndex);
      playSong();
    });
  } else if (event.key === "ArrowRight") {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    fadeOut(() => {
      loadSong(currentSongIndex);
      playSong();
    });
  } else if (event.key === " ") {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  } else if (event.key === "h") {
    toggleAllPlayerElements();
  } else if (event.key === "r") {
    randomSong();
  } else if (event.key === "l") {
    audio.currentTime = 0;
    backgroundVideo.currentTime = 0;
  } else if (event.key === "p") {
    isPianoMode = !isPianoMode;
    fadeOut(() => {
      loadSong(currentSongIndex);
      playSong();
    });
  }
});

let hrElement;
let counter = 50;

for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  hrElement.style.left =
    Math.floor(Math.random() * window.innerWidth * 1.5) - 50 + "px";
  hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
  hrElement.style.animationDelay = Math.random() * 5 + "s";

  document.body.appendChild(hrElement);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

function updateTimer() {
  const currentTime = formatTime(audio.currentTime);
  const duration = formatTime(audio.duration || 0);
  timer.textContent = `${currentTime} / ${duration}`;
}

audio.addEventListener("timeupdate", updateTimer);
audio.addEventListener("loadedmetadata", updateTimer);

updateTimer();

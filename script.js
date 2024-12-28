const songs = [
  {
    name: "1. It's Raining After All",
    src: "songs/It's Raining After All.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/It's Raining After All.mp4",
  },
  {
    name: "2. Early Summer",
    src: "songs/Early summer.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "",
  },
  {
    name: "3. Under the Summer Breeze",
    src: "songs/Under the Summer Breeze.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Under the Summer Breeze.mp4",
  },
  {
    name: "4. When the Morning Glory Falls",
    src: "songs/When the Morning Glory Falls.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/When the Morning Glory Falls.mp4",
  },
  {
    name: "5. Loneliness and the Future",
    src: "songs/Loneliness and the Future.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Loneliness and the Future.mp4",
  },
  {
    name: "6. I'm Getting on the Bus to the Other World, See Ya!",
    src: "songs/I'm getting on the bus to the other world, see ya!.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/I'm getting on the bus to the other world, see ya!.mp4",
  },
  {
    name: "7. Perhaps I'll be Able to Become the Sun",
    src: "songs/Perhaps I'll be able to become the Sun..mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Perhaps I'll be able to become the Sun..mp4",
  },
  {
    name: "8. Envy",
    src: "songs/Envy.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "",
  },
  {
    name: "9. Compared Child",
    src: "songs/Compared Child.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Compared Child.mp4",
  },
  {
    name: "10. Goodbye to Rock You",
    src: "songs/Goodbye to Rock you.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Goodbye to Rock you.mp4",
  },
  {
    name: "11. Even Tears Withered",
    src: "songs/Even tears withered.mp3",
    cover: "albums/It's Raining After All (Album).jpg",
    video: "videos/Even tears withered.mp4",
  },
  {
    name: "12. Greed",
    src: "songs/Greed.mp3",
    cover: "albums/I'll Put You In Misery (Album).jpg",
    video: "",
  },
  {
    name: "13. Dämonisch",
    src: "songs/Dämonisch.mp3",
    cover: "albums/Dämonisch.png",
    video: "videos/Dämonisch.mp4",
  },
  {
    name: "14. Trapped in the Past",
    src: "songs/Trapped in the past.mp3",
    cover: "albums/Trapped In The Past.png",
    video: "videos/Trapped in the past.mp4",
  },
  {
    name: "15. What if This Isn't a Slave?",
    src: "songs/What if this isn't a slave.mp3",
    cover: "albums/What If This Isn't A Slave.jpg",
    video: "videos/What if this isn't a slave.mp4",
  },
  {
    name: "16. Loser Girl",
    src: "songs/Loser Girl.mp3",
    cover: "albums/Loser Girl.png",
    video: "videos/Loser Girl.mp4",
  },
  {
    name: "17. To Bask in the Rain",
    src: "songs/To bask in the rain.mp3",
    cover: "albums/Basking In The Rain.png",
    video: "videos/To bask in the rain.mp4",
  },
  {
    name: "18. Autumn Rain Front",
    src: "songs/Autumn rain front.mp3",
    cover: "albums/I'll Put You In Misery (Album).jpg",
    video: "",
  },
  {
    name: "19. Faithful Dog Hachi",
    src: "songs/Faithful dog Hachi.mp3",
    cover: "albums/Faitful Dog Hachi.png",
    video: "videos/TUYU - Faithful dog _Hachi_  MV 720.mp4",
  },
  {
    name: "20. Territory Battle",
    src: "songs/Territory Battle.mp3",
    cover: "albums/Territory Battle.jpg",
    video: "",
  },
  {
    name: "21. Hide and Seek Alone",
    src: "songs/Hide and Seek Alone.mp3",
    cover: "albums/Hide And Seek Alone.png",
    video: "videos/Hide and Seek Alone.mp4",
  },
  {
    name: "22. Being Low as Dirt, Taking What's Important From Me",
    src: "songs/Being low as dirt, taking what's important from me.mp3",
    cover: "albums/Being As Low As Dirt, Taking What's Important From Me.png",
    video: "videos/Being low as dirt, taking what's important from me.mp4",
  },
  {
    name: "23. If There Was an Endpoint",
    src: "songs/If there was an Endpoint. (Album ver.).mp3",
    cover: "albums/If There Was An Endpoint..jpg",
    video: "videos/If there was an Endpoint..mp4",
  },
  {
    name: "24. Under Mentality",
    src: "songs/Under Mentality.mp3",
    cover: "albums/Under Mentality (Album) [Normal Edition].jpg",
    video: "",
  },
  {
    name: "25. The Dissatisfaction and Discontent Disease",
    src: "songs/The Dissatisfaction and Discontent Disease.mp3",
    cover: "albums/Under Mentality (Album) [First-Press Limited Edition].jpg",
    video: "",
  },
  {
    name: "26. Under Kids",
    src: "songs/Under Kids.mp3",
    cover: "albums/Under Kids.jpg",
    video: "videos/Under Kids.mp4",
  },
  {
    name: "27. The Ravings of a Scheming Woman",
    src: "songs/The Ravings of a Scheming Woman.mp3",
    cover: "albums/Under Mentality (Album) [First-Press Limited Edition].jpg",
    video: "",
  },
  {
    name: "28. Under Heroine",
    src: "songs/Under Heroine.mp3",
    cover: "albums/Under Heroine.jpg",
    video: "videos/Under Heroine.mp4",
  },
  {
    name: "29. Would be Nice If You Grow Up One Day",
    src: "songs/I Hope You Can Be an Adult Someday..mp3",
    cover: "albums/Would Be Nice If You Grow Up One Day..jpg",
    video: "videos/Would be nice if you grow up one day..mp4",
  },
  {
    name: "30. Shelter From the Rain",
    src: "songs/Shelter from the Rain.mp3",
    cover: "albums/Under Mentality (Album) [Normal Edition].jpg",
    video: "",
  },
  {
    name: "31. Overcast Skies",
    src: "songs/Overcast Skies.mp3",
    cover: "albums/Overcast Skies.png",
    video: "videos/Overcast Skies.mp4",
  },
  {
    name: "32. Rain Fall",
    src: "songs/Rain Fall.mp3",
    cover: "albums/Rain Fall.jpg",
    video: "",
  },
  {
    name: "33. And That’s Why I Can't Stop",
    src: "songs/And That's Why I Can't Stop!.mp3",
    cover: "albums/And That's Why I Can't Stop.jpg",
    video: "",
  },
  {
    name: "34. It Might Be Painful, But I Still Love It",
    src: "songs/It Might Be Painful, But I Still Love It..mp3",
    cover: "albums/It Might Be Painful, But I Still Love It..jpg",
    video: "videos/It Might Be Painful, But I Still Love It..mp4",
  },
  {
    name: "35. The Tale of a Moonlight Night",
    src: "songs/The Tale of a Moonlight Night.mp3",
    cover: "albums/Under Mentality (Album) [Normal Edition].jpg",
    video: "",
  },
  {
    name: "36. What Sort of Ending Are You Wishing For",
    src: "songs/What Sort of Ending Are You Wishing For.mp3",
    cover: "albums/What Sort Of Ending Are You Wishing For.jpg",
    video: "videos/What Sort Of Ending Are You Wishing For.mp4",
  },
  {
    name: "37. Revolutionary Front",
    src: "songs/Revolutionary Front.mp3",
    cover: "albums/Revolutionary Front.png",
    video: "videos/Revolutionary Front.mp4",
  },
  {
    name: "38. It's Raining Nevertheless",
    src: "songs/It's Raining Nevertheless.mp3",
    cover: "albums/It's Raining Nevertheless.jpg",
    video: "videos/ツユ - それでも雨は降るんだね MV 720.mp4",
  },
];

const player = document.getElementById("player");
const songTitle = document.getElementById("song-title");
const albumCover = document.getElementById("album-cover");
const audio = document.getElementById("audio");
const backgroundVideo = document.getElementById("background-video");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const timeline = document.getElementById("timeline");
const timelineProgress = document.getElementById("timeline-progress");

let currentSongIndex = 0;
let isPlaying = false;

const loadSong = (index) => {
  const song = songs[index];
  songTitle.textContent = song.name;
  albumCover.src = song.cover;
  audio.src = song.src;
  backgroundVideo.src = song.video;
  backgroundVideo.currentTime = 0;
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
  }, 200);
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

timeline.addEventListener("click", seek);
audio.addEventListener("timeupdate", updateTimeline);
audio.addEventListener("ended", () => {
  randomSong();
});

loadSong(currentSongIndex);

const togglePlayerElements = () => {
  albumCover.classList.toggle("hiddenspace");
  timeline.classList.toggle("hiddenspace");
};

const toggleAllPlayerElements = () => {
  albumCover.classList.toggle("hiddenspace");
  timeline.classList.toggle("hiddenspace");
  playButton.classList.toggle("hiddenspace");
  prevButton.classList.toggle("hiddenspace");
  nextButton.classList.toggle("hiddenspace");
  player.classList.toggle("hiddenspace");
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
  }
});

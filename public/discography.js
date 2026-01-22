document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('albums');
  const buttons = document.querySelectorAll('.layout-switcher [data-layout]');
  const albums = document.querySelectorAll('#albums .album');
  const dialog = document.getElementById('albumDialog');
  const closeBtn = document.getElementById('closeDialog');
  const dialogImage = document.getElementById('dialogImage');
  const dialogTitle = document.getElementById('dialogTitle');
  const tracklistCont = document.getElementById('tracklistCont');

 const albumData = {
  'THE STORY BEGINS': {
    tracklist: ['Like OOH-AHH', 'Do It Again', 'Going Crazy', 'Truth', 'Candy Boy', 'Like OOH-AHH (Inst.)', 'Must Be Crazy']
  },
  'PAGE TWO': {
    tracklist: ['Cheer Up', 'Precious Love', 'Touchdown', 'Tuk Tok', 'Woohoo', 'My Headphones On', 'Cheer Up (Inst.)']
  },
  'TWICEcoaster: LANE 1': {
    tracklist: ['TT', 'One in a Million', 'PONYTAIL', 'JELLY JELLY', 'NEXT PAGE', 'TT (Inst.)', 'One in a Million (Inst.)']
  },
  'TWICEcoaster: LANE 2': {
    tracklist: ['Knock Knock', 'SOON', 'SIGNAL', 'Ice Cream', 'Turtle']
  },
  'SIGNAL': {
    tracklist: ['Signal', 'THREE TIMES A DAY', 'Only You', 'HOLD ME TIGHT', 'Eye Eye Eyes', 'Someone Like Me', 'Signal (Inst.)']
  },
  'twicetagram': {
    tracklist: ['LIKEY', 'WOW', 'HO!', 'TURTLE', 'MISSING U', 'DING DONG', 'LOOK AT ME', 'DON\'T GIVE UP', '24/7', 'LOVE LINE', 'ROLLIN\'', 'YOU IN MY HEART', 'FFW']
  },
  'Merry & Happy': {
    tracklist: ['Merry & Happy', 'Heart Shaker', 'Merry & Happy (Ver. 2)', 'Heart Shaker (Inst.)']
  },
  'What is Love?': {
    tracklist: ['What is Love?', 'Sweet Talker', 'Ho!', 'Dejavu', 'Say Yes', 'What is Love? (Inst.)']
  },
  'Summer Nights': {
    tracklist: ['Dance The Night Away', 'Chillax', 'Shot thru the Heart', 'What You Waiting For', 'Dance The Night Away (Inst.)']
  },
  'YES or YES': {
    tracklist: ['YES or YES', 'Say You Love Me', 'LaLaLa', 'Young & Wild', 'Sunset', 'After Moon', 'BDZ (Korean Version)']
  },
  'The year of YES':{
    tracklist: ['The Best Thing I Ever Did', 'Be as ONE (Korean Version)', 'YES or YES', 'Say You Love Me', 'LaLaLa', 'Young & Wild', 'Sunset', 'After Moon', 'BDZ (Korean Version']
  },
  'FANCY YOU': {
    tracklist: ['Fancy', 'Stuck In My Head', 'Girls Like Us', 'Hot', 'Turn It Up', 'Strawberry']
  },
  'Feel Special': {
    tracklist: ['Feel Special', 'Rainbow', 'Get Loud', 'Trick It', '21:29', 'Love Foolish', 'Hot', 'Turn It Up']
  },
  'MORE & MORE': {
    tracklist: ['MORE & MORE', 'Oxygen', 'Firework', 'Make Me Go', 'Shadow', 'Don\'t Call Me Again', 'Sweet Summer Day', 'MORE & MORE (Inst.)']
  },
  'Eyes wide open': {
    tracklist: ['I CAN\'T STOP ME', 'HELL IN HEAVEN', 'UP NO MORE', 'DO WHAT WE LIKE', 'BRING IT BACK', 'Believer', 'QUEEN', 'GO HARD', 'SHOT CLOCK', 'HANDLE IT', 'DEPEND ON YOU', 'SAY SOMETHING', 'BEHIND THE MASK', 'I CAN\'T STOP ME (Eng.)']
  },
  'CRY FOR ME':{
    tracklist:['CRY FOR ME']
  },
  'Taste of Love': {
    tracklist: ['Alcohol-Free', 'First Time', 'Scandal', 'Conversation', 'Baby Blue Love', 'SOS', 'Alcohol-Free (Inst.)']
  },
  'The Feels': {
    tracklist: ['The Feels', 'The Feels (Inst.)']
  },
  'Formula Of Love: O+T=<3': {
    tracklist: ['Scientist', 'MOONLIGHT', 'ICON', 'CRUEL', 'REAL YOU', 'F.I.L.A', 'LAST WALTZ', 'ESPRESSO', 'REWIND', 'CACTUS', 'PUSH & PULL', 'HELLO', 'CANDY', '1, 3, 2', 'BRAVE', 'The Feels', 'SCIENTIST (R3HAB Remix)']
  },
  'IM NAYEON': {
    tracklist: ['POP!', 'NO PROBLEM', 'LOVE COUNTDOWN', 'CANDYFLOSS', 'ALL OR NOTHING', 'HAPPY BIRTHDAY TO YOU', 'SUNSET']
  },
  'BETWEEN 1&2': {
    tracklist: ['Talk that Talk', 'Queen of Hearts', 'Basics', 'Trouble', 'Brave', 'Gone', 'When We Were Kids', 'Flow Like Waves', 'Celebrate']
  },
  'MOONLIGHT SUNRISE':{
    tracklist:['MOONLIGHT SUNRISE']
  },
  'READY TO BE': {
    tracklist: ['Set Me Free', 'Moonlight Sunrise', 'New Rules', 'Wallflower', 'Hare Hare', 'Bloom', 'Butterfly', 'Got the Thrills', 'Crazy Stupid Love', 'Trouble']
  },
  'Masterpiece': {
    tracklist: ['Do not touch', 'Behind The Curtain', 'Marshmallow', 'Funny Valentine', 'It\'s not easy for you', 'Rewind you', 'Bouquet']
  },
  'ZONE': {
    tracklist: ['Killin\' Me Good', 'Talkin\' About It', 'Closer', 'Wishing On You', 'Don\'t Wanna Go Back (Duet with Heize)', 'Room', 'Nightmare']
  },
  'I GOT YOU': {
    tracklist: ['I GOT YOU', 'I GOT YOU (Inst.)']
  },
  'With YOU-th': {
    tracklist: ['I GOT YOU', 'One Spark', 'RUSH', 'NEW NEW', 'BLOOM', 'YOU GET ME', 'RUSH', 'Sweetest Obsession', 'Butterflies']
  },
  'abouTzu': {
    tracklist: ['Run Away', 'Heartbreak In Heaven (feat. PENIEL)', 'Lazy Baby', 'Losing Sleep', 'One Love', 'Fly']
  },
  'NA': {
    tracklist: ['ABCD', 'Butterflies', 'Heaven', 'Magic (feat. JULIE)', 'HalliGalli (Prod. by LEE CHANHYUK of AKMU)', 'Something', 'Count it']
  },
  'Haute Couture': {
    tracklist: ['Identity', 'RUNWAY', 'Wah Wah Wah', 'Baby, I\'m good', 'Daydream', 'NEW LOOK', 'Jealousy', 'Misty (MINA)', 'Money In My Pocket (MOMO)', 'Mirage (SANA)']
  },
  'STRATEGY': {
    tracklist: ['Strategy (feat. Megan Thee Stallion)', 'Keeper', 'Like It Like It', 'Kiss My Troubles Away', 'Sweetest Obsession']
  },
  'Message': {
    tracklist: ['Message']
  },
  'THIS IS FOR': {
    tracklist: ['FOUR', 'THIS IS FOR', 'OPTIONS', 'MARS', 'RIGHT HAND GIRL', 'PEACH GELATO', 'HI HELLO', 'BATTITUDE (NAYEON, JEONGYEON, MOMO, MINA)', 'DAT AHH DAT OOH (SANA, JIHYO, DAHYUN, CHAEYOUNG, TZUYU)', 'LET LOVE GO (JEONGYEON, MOMO, SANA, TZUYU)', 'G.O.A.T. (MINA, DAHYUN, CHAEYOUNG)', 'TALK (NAYEON, JIHYO)', 'SEESAW', 'HEARTBREAK AVENUE']
  },
  'LIL FANTASY vol.1': {
    tracklist: ['AVOCADO (feat. Gliiico)', 'BAND-AID', 'SHOOT (Firecracker)', 'GIRL', 'RIBBONS (feat. SUMIN & Jibin)', 'DOWNPOUR (feat. Kai)', 'BF', '그림자놀이 (Shadow Puppet)', '내 기타 (My Guitar)']
  },
  'TEN: The Story Goes On': {
    tracklist: ['ME+YOU', 'MEEEEEE (NAYEON)', 'FIX A DRINK (JEONGYEON)', 'MOVE LIKE THAT (MOMO)', 'DECAFFEINATED (SANA)', 'ATM (JIHYO)', 'STONE COLD (MINA)', 'CHESS (DAHYUN)', 'IN MY ROOM (CHAEYOUNG)', 'DIVE IN (TZUYU)']
  },
  'PLAY': {
    tracklist: ['Confetti', 'Hmm', 'Not a Goodbye', 'Deep Eden', 'Red Diamond', 'Catch My Eye', 'Kitty (MOMO SOLO)', 'Ma Cherry (SANA SOLO)', 'Turning Tables (MINA SOLO)', 'Identity', 'Do Not Touch', 'Message']
  }
};

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      container.classList.remove('album--grid', 'album--vinyl');
      container.classList.add(`album--${btn.dataset.layout}`);
    });
  });

albums.forEach(album => {
  album.addEventListener('click', () => {
    const title =
      album.dataset.title ||
      album.querySelector('.title').textContent.trim();

    const imgElement = album.querySelector('.album-covers img');

    dialogTitle.textContent = title;

    if (imgElement) {
      dialogImage.src = imgElement.src;
      dialogImage.alt = title;
    }

    tracklistCont.innerHTML = '';

    const albumInfo = albumData[title];

    if (albumInfo && albumInfo.tracklist) {
      albumInfo.tracklist.forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        tracklistCont.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Tracklist not available';
      tracklistCont.appendChild(li);
    }

    dialog.showModal();
  });
});


  closeBtn.addEventListener('click', () => {
    dialog.close();
  });

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener('cancel', (e) => {
    e.preventDefault();
    dialog.close();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const members = document.querySelectorAll('.member');

  const dialog = document.getElementById('albumDialog');
  const closeBtn = document.getElementById('closeDialog');
  const dialogImage = document.getElementById('dialogImage');
  const dialogName = document.getElementById('dialogInfo');
  const infoText = document.getElementById('member');

  const Info = {
    'IM NAYEON': {
      information:
        'Im Nayeon is the Lead Vocalist, Lead Dancer, and the Center of TWICE. She is the oldest member, born on September 22, 1995, she is known for her bunny teeth and outstanding visuals and strong vocals. Despite being the oldest member, she is the member wherein everyone in TWICE has to look after due to her clumsiness. Nayeon’s silly and jolly attitude overshadows her intelligence. She’s the first member of TWICE to debut solo with her successful single, “POP!”, creating a viral dance sensation internationally with the confusing hand choreography. As of writing this, she has released two (2) EPs, one (1) feature, and one (1) cover song. '
    },
    'YOO JEONGYEON': {
      information:
        'Yoo Jeongyeon is the lead vocalist of TWICE and the second oldest. Her birthday is on November 1, 1996. She is known for her silly antics when it comes to her members. During her rookie days, she is known as a “girl crush” and a clean freak. When TWICE was asked in an interview about who had more of a parental role, they mentioned Jeongyeon. Although her vocals are impressive, it is not appreciated enough as she is not given the opportunity to belt. Following her sister’s steps, just this year, she got an acting role. She works great on TV, especially variety shows with her funny personality and silly antics. She’s also a member known to volunteer and donate to charities whenever she can. '
    },
    'HIRAI MOMO': {
        information:
            'Hirai Momo is the Main dancer, sub-vocalist, and sub-rapper. She is the oldest Japanese member of TWICE, born on November 8, 1996. She shines because of her shine and captivating moves. Momo is known as one of, if not, the best dancer of 3rd generation K-pop. While she is serious and focused on stage, behind the scenes, she is a loud person around her closest friends. Her sarcastic yet caring personality creates a perfect harmony with her members. She can be perceived as shy and introverted in interviews. On July 26, 2023, she made a Japanese debut, along with her other two (2) Japanese members, forming a Japanese subunit called “MISAMO”. As of today, they have released 2 EPs, one (1) single, and an upcoming full album.'
    },
    'MINATOZAKI SANA': {
        information:
            'Minatozaki Sana is a sub-vocalist of TWICE. She is the second oldest Japanese member, born on December 29, 1996. She is known for her iconic line “Shy, shy, shy” and many other lines that went viral during her rookie days. Her cheerful and affectionate personality makes her the most lovable member of TWICE---since she’s an only child, she finds her members as her sisters. Out of everyone in TWICE, she is the most sentimental member. Despite being a Japanese member, she has mastered Korean and is one of the most fluent in her group. Her visuals gave her multiple brand deals including Graff, one of the most luxury brands in the world. She is also one of the members of “MISAMO”. '
    },
    'PARK JIHYO': {
        information:
            'Park Jihyo is the Leader and Main vocalist of TWICE. She is born on Febuary 1, 1997. Nowadays, she is mostly known for her strong stage presence and her ability to interact with the crowd as much as she can. She is also known to have one of, if not, the most powerful vocals in the group and in 3rd generation K-pop. This is the result of her ten-year training at JYPE. Twenty years ago, she started training at a young age of seven (7) years old. She has one of, if not, the longest training period in K-pop, making her the most respectable idol in the industry. Along with Jeongyeon, she is one of the most caring members in the group. She is, said by the members, the glue of the group. She’s the second member in TWICE to make a solo debut on August 18, 2023 with an EP titled, “ZONE”.'
    },
    'MIYOUI MINA': {
        information: 
            'Myoui Mina is the Main dancer and Sub-vocalist of the group. She is the youngest of the Japanese members, born on March 24, 1997. She is known for her black swan-like visuals and has a resemblance of a penguin with the way that she walks. Her dancing goes unnoticed with her soft but precise movements. She is the member that has great memory when it comes to choreography. During the early days, she is known to have a shy and introverted personality, but it is revealed that she usually talks more. Mina is also known for having a soft voice, she barely raises her voice and if she did, it would come off as funny and surprising for the members. Her sultry stage presence makes her stand out in performances. Along with Momo and Sana, she is a member of “MISAMO”.'
    },
    'KIM DAHYUN': {
        information:
            'Kim Dahyun is the Lead rapper and Sub-vocalist of TWICE. She is born on May 28, 1998. She is mostly known for her TV personality, the fun and energetic personality on screen. She is also known to be one of the most talented in the group; she can play the piano, the guitar, the drums and is the third member that has the most writing credits. During her rookie days, she had always been the most energetic member on camera but as time passed by, she has become more reserved, just like behind the scenes, embracing her true self. Dahyun is the member that always gives update to ONCEs everyday and always gives encouragement messages. She is the first member to debut as an actor with the movie “You Are The Apple Of My Eye”. She has multiple shows and movies upcoming despite already having a busy schedule as a group.'
    },
    'SON CHAEYOUNG': {
        information:
            'Son Chaeyoung is the Main rapper and Sub-vocalist of the group. She is born on April 23, 1999. She is known for having a creative and unique style in the K-pop industry. Like Dahyun, she also has a passion for music and has the most song credits in TWICE. While she wants to be perceived as cool, her members still see her as a cute member. Along with Sana, she’s also a sentimental member and is known to send “I love you”s in their group chat. She has always been an advocate for people being theirselves and being unique. Continuing her passion and love for music, she’s the fourth member to make a solo debut just recently. “Lil fantasy vol. 1” was released on September 12, 2025. Her album is internationally loved by the general public with her unique take on sounds.'
    },
    'CHOU TZUYU': {
        information:
            'Chou Tzuyu is the Lead dancer, Sub-vocalist, and the Center of the group. She is the youngest in the group, born on June 14, 1999. During her rookie days, she’s considered as the sarcastic one or the savage one of TWICE. Similar to Mina, she can be perceived as the reserved one in the group but in recent content, she’s one of the loudest and funniest in the group. After a decade, she is still considered as the baby of the group. She is also the only Taiwanese member of the group. After ten years of performing, she only recently performed in her home country, making it emotional for TWICE, ONCEs, and Taiwanese people alike. Tzuyu is the third member to make a solo debut on June 6, 2024, with her EP titled, “AboutTzu”. As of writing this, she has a feature song called “Blink” with Corbyn Besson of the group “Why Don’t We”.'
    }
  };

    members.forEach(member => {
        member.addEventListener('click', () => {
            const name = member.dataset.name;
            const imgElement = member.querySelector('.member-pics img');

        dialogName.textContent = name;
        infoText.textContent = Info[name]?.information || 'Information coming soon.';

        if (imgElement) {
      dialogImage.src = imgElement.src;
      dialogImage.alt = name;
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

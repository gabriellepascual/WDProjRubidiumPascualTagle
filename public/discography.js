document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('albums');
  const buttons = document.querySelectorAll('.layout-switcher [data-layout]');
  const albums = document.querySelectorAll('#albums .album');
  
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
      if (container.classList.contains('album--vinyl')) {
        albums.forEach(a => a.classList.remove('active'));
        album.classList.add('active');
      }
    });
  });
});

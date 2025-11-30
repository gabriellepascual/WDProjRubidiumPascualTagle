
  document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('albums');
    const buttons = document.querySelectorAll('.layout-switcher [data-layout]');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        container.classList.remove('album--grid', 'album--vinyl');
        container.classList.add(`album--${btn.dataset.layout}`);
      });
    });
  });


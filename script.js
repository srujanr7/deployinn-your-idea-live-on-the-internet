const toggle = document.querySelector('.menu');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const deploy = document.querySelector('.deploy');

if (deploy) {
  deploy.addEventListener('click', () => {
    deploy.textContent = 'Deploying…';
    deploy.disabled = true;

    setTimeout(() => {
      document.querySelector('.toast-title').textContent =
        'Deployed successfully!';

      document.querySelector('.toast-copy').textContent =
        'Your demo link is ready to share.';

      deploy.textContent = '✓ Live!';
      deploy.style.background = '#42c553';
      deploy.style.color = '#151515';
    }, 900);
  });
}
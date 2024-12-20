console.log('Install.js loaded');
const butInstall = document.getElementById('buttonInstall');
window.addEventListener('beforeinstallprompt', (event) => {  // this one is not being triggered
  console.log('👍', 'beforeinstallprompt', event);
  window.deferredPrompt = event; // It's not happenong. Stash the event so it can be triggered later on the button event.
  butInstall.classList.toggle('hidden', false);
});
butInstall.addEventListener('click', async () => {  //button click event
  console.log('👍', 'butInstall-clicked');
  const promptEvent = window.deferredPrompt;  // it did not work without this line
  console.log(window, 'promptEvent', promptEvent);
  if (!promptEvent) { // The deferred prompt isn't available.
    console.log('👎', 'no prompted event');
    return;
  }
  promptEvent.prompt(); //download the app
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
  console.log('👍', 'user accepted the install prompt');
});
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
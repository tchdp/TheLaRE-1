var vrHomePage = vRViewPlayer('#meiayeshadocs', {
    image: 'mei.jpg',
    is_stereo: false,
    is_autopan_off: true,
});
window.addEventListener('load', vrHomePage);

vrHomePage.on('ready', function(events){
  vrHomePage.addHotspot('creating-hotspot-1', {
    pitch: -15,
    yaw: -100,
    radius: 0.10,
    distance: 1
  });
});

!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: false,
      loop: 'all',
      order: 'list',
      theme: '#b7daff',
      preload: 'none',
      mutex: true,
      audio: [
        {
          name: '月色雨雪色之间，你是第三种绝色',
          artist: '十指流玉',
          url: 'https://cdn.jsdelivr.net/gh/wishdq/wishdq.github.io@master/aplayer/music/1.mp3',
          cover: '//p2.music.126.net/xYzP49uwP-JFR9U2JpdVQw==/109951163322250690.jpg?param=90y90'
        }
      ]
    });
  }
})();
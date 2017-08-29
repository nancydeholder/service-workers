if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./ServiceWorker.js').then(function(registration) {
      console.log('ServiceWorker register successful');
    }, function(err) {
      console.log('ServiceWorker fail');
    });
  });
}

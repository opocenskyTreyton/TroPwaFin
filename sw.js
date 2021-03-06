const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// a list of local resources we always want to be cached
const PRECACHE_URLS = [
  'index.html',
  './', //Alias for index.html
  'css/style.css',
  'js/main.js',
  'images/todo-icon-128.png',
  'images/todo-icon-144.png',
  'images/todo-icon-152.png',
  'images/todo-icon-192.png',
  'images/todo-icon-196maskable.png',
  'images/todo-icon-256.png',
  'images/todo-icon-512.png',
  'sw.js'
  ];

// the install handler takes care of precaching our resources as directed
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(PRECACHE).then(function(cache){
      return cache.addAll(PRECACHE_URLS);
    })
  );
});

// the activate handler
self.addEventListener('activate', event => {
  console.log('Service worker activating . . .');
});

// the fetch handler
self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});

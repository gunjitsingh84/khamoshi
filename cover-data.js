/* Load the preserved original cover synchronously before the flipbook renders. */
(function(){
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'cover-data-original.js?v=3', false);
    xhr.send(null);
    if (xhr.status >= 200 && xhr.status < 300 && xhr.responseText) {
      (0, eval)(xhr.responseText);
    }
  } catch (e) {}
})();

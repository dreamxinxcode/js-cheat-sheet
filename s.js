const doShortly = function(callback, delay, data) {
  setTimeout(callback(data), delay);
};

doShortly(() => {console.log(data)}, 5000, 'helloooo');

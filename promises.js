const cleanRoom = new Promise((resolve, reject) => {
  let isClean = true;

  if (isClean) {
    resolve('clean');
  } else {
    reject('not clean');
  }
});

cleanRoom
  .then((res) => {
    console.log('Room is', res);
  })
  .catch((err) => {
    console.log('Room is', err);
  });

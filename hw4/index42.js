const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://api.netflix.com/catalog/titles/movies/70111470",
  },
  {
    width: 150,
    height: 200,
    url: "http://api.netflix.com/catalog/titles/movies/70111471",
  },
  {
    width: 300,
    height: 200,
    url: "http://api.netflix.com/catalog/titles/movies/70111472",
  },
  {
    width: 425,
    height: 150,
    url: "http://api.netflix.com/catalog/titles/movies/70111473",
  },
];

const getUrlWithMaxSquare = (films) => {
  return films.reduce((maxSize, { width, height, url }) => {
    const videoSquare = width * height;

    if (maxSize === Math.max(videoSquare)) {
      maxSize.map(url);
    }

    return [url];
  });
};

console.log(getUrlWithMaxSquare(boxarts));

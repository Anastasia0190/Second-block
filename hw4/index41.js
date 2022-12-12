const videos = [
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
];

const getIdAndTitle = (films) => {
  return films.reduce((result, { id, title }) => {
    result[id] = title;

    return result;
  }, {});
};

console.log(getIdAndTitle(videos));

const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '6ef6629e7ce125b22f53b6ae1cc90d6d',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};

export default apiConfig;

document.addEventListener('DOMContentLoaded', async () => {
  const movieList = document.getElementById('movie-list');

  try {
    const movies = await MovieAPI.getMovies();

    movies.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      movieList.appendChild(li);
    });
  } catch (error) {
    movieList.innerHTML = '<li>เกิดข้อผิดพลาดในการโหลดข้อมูล</li>';
  }
});

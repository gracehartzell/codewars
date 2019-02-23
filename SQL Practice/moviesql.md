SELECT title, COUNT(aud_mov.movie_id) FROM aud_mov JOIN movies ON aud_mov.movie_id = movies.movie_id GROUP BY aud_movie.id, movies.movie_id ORDER BY COUNT(aud_mov.movie_id) DESC; 


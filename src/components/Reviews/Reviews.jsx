import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'api/api';
import { Item, Title, Text } from 'components/Reviews/Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetchReviews(movieId)
        .then(reviews => {
          return reviews.results;
        })
        .then(reviews => {
          const reviewList = reviews.map(({ id, author, content }) => {
            const review = {};

            review.id = id;
            review.author = author;
            review.content = content;

            return review;
          });
          return reviewList;
        })
        .then(reviewList => {
          setMovieReviews(reviewList);
        });
    }, 500);
  }, [movieId]);

  return (
    <ul>
      {movieReviews.map(review => {
        return (
          <Item key={review.id}>
            <Title>{review.author}</Title>
            <Text>{review.content}</Text>
          </Item>
        );
      })}
    </ul>
  );
};

export default Reviews;

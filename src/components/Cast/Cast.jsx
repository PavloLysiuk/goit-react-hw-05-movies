import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from 'api/api';
import {
  Image,
  List,
  Item,
  Blank,
  InfoWrapper,
  Person,
  Character,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [, setPending] = useState(false);

  useEffect(() => {
    setPending(true);

    setTimeout(() => {
      fetchCast(movieId)
        .then(credit => {
          return credit.cast;
        })
        .then(cast => {
          const actorsCollection = cast.map(
            ({ id, profile_path, name, character }) => {
              const actor = {};

              actor.id = id;
              actor.profile_path = profile_path;
              actor.name = name;
              actor.character = character;

              return actor;
            }
          );
          return actorsCollection;
        })
        .then(actorsCollection => {
          setMovieCast(actorsCollection);
        })
        .finally(setPending(false));
    }, 500);
  }, [movieId]);
  return (
    <List>
      {movieCast.map(actor => {
        return (
          <Item key={actor.id}>
            {actor.profile_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <Blank>No foto</Blank>
            )}
            <InfoWrapper>
              <Person>{actor.name}</Person>
              <Character>Character: {actor.character}</Character>
            </InfoWrapper>
          </Item>
        );
      })}
    </List>
  );
};

export default Cast;

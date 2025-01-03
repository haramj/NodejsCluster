import movies from '../database/movie';

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_: any, { id }: any) => {
      return movies.filter(movie => movie.id === id)[0];
    }
  },
  Mutation: {
    addMovie: (_: any, { name, rating }: any) => {
      // 영화 제목 중복 검사
      if (movies.find(movie => movie.name === name)) return null;
      
      // 데이터베이스에 추가
      const newMovie = {
        id: movies.length + 1,
        name,
        rating
      };
      movies.push(newMovie);
      return newMovie;
    }
  }
};

export default resolvers;
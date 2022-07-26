import React from 'react';

import { useParams } from 'react-router-dom';

import PageHeader from '../components/page-header/PageHeader';

import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';

function Catalog() {
  const { category } = useParams();

  console.log(category);
  return (
    <>
      <PageHeader>{category === cate.movie ? 'Movies' : 'TV Series'}</PageHeader>
      <div className="container">
        <MovieGrid category={category} />
      </div>
    </>
  );
}

export default Catalog;

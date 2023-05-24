import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CardsList } from '../../components/cards/cards-list';
import { EmptyState } from '../../components/empty-state/empty-state';
import { Layout } from '../../components/layout/layout';
import { Loader } from '../../components/loader/loader';

import { getAllFavorites } from '../../components/cards/card/card.helper';

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { loading: isLoadingCatalogues } = useSelector((state) => state.catalogues);
  const { loading: isLoadingVacancies } = useSelector((state) => state.vacancies);

  const isLoading = isLoadingCatalogues || isLoadingVacancies;

  const allFavorites = getAllFavorites();

  useEffect(() => {
    setFavorites(allFavorites);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Layout>
        {!!favorites.length ? <CardsList vacanciesIds={favorites} /> : <EmptyState />}
      </Layout>
    </>
  );
};

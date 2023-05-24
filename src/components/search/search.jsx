import React, { useState } from 'react';
import { Button } from '@mantine/core';

import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';

import { useStyles } from '../filters/styled-filters';
import { SearchInput, SearchWrapper } from './styled-search';

export const Search = ({ onChangeSearch }) => {
  const [searchTitle, setSearchTitle] = useState('');
  const { classes } = useStyles();

  const handleSearchTitle = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSubmit = () => {
    onChangeSearch({ keyword: searchTitle });
  };

  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchInput
        data-elem='search-input'
        placeholder='Введите название вакансии'
        type='search'
        value={searchTitle}
        onChange={handleSearchTitle}
      />
      <Button
        data-elem='search-button'
        classNames={{ root: classes.searchButton }}
        type='button'
        onClick={handleSubmit}
      >
        Поиск
      </Button>
    </SearchWrapper>
  );
};

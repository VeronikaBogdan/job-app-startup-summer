import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '@mantine/form';
import { Box, Button, Group, NumberInput, Select, Title } from '@mantine/core';

import { ReactComponent as Cross } from '../../assets/svg/cross.svg';
import { ReactComponent as Down } from '../../assets/svg/down.svg';

import { useStyles } from './styled-filters';
import { getVacancies } from '../../store/reducers/vacancies';
import { getTokenFromStorage } from '../../utils/token-getter';

export const Filters = ({ onChangeFilteredData }) => {
  const dispatch = useDispatch();

  const initialValues = {
    catalogues: '',
    payment_from: '',
    payment_to: '',
  };

  const form = useForm({
    initialValues: initialValues,
  });
  const [isDropdown, toggleDropdown] = useState(false);
  const { catalogues: industries } = useSelector((state) => state.catalogues);

  const { classes } = useStyles();

  const classNames = {
    input: classes.input,
    rightSection: classes.rightSection,
    control: classes.control,
    label: classes.label,
  };

  const token = getTokenFromStorage('access_token');

  const handleDropdown = () => {
    toggleDropdown(!isDropdown);
  };

  const handleSubmit = (filteredData) => {
    onChangeFilteredData(filteredData);
  };

  const handleReset = () => {
    form.reset();
    dispatch(getVacancies({ initialValues, token }));
  };

  return (
    <Box className={classes.form}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group align='flex-start' position='apart'>
          <Title order={3} className={classes.formTitle}>
            Фильтры
          </Title>
          <Button
            classNames={{ root: classes.reset, rightIcon: classes.rightIcon }}
            rightIcon={<Cross />}
            onClick={handleReset}
          >
            Сбросить все
          </Button>
        </Group>
        <Select
          data-elem='industry-select'
          classNames={{
            ...classNames,
            item: classes.input,
            wrapper: isDropdown ? classes.industryWrapperFocus : classes.industryWrapper,
            rightSection: classes.industryRightSection,
          }}
          data={industries.map((industry) => {
            return { value: industry.key, label: industry.title_trimmed };
          })}
          rightSection={<Down />}
          placeholder='Выберете отрасль'
          label='Отрасль'
          onDropdownOpen={handleDropdown}
          onDropdownClose={handleDropdown}
          {...form.getInputProps('catalogues', { type: 'input' })}
        />
        <NumberInput
          data-elem='salary-from-input'
          classNames={{ ...classNames, wrapper: classes.wrapper }}
          placeholder='От'
          min={0}
          type='number'
          label='Оклад'
          {...form.getInputProps('payment_from')}
        />
        <NumberInput
          data-elem='salary-to-input'
          classNames={{ ...classNames, wrapper: classes.wrapper }}
          placeholder='До'
          min={0}
          type='number'
          {...form.getInputProps('payment_to')}
        />
        <Button data-elem='search-button' type='submit' classNames={{ root: classes.submitButton }}>
          Применить
        </Button>
      </form>
    </Box>
  );
};

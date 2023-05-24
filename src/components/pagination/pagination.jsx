import { Pagination } from '@mantine/core';

import { LIMIT_TOTAL } from '../../app-constants';

import { useStyles } from './styled-pagination';

export const PaginationComponent = ({ value, onChange, total }) => {
  const { classes } = useStyles();

  return (
    <Pagination
      classNames={{ control: classes.control }}
      sx={classes.root}
      value={value}
      onChange={onChange}
      total={total > LIMIT_TOTAL ? LIMIT_TOTAL : total}
      siblings={1}
    />
  );
};

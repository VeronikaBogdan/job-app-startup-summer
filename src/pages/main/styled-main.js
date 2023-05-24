import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  wrapper: {
    width: '100%',

    [`@media (max-width: 900px)`]: {
      margin: 0,
      flexWrap: 'wrap',
    },
  },
}));

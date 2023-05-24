import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  wrapper: {
    width: '100%',
    [`@media (max-width: 900px)`]: {
      margin: 0,
    },
  },
  desktopScreen: {
    [`@media (max-width: 900px)`]: {
      display: 'none',
    },
  },
  mobileScreen: {
    display: 'none',

    [`@media (max-width: 900px)`]: {
      display: 'block',
    },
  },
}));

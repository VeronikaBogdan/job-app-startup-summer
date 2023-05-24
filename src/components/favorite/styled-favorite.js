import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  star: {
    'svg:hover path': {
      fill: theme.colors.blue[2],
      stroke: theme.colors.blue[2],
    },
  },
  starActive: {
    'svg path': {
      fill: theme.colors.blue[1],
      stroke: theme.colors.blue[1],
    },
    'svg:hover path': {
      fill: theme.colors.blue[2],
      stroke: theme.colors.blue[2],
    },
  },
}));

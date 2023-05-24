import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  form: {
    padding: '21px 19px 20px',
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.grey[3]}`,
    borderRadius: '12px',
    marginBottom: '10px',

    form: {
      width: '100%',
    },
  },
  formTitle: {
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px',
    color: theme.colors.grey[7],
    marginBottom: '20px',

    [`@media (max-width: 1060px)`]: {
      marginBottom: 0,
    },

    [`@media (max-width: 900px)`]: {
      fontSize: '18px',
      lineHeight: '18px',
      marginBottom: '10px',
    },
  },
  reset: {
    padding: 0,
    border: 0,
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
    height: '20px',
    color: theme.colors.grey[5],
    backgroundColor: theme.colors.grey[0],

    '&:hover, &:hover path': {
      color: theme.colors.blue[2],
      stroke: theme.colors.blue[2],
      backgroundColor: theme.colors.grey[0],
    },

    '&:active, &:active path': {
      color: theme.colors.blue[1],
      stroke: theme.colors.blue[1],
      backgroundColor: theme.colors.grey[0],
    },

    svg: {
      width: '16px',
      height: '16px',
    },
  },
  rightIcon: {
    marginLeft: '4px',
  },
  label: {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '19px',
    marginTop: '12px',
    marginBottom: '8px',
    color: theme.colors.grey[7],

    [`@media (max-width: 900px)`]: {
      fontSize: '15px',
      lineHeight: '17px',
      marginBottom: '10px',
    },
  },
  input: {
    border: 0,
    borderRadius: '8px',
    height: '40px',
    fontWeight: '400',
    fontSize: '14px',
    padding: '11px',

    ':focus': {
      caretColor: theme.colors.blue[1],
    },

    '&[data-hovered]': {
      '&:hover': {
        backgroundColor: theme.colors.blue[5],
      },
    },

    '&[data-selected]': {
      '&:hover': {
        backgroundColor: theme.colors.blue[1],
      },
    },
  },
  wrapper: {
    border: `1px solid ${theme.colors.grey[4]}`,
    borderRadius: '8px',
    marginBottom: '8px',

    '&:hover, &:focus-within': {
      border: `1px solid ${theme.colors.blue[1]}`,
    },
  },
  industryWrapper: {
    borderRadius: '8px',
    marginBottom: '8px',
    border: `1px solid ${theme.colors.grey[4]}`,

    '&:hover': {
      border: `1px solid ${theme.colors.blue[1]}`,
    },
  },
  industryWrapperFocus: {
    borderRadius: '8px',
    marginBottom: '8px',

    '&:focus, &:focus-within': {
      border: `1px solid ${theme.colors.blue[1]}`,
    },

    '&:focus-within svg': {
      transform: 'rotate(180deg)',
      transition: 'transform 0.5s',

      path: {
        stroke: theme.colors.blue[1],
        strokeWidth: '1',
      },
    },
  },
  rightSection: {
    borderRadius: '8px',
    margin: '5px 5px 5px 0',

    svg: {
      stroke: theme.colors.grey[5],
      cursor: 'pointer',
    },

    'svg:hover': {
      stroke: theme.colors.blue[2],
    },

    'svg:active': {
      stroke: theme.colors.blue[1],
    },
  },
  industryRightSection: {
    ...useStyles.rightSection,
    pointerEvents: 'none',
    marginRight: '5px',
  },
  control: {
    border: 0,
    padding: 0,
    margin: '1px 1px -3px',
    stroke: theme.colors.blue[2],

    svg: {
      width: '14px',
      height: '14px',
    },

    path: {
      fill: theme.colors.grey[5],
      strokeWidth: '1',
    },

    '&:not(:disabled):hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.grey[0],
    },
  },
  submitButton: {
    width: '100%',
    height: '40px',
    borderRadius: '8px',
    marginTop: '12px',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',

    '&:hover': {
      backgroundColor: theme.colors.blue[2],
    },

    '&:active': {
      backgroundColor: theme.colors.blue[0],
    },
  },
  searchButton: {
    height: '32px',
    borderRadius: '8px',

    '&:hover': {
      backgroundColor: theme.colors.blue[2],
    },

    '&:active': {
      backgroundColor: theme.colors.blue[0],
    },
    [`@media (max-width: 500px)`]: {
      padding: '3px 8px',
    },
  },
}));

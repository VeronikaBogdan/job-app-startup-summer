import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    padding: '23px 20px 19px 22px',
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.grey[3]}`,
    borderRadius: '12px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.blue[5],
      transition: 'background-color 0.2s',
    },

    '&:active': {
      opacity: '0.7',
    },

    [`@media (max-width: 768px)`]: {
      padding: '15px',
    },
  },
  vacancyCard: {
    padding: '23px 20px 19px 22px',
    backgroundColor: theme.colors.grey[0],
    border: `1px solid ${theme.colors.grey[3]}`,
    borderRadius: '12px',
    maxWidth: '773px',
    width: '100%',
    alignSelf: 'center',
    marginLeft: '-14px',
    marginTop: '2px',

    [`@media (max-width: 768px)`]: {
      marginLeft: 0,
    },
  },
  professionTitle: {
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px',
    color: theme.colors.blue[1],
    marginTop: '1px',
    marginLeft: '1px',

    [`@media (max-width: 768px)`]: {
      fontSize: '17px',
      lineHeight: '21px',
    },
  },
  vacancyProfessionTitle: {
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '34px',
    color: theme.colors.grey[7],

    [`@media (max-width: 768px)`]: {
      fontSize: '23px',
      lineHeight: '29px',
    },

    [`@media (max-width: 500px)`]: {
      fontSize: '17px',
      lineHeight: '23px',
    },
  },
  paymentText: {
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '20px',
    color: theme.colors.grey[7],
    marginTop: '-2px',
    marginLeft: '1px',

    [`@media (max-width: 768px)`]: {
      fontSize: '13px',
      lineHeight: '17px',
    },
  },
  vacancyPaymentText: {
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px',
    marginLeft: '1px',
    marginTop: '5px',

    [`@media (max-width: 768px)`]: {
      fontSize: '16px',
      lineHeight: '16px',
    },

    [`@media (max-width: 500px)`]: {
      fontSize: '13px',
      lineHeight: '13px',
    },
  },
  workText: {
    marginLeft: '-3px',
    marginTop: '-2px',

    [`@media (max-width: 768px)`]: {
      fontSize: '13px',
      lineHeight: '17px',
      marginLeft: 0,
    },
  },
  vacancyWorkText: {
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '20px',
    marginLeft: '-3px',
    marginTop: '6px',

    [`@media (max-width: 768px)`]: {
      fontSize: '16px',
      lineHeight: '16px',
      marginLeft: 0,
    },

    [`@media (max-width: 500px)`]: {
      fontSize: '13px',
      lineHeight: '13px',
    },
  },
  locationText: {
    alignItems: 'center',
    marginTop: '-3px',
    marginLeft: '9px',

    [`@media (max-width: 768px)`]: {
      fontSize: '13px',
      lineHeight: '17px',
    },
  },
  vacancyLocationText: {
    fontWeight: '400',
    fontSize: '16px',
    marginTop: '4px',
    marginLeft: '9px',

    [`@media (max-width: 768px)`]: {
      fontSize: '16px',
      lineHeight: '16px',
    },

    [`@media (max-width: 500px)`]: {
      fontSize: '13px',
      lineHeight: '13px',
    },
  },
  locationWrapper: {
    alignItems: 'center',

    [`@media (max-width: 768px)`]: {
      svg: {
        width: '16px',
        height: '16px',
      },
    },
  },
  infoGroup: {
    [`@media (max-width: 768px)`]: {
      gap: '7px',
    },
  },
}));

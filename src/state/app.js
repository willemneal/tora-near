import { StateUtils } from '../utils/state-utils';
import { initNear } from './near';

const initialState = {
  app: {
    soldOut: true,
    oneCount: 1,
    manyCount: 3,
    revealMisfits: JSON.parse(localStorage.getItem('revealMisfits')) || {},
    misfitsArray: [],
    linkDropArray: [],
    urlIpfs: '',
    tokensLeft: undefined,
    modalOpen: false,
  },
  near: {
    initialized: false,
  },
  price: {
    oneNFT: 6.5,
    manyNFTS: 19.5,
    tokenStorageFormat: 0,
    discountFormat: 0,
  },
};

export const { appStore, AppProvider } = StateUtils(initialState, 'app');

export const onAppMount =
  () =>
  async ({ dispatch }) => {
    dispatch(initNear());
  };

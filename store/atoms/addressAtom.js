import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

const { persitAtom } = recoilPersist();

const addressState = atom({
  key: 'addressState',
  default: {
    city: '',
    neighborhood: '',
    street: '',
    number: '',
    complement: '',
  }, 
  effects_UNSTABLE: [persitAtom]
});

export default addressState;
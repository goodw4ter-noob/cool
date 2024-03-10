import { APP_ROUTES_NAMES } from '../../shared/types/constants';
import { IPanel } from './main.types';

export const ALLOWED_IMAGE_EXTENTIONS = ['jpg', 'jpeg', 'png'];

export const COLLAPSE_PANELS: IPanel[] = [
  {
    active: true,
    disabled: false,
    name: 'Настройки',
    content: 'Личный кабинет',
    url: APP_ROUTES_NAMES.profile,
  },
  {
    active: false,
    disabled: true,
    name: 'This is panel header 2',
    content: '',
    url: '',
  },
  {
    active: false,
    disabled: false,
    name: 'This is panel header 3',
    content: '',
    url: '',
  },
];

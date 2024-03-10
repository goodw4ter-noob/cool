import { NzUploadFile } from 'ng-zorro-antd/upload';
import { ModelToForm } from '../../shared/types/types';

export interface IPanel {
  active: boolean;
  disabled: boolean;
  name: string;
  content: string;
  url: string;
}

export type IUploadedFile = NzUploadFile & {
  preview?: string | ArrayBuffer | null;
};

export interface UserInfoModel {
  name: string,
  surname: string,
  secondName: string | null,
  email: string,
  role: string,
  login: string,
}

export type UserInfoForm = ModelToForm<UserInfoModel>;

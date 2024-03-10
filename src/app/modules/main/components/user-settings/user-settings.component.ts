import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { ALLOWED_IMAGE_EXTENTIONS } from '../../types/main.constants';
import { UserInfoForm } from '../../types/main.types';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss',
})
export class UserSettingsComponent implements OnInit {
  public formGroup!: FormGroup<UserInfoForm>;

  public fileList: NzUploadFile[] = [];
  public allowedExtentions = ALLOWED_IMAGE_EXTENTIONS;

  public previewImage: string | undefined = '';
  public previewVisible = false;

  constructor(private readonly fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public handleBeforeUpload = (
    file: NzUploadFile
  ): boolean => {
    const newFile: NzUploadFile = {
      uid: file.uid,
      name: file.name,
      status: 'done',
      url: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663463603_54-mykaleidoscope-ru-p-nyu-york-stolitsa-mira-dostoprimechatelnos-58.jpg',
    };

    this.fileList = [...this.fileList, newFile];

    return false;
  };

  public handlePreview(file: NzUploadFile): void {
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  }

  private initForm(): void {
    const form = this.fb.group<UserInfoForm>({
      name: this.fb.control('', { nonNullable: true }),
      email: this.fb.control('', { nonNullable: true }),
      login: this.fb.control('', { nonNullable: true }),
      role: this.fb.control('', { nonNullable: true }),
      secondName: this.fb.control(null),
      surname: this.fb.control('', { nonNullable: true }),
    });

    this.formGroup = form;
  }
}

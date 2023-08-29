import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { validatePassword } from '@/lib/form-utils';
import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import REGEX from '@/constant/regex';
import { AUTH_LINKS } from '@/content/header';
import AuthSection from '@/pages/auth/components/AuthSection';

type LoginForm = {
  name: string;
  username: string;
  email: string;
  password: string;
  repeat_password: string;
};

export default function LoginPage() {
  //#region  //*=========== Form ===========
  const methods = useForm<LoginForm>({
    mode: 'onTouched',
  });
  const { handleSubmit, watch } = methods;
  const password = watch('password');
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========

  const onSubmit = (data: LoginForm) => {
    // !TODO: connect to API's
    logger({ data });
  };
  //#endregion  //*======== Form Submit ===========

  return (
    <Layout>
      <Seo templateTitle='Daftar' />

      <AuthSection>
        <AuthSection.Graphic
          prompt='Daftar'
          description='Bergabunglah untuk menjadi Pahlawan SIP dan bersama-sama membersihkan dunia dari kabut jahat Syubhat!'
        >
          <NextImage
            src='/images/auth/daftar.png'
            width={1440}
            height={1440}
            alt='Membersihkan dunia dari kabut jahat Syubhat!'
            className='absolute bottom-20 md:bottom-0 w-11/12 md:w-4/5 pointer-events-none select-none left-1/2 -translate-x-1/2 '
            imgClassName='w-full'
          />
        </AuthSection.Graphic>

        <AuthSection.Form>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-6 layout md:w-2/3'
            >
              <AuthSection.FormTitle
                title='Buat Akun Baru'
                description='Isi data diri kamu dengan lengkap dan benar ya Pahlawan. Data ini akan digunakan untuk identitas kamu saat bertualang membersihkan kabut jahat Syubhat di dunia.'
              />

              <div className='space-y-6'>
                <Input
                  id='name'
                  label='Nama Lengkap'
                  validation={{ required: 'Nama Lengkap wajib diisi' }}
                  placeholder='Masukkan Nama Lengkap'
                />
                <Input
                  id='username'
                  label='Username'
                  validation={{ required: 'Username wajib diisi' }}
                  placeholder='Masukkan Username'
                />

                <Input
                  id='email'
                  label='Alamat Email'
                  validation={{
                    required: 'Alamat Email wajib diisi',
                    pattern: {
                      value: REGEX.EMAIL,
                      message: 'Alamat Email tidak valid',
                    },
                  }}
                  placeholder='Masukkan Alamat Email'
                />
                <PasswordInput
                  id='password'
                  label='Kata Sandi'
                  validation={{
                    required: 'Kata Sandi wajib diisi',
                    validate: validatePassword,
                  }}
                  placeholder='Masukkan password baru'
                />
                <PasswordInput
                  id='repeat_password'
                  label='Konfirmasi Kata Sandi'
                  validation={{
                    validate: (value) =>
                      value === password || 'Konfirmasi password tidak sama',
                  }}
                  placeholder='Masukkan konfirmasi password'
                  helperText='Masukkan kembali password baru'
                />
              </div>

              <Button className='w-full justify-center' type='submit'>
                Buat Akun
              </Button>

              <div className='flex gap-2 justify-center flex-wrap'>
                <Typography variant='b3'>Sudah Punya Akun?</Typography>
                <PrimaryLink
                  href={AUTH_LINKS.login.href}
                  size='sm'
                  className='text-sm'
                >
                  Masuk
                </PrimaryLink>
              </div>
            </form>
          </FormProvider>
        </AuthSection.Form>
      </AuthSection>
    </Layout>
  );
}

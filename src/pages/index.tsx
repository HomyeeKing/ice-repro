import { useState } from 'react';
import logo from '@/assets/logo.png';
import styles from './index.module.css';
import store from '@/store';
import { defineDataLoader, useData } from 'ice';
import { updateModelName } from '@/services';
import { isWeb } from '@/const';

export default function IndexPage() {
  const [hudongModel] = store.useModel('model');
  return (
    <div className={styles.app}>
      <header x-if={1}>
        <img src={logo} alt='logo' />
        <p>{hudongModel.name}</p>
      </header>
      <main>
        <button
          className={styles.button}
          type='button'
          onClick={() => {
            store.getModelDispatchers('model').setName('bar');
          }}
        >
          click to update name
        </button>
        <p>
          <a
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            Learn React
          </a>
          {' | '}
          <a
            href='https://v3.ice.work/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            Learn ice.js
          </a>
        </p>
      </main>
    </div>
  );
}

export const dataLoader = defineDataLoader(async () => {
  if (isWeb) {
    console.log('[page dataloader] run in client');
    return 1;
  } else {
    console.log('[page dataloader] run in server');
    return 2;
  }
});

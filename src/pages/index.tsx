import { useState } from 'react';
import styles from './index.module.css';
import Mod1 from '@/components/mod1';
import Mod2 from '@/components/mod2';

export default function IndexPage() {
  const [data, setdata] = useState();
  console.log('data', data);
  return (
    <div className={styles.app}>
      <Mod2 setData={setdata} />
    </div>
  );
}

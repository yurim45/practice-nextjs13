// fetch를 사용한 CSR: client component로 만들어주고 import해서 사용
'use client';
import React, { useEffect, useState } from 'react';
import styles from './meowArticle.module.css';

export default function MeowArticle() {
  const [text, setText] = useState('데이터 준비중..');

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return (
    <>
      <article className={styles.article}>{text}</article>
    </>
  );
}

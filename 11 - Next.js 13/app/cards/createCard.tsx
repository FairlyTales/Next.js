'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import PocketBase from 'pocketbase'

export default function CreateCard() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async () => {
    const db = new PocketBase('http://127.0.0.1:8090');

    await db.collection('cards').create({
      title,
      content,
    });

    setContent('');
    setTitle('');

    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>Create a new card</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">
        Create card
      </button>
    </form>
  );
}

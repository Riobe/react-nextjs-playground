'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RefsAndEffects() {
  const [data, setData] = useState<string>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:8000');
        console.log(response);
        setData(JSON.stringify(response, null, 2));
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [data]);

  return (
    <div>
      <h1>Page</h1>
      <pre>{data}</pre>
    </div>
  );
}

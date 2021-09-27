import { useEffect, useState } from 'react';

import client from './graphql/client';
import { GET_TEXTS } from './graphql/queries';

type connectTextsProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  content: {
    html: string;
  };
  validity: string;
};

const App = () => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const getPages = async () => {
      const { connectTexts } = await client.request(GET_TEXTS);

      setTexts(connectTexts);
    };

    getPages();
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
      {texts?.map(({ title, content }: connectTextsProps) => (
        <>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
        </>
      ))}
    </div>
  );
};

export default App;

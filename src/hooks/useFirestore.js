import { useEffect, useState } from 'react';
import { db } from '../utils/firebase';

const useFirestore = (type) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = db
      .collection(type)
      .orderBy('createdAt', 'asc')
      .onSnapshot((qs) => {
        const res = [];
        qs.docs.forEach((doc) => {
          res.push(doc.data());
        });
        setDocs(res);
      });

    return () => unsub();
  }, [type]);

  return docs;
};

export default useFirestore;

import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const useFirestore = (type) => {
	const [docs, setDocs] = useState([]);
	useEffect(() => {
		console.log("working");
		const unsub = db
			.collection("gallery")
			.orderBy("createdAt", "asc")
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

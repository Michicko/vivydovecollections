import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosFetch = (url) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async (baseUrl) => {
			try {
				setLoading(true);
				const res = await axios.get(baseUrl);
				if (res.data.status === "success") {
          setLoading(false);
          setError(null);
          setData(res.data.data.data);
          
				}
			} catch (error) {
        setLoading(false);
        setData(null);
        if (error.response) {
					setError(error.response.data.message);
        } else if (error.request) {
					setError("Something went wrong, try again later");
        } else {
          setError(error.message);
        }
			}
		};
    fetchData(url);
    
	}, [url]);

	return { loading, error, data };
};

export default useAxiosFetch;

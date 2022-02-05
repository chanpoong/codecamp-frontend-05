import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  return (
    <>
      <div>openAPI 연습</div>
      <img src={dogUrl} />
    </>
  );
}

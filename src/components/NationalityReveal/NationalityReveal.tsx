import { useState } from "react";

type Country = {
  country_id: string;
  probability: number;
};

type NationalityResponse = {
  name: string;
  count: number;
  country: Country[];
};

export const NationalityReveal = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState<NationalityResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!name.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        `https://api.nationalize.io/?name=${name}`
      );
      const data: NationalityResponse = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Request Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Determining nationality by name</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleClick}>Define</button>

      {loading && <p>Loading...</p>}

      {result && (
        <div>
          <p><strong>Name:</strong> {result.name}</p>
          <p>
            <strong>Data analyzed:</strong> {result.count}
          </p>

          <h4>Possible nationalities:</h4>
          <ul>
            {result.country.map((item) => (
              <li key={item.country_id}>
                {item.country_id} — {(item.probability * 100).toFixed(1)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

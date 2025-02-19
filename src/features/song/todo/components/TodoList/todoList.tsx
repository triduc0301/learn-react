import { useEffect, useState } from "react";
import { fetchData } from "../../../../../api/api";

interface TodoList {
  id: string;
  description: string;
}

export default function Todo() {
  const [items, setItems] = useState<TodoList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData<TodoList[]>("/todoList")
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items.map(({ id, description }) => (
          <li key={id}>{description}</li>
        ))}
      </ul>
    </div>
  );
}

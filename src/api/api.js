export const API = "http://localhost";

//Универсальный запрос на сервер, который будет возвращать данные по переданным параметрам, реализовать в отдельной функции
// parametr = {endpoint: "/get_...", objectId: 1}
// Если objectId не передан, то значит это обычный get запрос без динамического параметра

export function getApiData(parametr) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { endpoint, objectId } = parametr;

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const response = await fetch(
          `${API}/${endpoint}${objectId ? `/${objectId}` : ""}`
        );
        if (!response.ok) {
          throw new Error(response.error);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { data, loading, error };
}

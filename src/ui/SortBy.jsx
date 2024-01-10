import { useStore } from "../contexts/ShopContext";

function SortBy({ value, values, sortBy }) {
  const { setSearchParams, searchParams } = useStore();
  const test = searchParams.get(value) || values[0];

  return (
    <div className="flex items-center justify-center gap-1">
      <span>{sortBy}</span>
      <select
        onChange={(e) =>
          setSearchParams(
            (prev) => {
              prev.set(value, e.target.value);
              return prev;
            },
            { replace: true },
          )
        }
        value={test}
      >
        {values.map((val) => (
          <option value={val} key={val}>
            {val.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBy;

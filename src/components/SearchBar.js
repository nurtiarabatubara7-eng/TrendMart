export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Cari produk..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
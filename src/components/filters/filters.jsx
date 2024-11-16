export const Filters = ({ filters, clickFunc }) => {
  return filters.map((filter) => (
    <button onClick={clickFunc} id={filter.id} key={filter.id}>
      {filter.name}
    </button>
  ));
};

const FilterInput = ({ onChangeFilter, filter }) => {
  // const onChange = e => {
  //   const value = e.target.value;

  //   onChangeFilter(value);
  // };
  return (
    <form action="">
      <input
        type="text"
        placeholder="Filter by name..."
        name="filter"
        onInput={onChangeFilter}
        value={filter}
      />
    </form>
  );
};

export default FilterInput;

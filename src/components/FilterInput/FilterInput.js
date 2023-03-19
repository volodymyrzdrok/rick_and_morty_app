import SearchSvg from 'assets/icons/SearchSvg';
import s from './FilterInput.module.scss';

const FilterInput = ({ onChangeFilter, filter }) => {
  // const onChange = e => {
  //   const value = e.target.value;

  //   onChangeFilter(value);
  // };
  return (
    <form action="" className={s.form}>
      <input
        className={s.input}
        type="text"
        placeholder="Filter by name..."
        name="filter"
        onInput={onChangeFilter}
        value={filter}
      />
      <SearchSvg className={s.svg} />
    </form>
  );
};

export default FilterInput;

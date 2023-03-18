import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#9DFD88', '#00B0C8', '#165C4C', '#fff', '#89FF6E']}
      />
    </div>
  );
};
export default Loader;

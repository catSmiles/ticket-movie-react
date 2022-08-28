// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Loading(props) {
  const isLoading = useSelector((state) => state.LoadingReducer);
  console.log('isLoading: ', isLoading);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99,
          }}
        >
          <div className="text-4xl text-white">Loading...</div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

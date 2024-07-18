import MobileStoreButton from 'react-mobile-store-button';

const iOSUrl = '';
const androidUrl = '';

const Download = ({ type }) => {
  return (
    <div>
      <MobileStoreButton
        store={type}
        url={type === 'ios' ? iOSUrl : androidUrl}
        linkProps={{ title: type + ' Store Button' }}
      />
    </div>
  );
};
export default Download;
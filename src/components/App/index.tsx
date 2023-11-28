import TopPanel from '../TopPanel';
import { ErrorAlert } from '../ErrorAlert';
import { Identity } from '../Identity';
import InfoModal from '../InfoModal';
import Map from '../Map';

const App = () => {
  return (
    <>
      <Map></Map>
      <TopPanel></TopPanel>
      <ErrorAlert></ErrorAlert>
      <InfoModal></InfoModal>
    </>
  );
};

export default App;

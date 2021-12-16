import { useGetBobDataFromIframe } from '../../hooks/useGetBobDataFromIFrame/useGetBobDataFromIframe';

import { BobComponentsDataContext } from './BobComponentsData.consts';
import { useBobComponentsData } from './BobComponentsData.hooks';

const BobComponentsDataProvider: React.FC = ({ children }) => {
  const { state, setState } = useGetBobDataFromIframe();

  return (
    <BobComponentsDataContext.Provider value={state}>
      {children}
    </BobComponentsDataContext.Provider>
  );
};

export { BobComponentsDataProvider, useBobComponentsData };

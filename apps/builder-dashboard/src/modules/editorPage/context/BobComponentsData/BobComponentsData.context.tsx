import { useGetBobComponentsFromIFrame } from '../../hooks/useGetBuilderComponentsFromIFrame/useGetBuilderComponentsFromIFrame';

import { BobComponentsDataContext } from './BobComponentsData.consts';
import { useBobComponentsData } from './BobComponentsData.hooks';

const BobComponentsDataProvider: React.FC = ({ children }) => {
  const { state, setState } = useGetBobComponentsFromIFrame();

  return (
    <BobComponentsDataContext.Provider value={state}>
      {children}
    </BobComponentsDataContext.Provider>
  );
};

export { BobComponentsDataProvider, useBobComponentsData };

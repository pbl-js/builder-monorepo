import React from 'react';
import { useGetBobDataFromIframe } from '../../hooks/useGetBobDataFromIFrame/useGetBobDataFromIframe';
import { useRegisteredComponents_API } from '../../utils/queries/getRegisteredComponents/hooks';

export const InnerIFrameComunicator = () => {
  // const {} = useGetBobDataFromIframe();
  return null;
};

export const IFrameComunicator = () => {
  const { data: registeredComponentsData } = useRegisteredComponents_API();
  return <>{registeredComponentsData && <InnerIFrameComunicator />}</>;
};

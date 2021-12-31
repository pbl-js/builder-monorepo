import { GetServerSideProps } from 'next';
import { addApolloState, initializeApollo } from '../../app/graphql/client';
import { GET_REGISTERED_COMPONENTS } from './utils/queries/getRegisteredComponents/query';
import { GetRegisteredComponents } from './utils/queries/getRegisteredComponents/types';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const apolloClient = initializeApollo();
    const { error } = await apolloClient.query<GetRegisteredComponents>({
      query: GET_REGISTERED_COMPONENTS,
    });

    if (error) {
      throw new Error(error.message);
    }

    return addApolloState(apolloClient, {
      props: {},
    });
  } catch (err) {
    /**
     * TODO: add proper error logging
     */
    // eslint-disable-next-line no-console
    console.log(err);

    return { props: {} };
  }
};

import { StrapiDraftDataResponse } from '@bob-types';

async function fetchDraft(id: string): Promise<StrapiDraftDataResponse> {
  const draftQuery = `
    query Draft($id: ID){
      draft(id: $id){
        data{
          id
          attributes{
            name
            components{
              data{
                id
                attributes{
                  componentType
                  style
                  jsxName
                  layerName
                  parentId
                  props{
                    __typename
                    ... on ComponentPropPropString {
                      id
                      name
                      valueString
                    }
                    ... on ComponentPropPropNumber {
                      id
                      name
                      valueNumber
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await window.fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      query: draftQuery,
      variables: { id },
    }),
  });

  type JSONResponse = {
    data?: StrapiDraftDataResponse;

    errors?: Array<{ message: string }>;
  };

  const { data, errors }: JSONResponse = await response.json();

  if (response.ok) {
    const draft = data?.draft;
    if (draft) {
      return data;
    } else {
      return Promise.reject(new Error(`No draft with the id "${id}"`));
    }
  } else {
    const error = new Error(
      errors?.map((e) => e.message).join('\n') ?? 'unknown'
    );
    return Promise.reject(error);
  }
}

export { fetchDraft };

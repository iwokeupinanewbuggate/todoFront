// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type ChangeStatus = {
  TaskId: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ListItem = {
  __typename?: 'ListItem';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  workSection: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createList: ListItem;
  deleteTask: ListItem;
  editTask: ListItem;
  uptadeStatus: ListItem;
};


export type MutationCreateListArgs = {
  input: ListInfo;
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditTaskArgs = {
  input: EditTaskInfo;
};


export type MutationUptadeStatusArgs = {
  input: ChangeStatus;
};

export type Query = {
  __typename?: 'Query';
  getList: Array<ListItem>;
};

export type EditTaskInfo = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  workSection?: InputMaybe<Scalars['String']['input']>;
};

export type ListInfo = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  workSection: Scalars['String']['input'];
};

export type GetListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListQuery = { __typename?: 'Query', getList: Array<{ __typename?: 'ListItem', _id: string, title: string, description: string, workSection: string, status: boolean, createdAt: any }> };

export type EditTaskMutationVariables = Exact<{
  input: EditTaskInfo;
}>;


export type EditTaskMutation = { __typename?: 'Mutation', editTask: { __typename?: 'ListItem', _id: string, title: string, description: string, workSection: string, status: boolean, createdAt: any } };

export type DeleteTaskMutationVariables = Exact<{
  deleteTaskId: Scalars['ID']['input'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'ListItem', _id: string, title: string, description: string, workSection: string, status: boolean, createdAt: any } };

export type CreateListMutationVariables = Exact<{
  input: ListInfo;
}>;


export type CreateListMutation = { __typename?: 'Mutation', createList: { __typename?: 'ListItem', _id: string, title: string, description: string, workSection: string, status: boolean, createdAt: any } };

export type UptadeStatusMutationVariables = Exact<{
  input: ChangeStatus;
}>;


export type UptadeStatusMutation = { __typename?: 'Mutation', uptadeStatus: { __typename?: 'ListItem', _id: string, title: string, description: string, workSection: string, status: boolean, createdAt: any } };


export const GetListDocument = gql`
    query GetList {
  getList {
    _id
    title
    description
    workSection
    status
    createdAt
  }
}
    `;
export type GetListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetListQuery, GetListQueryVariables>
    } & TChildProps;
export function withGetList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetListQuery,
  GetListQueryVariables,
  GetListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetListQuery, GetListQueryVariables, GetListProps<TChildProps, TDataName>>(GetListDocument, {
      alias: 'getList',
      ...operationOptions
    });
};

/**
 * __useGetListQuery__
 *
 * To run a query within a React component, call `useGetListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListQuery(baseOptions?: Apollo.QueryHookOptions<GetListQuery, GetListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListQuery, GetListQueryVariables>(GetListDocument, options);
      }
export function useGetListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListQuery, GetListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListQuery, GetListQueryVariables>(GetListDocument, options);
        }
export function useGetListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListQuery, GetListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListQuery, GetListQueryVariables>(GetListDocument, options);
        }
export type GetListQueryHookResult = ReturnType<typeof useGetListQuery>;
export type GetListLazyQueryHookResult = ReturnType<typeof useGetListLazyQuery>;
export type GetListSuspenseQueryHookResult = ReturnType<typeof useGetListSuspenseQuery>;
export type GetListQueryResult = Apollo.QueryResult<GetListQuery, GetListQueryVariables>;
export const EditTaskDocument = gql`
    mutation EditTask($input: editTaskInfo!) {
  editTask(input: $input) {
    _id
    title
    description
    workSection
    status
    createdAt
  }
}
    `;
export type EditTaskMutationFn = Apollo.MutationFunction<EditTaskMutation, EditTaskMutationVariables>;
export type EditTaskProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditTaskMutation, EditTaskMutationVariables>
    } & TChildProps;
export function withEditTask<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditTaskMutation,
  EditTaskMutationVariables,
  EditTaskProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditTaskMutation, EditTaskMutationVariables, EditTaskProps<TChildProps, TDataName>>(EditTaskDocument, {
      alias: 'editTask',
      ...operationOptions
    });
};

/**
 * __useEditTaskMutation__
 *
 * To run a mutation, you first call `useEditTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTaskMutation, { data, loading, error }] = useEditTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditTaskMutation(baseOptions?: Apollo.MutationHookOptions<EditTaskMutation, EditTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditTaskMutation, EditTaskMutationVariables>(EditTaskDocument, options);
      }
export type EditTaskMutationHookResult = ReturnType<typeof useEditTaskMutation>;
export type EditTaskMutationResult = Apollo.MutationResult<EditTaskMutation>;
export type EditTaskMutationOptions = Apollo.BaseMutationOptions<EditTaskMutation, EditTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($deleteTaskId: ID!) {
  deleteTask(id: $deleteTaskId) {
    _id
    title
    description
    workSection
    status
    createdAt
  }
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;
export type DeleteTaskProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>
    } & TChildProps;
export function withDeleteTask<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
  DeleteTaskProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTaskMutation, DeleteTaskMutationVariables, DeleteTaskProps<TChildProps, TDataName>>(DeleteTaskDocument, {
      alias: 'deleteTask',
      ...operationOptions
    });
};

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      deleteTaskId: // value for 'deleteTaskId'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const CreateListDocument = gql`
    mutation CreateList($input: listInfo!) {
  createList(input: $input) {
    _id
    title
    description
    workSection
    status
    createdAt
  }
}
    `;
export type CreateListMutationFn = Apollo.MutationFunction<CreateListMutation, CreateListMutationVariables>;
export type CreateListProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateListMutation, CreateListMutationVariables>
    } & TChildProps;
export function withCreateList<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateListMutation,
  CreateListMutationVariables,
  CreateListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateListMutation, CreateListMutationVariables, CreateListProps<TChildProps, TDataName>>(CreateListDocument, {
      alias: 'createList',
      ...operationOptions
    });
};

/**
 * __useCreateListMutation__
 *
 * To run a mutation, you first call `useCreateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListMutation, { data, loading, error }] = useCreateListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateListMutation(baseOptions?: Apollo.MutationHookOptions<CreateListMutation, CreateListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateListMutation, CreateListMutationVariables>(CreateListDocument, options);
      }
export type CreateListMutationHookResult = ReturnType<typeof useCreateListMutation>;
export type CreateListMutationResult = Apollo.MutationResult<CreateListMutation>;
export type CreateListMutationOptions = Apollo.BaseMutationOptions<CreateListMutation, CreateListMutationVariables>;
export const UptadeStatusDocument = gql`
    mutation UptadeStatus($input: ChangeStatus!) {
  uptadeStatus(input: $input) {
    _id
    title
    description
    workSection
    status
    createdAt
  }
}
    `;
export type UptadeStatusMutationFn = Apollo.MutationFunction<UptadeStatusMutation, UptadeStatusMutationVariables>;
export type UptadeStatusProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UptadeStatusMutation, UptadeStatusMutationVariables>
    } & TChildProps;
export function withUptadeStatus<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UptadeStatusMutation,
  UptadeStatusMutationVariables,
  UptadeStatusProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UptadeStatusMutation, UptadeStatusMutationVariables, UptadeStatusProps<TChildProps, TDataName>>(UptadeStatusDocument, {
      alias: 'uptadeStatus',
      ...operationOptions
    });
};

/**
 * __useUptadeStatusMutation__
 *
 * To run a mutation, you first call `useUptadeStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUptadeStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uptadeStatusMutation, { data, loading, error }] = useUptadeStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUptadeStatusMutation(baseOptions?: Apollo.MutationHookOptions<UptadeStatusMutation, UptadeStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UptadeStatusMutation, UptadeStatusMutationVariables>(UptadeStatusDocument, options);
      }
export type UptadeStatusMutationHookResult = ReturnType<typeof useUptadeStatusMutation>;
export type UptadeStatusMutationResult = Apollo.MutationResult<UptadeStatusMutation>;
export type UptadeStatusMutationOptions = Apollo.BaseMutationOptions<UptadeStatusMutation, UptadeStatusMutationVariables>;
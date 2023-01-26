import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSONObject: any;
};

export type Attachment = {
  __typename?: 'Attachment';
  cid?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentDisposition?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['JSONObject']>;
  href?: Maybe<Scalars['String']>;
  httpHeaders?: Maybe<Scalars['JSONObject']>;
  path?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
};

export type AttachmentInput = {
  cid?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  contentDisposition?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  encoding?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  headers?: InputMaybe<Scalars['JSONObject']>;
  href?: InputMaybe<Scalars['String']>;
  httpHeaders?: InputMaybe<Scalars['JSONObject']>;
  path?: InputMaybe<Scalars['String']>;
  raw?: InputMaybe<Scalars['String']>;
};

export type Block = {
  __typename?: 'Block';
  data?: Maybe<Scalars['JSONObject']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type BlockInput = {
  data?: InputMaybe<Scalars['JSONObject']>;
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Editor = {
  __typename?: 'Editor';
  blocks?: Maybe<Array<Maybe<Block>>>;
  time?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['String']>;
};

export type EditorInput = {
  blocks?: InputMaybe<Array<InputMaybe<BlockInput>>>;
  time?: InputMaybe<Scalars['Float']>;
  version?: InputMaybe<Scalars['String']>;
};

export type GeneratePdfInput = {
  filename?: InputMaybe<Scalars['String']>;
  payload?: InputMaybe<Scalars['JSONObject']>;
  projectId?: InputMaybe<Scalars['String']>;
  templateId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type GeneratePdfOutput = {
  __typename?: 'GeneratePdfOutput';
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ListQueryInput = {
  back?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
  next?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  query?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whereArrayContains?: InputMaybe<Scalars['JSONObject']>;
  whereArrayContainsAny?: InputMaybe<Scalars['JSONObject']>;
  whereEqual?: InputMaybe<Scalars['JSONObject']>;
  whereGreaterThan?: InputMaybe<Scalars['JSONObject']>;
  whereGreaterThanOrEqual?: InputMaybe<Scalars['JSONObject']>;
  whereIn?: InputMaybe<Scalars['JSONObject']>;
  whereLessThan?: InputMaybe<Scalars['JSONObject']>;
  whereLessThanOrEqual?: InputMaybe<Scalars['JSONObject']>;
};

export type Mail = {
  __typename?: 'Mail';
  bcc?: Maybe<Array<Maybe<Scalars['String']>>>;
  bccUids?: Maybe<Array<Maybe<Scalars['String']>>>;
  cc?: Maybe<Array<Maybe<Scalars['String']>>>;
  ccUids?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  delivery?: Maybe<MailDelivery>;
  from?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['JSONObject']>;
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<MailMessage>;
  project?: Maybe<Project>;
  replyTo?: Maybe<Scalars['String']>;
  template?: Maybe<MailTemplate>;
  to?: Maybe<Array<Maybe<Scalars['String']>>>;
  toUids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MailAttachment = {
  __typename?: 'MailAttachment';
  cid?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentDisposition?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type MailAttachmentInput = {
  cid?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  contentDisposition?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  encoding?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

export type MailDelivery = {
  __typename?: 'MailDelivery';
  attempts?: Maybe<Scalars['Float']>;
  endTime?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  info?: Maybe<MailDeliveryInfo>;
  leaseExpireTime?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type MailDeliveryInfo = {
  __typename?: 'MailDeliveryInfo';
  accepted?: Maybe<Array<Maybe<Scalars['String']>>>;
  messageId?: Maybe<Scalars['String']>;
  pending?: Maybe<Array<Maybe<Scalars['String']>>>;
  rejected?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MailInput = {
  bcc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bccUids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ccUids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from?: InputMaybe<Scalars['String']>;
  headers?: InputMaybe<Scalars['JSONObject']>;
  locationId?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<MailMessageInput>;
  replyTo?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<MailTemplateInput>;
  to?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  toUids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userId?: InputMaybe<Scalars['String']>;
};

export type MailListQueryInput = {
  back?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
  next?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  projectId?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userId?: InputMaybe<Scalars['String']>;
  whereArrayContains?: InputMaybe<Scalars['JSONObject']>;
  whereArrayContainsAny?: InputMaybe<Scalars['JSONObject']>;
  whereEqual?: InputMaybe<Scalars['JSONObject']>;
  whereGreaterThan?: InputMaybe<Scalars['JSONObject']>;
  whereGreaterThanOrEqual?: InputMaybe<Scalars['JSONObject']>;
  whereIn?: InputMaybe<Scalars['JSONObject']>;
  whereLessThan?: InputMaybe<Scalars['JSONObject']>;
  whereLessThanOrEqual?: InputMaybe<Scalars['JSONObject']>;
};

export type MailMessage = {
  __typename?: 'MailMessage';
  alternatives?: Maybe<Array<Maybe<MailAttachment>>>;
  attachments?: Maybe<Array<Maybe<MailAttachment>>>;
  bcc?: Maybe<Array<Maybe<Scalars['String']>>>;
  cc?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['JSONObject']>;
  html?: Maybe<MailAttachment>;
  inReplyTo?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Scalars['String']>>>;
  replyTo?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  text?: Maybe<MailAttachment>;
  to?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MailMessageInput = {
  alternatives?: InputMaybe<Array<InputMaybe<MailAttachmentInput>>>;
  attachments?: InputMaybe<Array<InputMaybe<MailAttachmentInput>>>;
  bcc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cc?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  date?: InputMaybe<Scalars['String']>;
  encoding?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  headers?: InputMaybe<Scalars['JSONObject']>;
  html?: InputMaybe<Scalars['String']>;
  inReplyTo?: InputMaybe<Scalars['String']>;
  messageId?: InputMaybe<Scalars['String']>;
  references?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  replyTo?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MailTemplate = {
  __typename?: 'MailTemplate';
  data?: Maybe<Scalars['JSONObject']>;
  name?: Maybe<Scalars['String']>;
};

export type MailTemplateInput = {
  data?: InputMaybe<Scalars['JSONObject']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProject?: Maybe<Project>;
  addTemplate?: Maybe<Template>;
  addToken?: Maybe<Token>;
  addUser?: Maybe<User>;
  deleteProject?: Maybe<Project>;
  deleteTemplate?: Maybe<Template>;
  deleteToken?: Maybe<Token>;
  deleteUser?: Maybe<User>;
  editProject?: Maybe<Project>;
  editTemplate?: Maybe<Template>;
  editToken?: Maybe<Token>;
  editUser?: Maybe<User>;
  generatePdf?: Maybe<GeneratePdfOutput>;
  sendTemplateEmail?: Maybe<SendTemplateEmailOutput>;
};


export type MutationAddProjectArgs = {
  data?: InputMaybe<ProjectInput>;
};


export type MutationAddTemplateArgs = {
  data?: InputMaybe<TemplateInput>;
};


export type MutationAddTokenArgs = {
  data?: InputMaybe<TokenInput>;
};


export type MutationAddUserArgs = {
  data?: InputMaybe<UserInput>;
};


export type MutationDeleteProjectArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteTemplateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteTokenArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationEditProjectArgs = {
  data?: InputMaybe<ProjectInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationEditTemplateArgs = {
  data?: InputMaybe<TemplateInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationEditTokenArgs = {
  data?: InputMaybe<TokenInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationEditUserArgs = {
  data?: InputMaybe<UserInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationGeneratePdfArgs = {
  data?: InputMaybe<GeneratePdfInput>;
};


export type MutationSendTemplateEmailArgs = {
  data?: InputMaybe<SendTemplateEmailInput>;
};

export type Project = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<Maybe<Token>>>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<User>;
};

export type ProjectInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  mail?: Maybe<Array<Mail>>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  template?: Maybe<Template>;
  templates?: Maybe<Array<Template>>;
  token?: Maybe<Token>;
  tokens?: Maybe<Array<Token>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryMailArgs = {
  data?: InputMaybe<ListQueryInput>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProjectsArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryTemplateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryTemplatesArgs = {
  data?: InputMaybe<TemplateListInput>;
};


export type QueryTokenArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryTokensArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  data?: InputMaybe<ListQueryInput>;
};

export type SendTemplateEmailInput = {
  attachments?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  data?: InputMaybe<Scalars['JSONObject']>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filters?: InputMaybe<UserFiltersInput>;
  frameId?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
  subject?: InputMaybe<Scalars['String']>;
  templateId?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SendTemplateEmailOutput = {
  __typename?: 'SendTemplateEmailOutput';
  id?: Maybe<Scalars['String']>;
};

export type Template = {
  __typename?: 'Template';
  amp?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  editor?: Maybe<Editor>;
  fetch?: Maybe<Scalars['JSONObject']>;
  footer?: Maybe<Template>;
  frame?: Maybe<Template>;
  head?: Maybe<Scalars['String']>;
  header?: Maybe<Template>;
  html?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  partial?: Maybe<Scalars['Boolean']>;
  project?: Maybe<Project>;
  routes?: Maybe<Scalars['JSONObject']>;
  sampleData?: Maybe<Scalars['JSONObject']>;
  subject?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<User>;
};

export type TemplateInput = {
  amp?: InputMaybe<Scalars['String']>;
  attachments?: InputMaybe<Array<InputMaybe<AttachmentInput>>>;
  description?: InputMaybe<Scalars['String']>;
  editor?: InputMaybe<EditorInput>;
  fetch?: InputMaybe<Scalars['JSONObject']>;
  footerId?: InputMaybe<Scalars['String']>;
  frameId?: InputMaybe<Scalars['String']>;
  head?: InputMaybe<Scalars['String']>;
  headerId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  partial?: InputMaybe<Scalars['Boolean']>;
  projectId?: InputMaybe<Scalars['String']>;
  routes?: InputMaybe<Scalars['JSONObject']>;
  sampleData?: InputMaybe<Scalars['JSONObject']>;
  subject?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type TemplateListInput = {
  back?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
  next?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<Scalars['String']>;
  orderDirection?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  projectId?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  whereArrayContains?: InputMaybe<Scalars['JSONObject']>;
  whereArrayContainsAny?: InputMaybe<Scalars['JSONObject']>;
  whereEqual?: InputMaybe<Scalars['JSONObject']>;
  whereGreaterThan?: InputMaybe<Scalars['JSONObject']>;
  whereGreaterThanOrEqual?: InputMaybe<Scalars['JSONObject']>;
  whereIn?: InputMaybe<Scalars['JSONObject']>;
  whereLessThan?: InputMaybe<Scalars['JSONObject']>;
  whereLessThanOrEqual?: InputMaybe<Scalars['JSONObject']>;
};

export type Token = {
  __typename?: 'Token';
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<User>;
};

export type TokenInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  active?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastName?: Maybe<Scalars['String']>;
  lastOnline?: Maybe<Scalars['String']>;
  online?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<User>;
};

export type UserFiltersInput = {
  projectId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<Scalars['String']>;
};

export type AddProjectMutationVariables = Exact<{
  data: ProjectInput;
}>;


export type AddProjectMutation = { __typename?: 'Mutation', addProject?: { __typename?: 'Project', id?: string | null } | null };

export type DeleteProjectMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject?: { __typename?: 'Project', id?: string | null } | null };

export type EditProjectMutationVariables = Exact<{
  id: Scalars['String'];
  data: ProjectInput;
}>;


export type EditProjectMutation = { __typename?: 'Mutation', editProject?: { __typename?: 'Project', id?: string | null } | null };

export type FindProjectQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id?: string | null } | null };

export type ListProjectsQueryVariables = Exact<{
  data: ListQueryInput;
}>;


export type ListProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id?: string | null }> | null };

export type AddTemplateMutationVariables = Exact<{
  data: TemplateInput;
}>;


export type AddTemplateMutation = { __typename?: 'Mutation', addTemplate?: { __typename?: 'Template', id?: string | null } | null };

export type DeleteTemplateMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTemplateMutation = { __typename?: 'Mutation', deleteTemplate?: { __typename?: 'Template', id?: string | null } | null };

export type EditTemplateMutationVariables = Exact<{
  id: Scalars['String'];
  data: TemplateInput;
}>;


export type EditTemplateMutation = { __typename?: 'Mutation', editTemplate?: { __typename?: 'Template', id?: string | null } | null };

export type FindTemplateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindTemplateQuery = { __typename?: 'Query', template?: { __typename?: 'Template', id?: string | null, tags?: Array<string | null> | null, description?: string | null, routes?: any | null, name?: string | null, subject?: string | null, type?: string | null, html?: string | null, head?: string | null, text?: string | null, amp?: string | null, partial?: boolean | null, sampleData?: any | null, createdAt?: string | null, editor?: { __typename?: 'Editor', time?: number | null, version?: string | null, blocks?: Array<{ __typename?: 'Block', data?: any | null, type?: string | null } | null> | null } | null, header?: { __typename?: 'Template', id?: string | null, subject?: string | null, description?: string | null, html?: string | null } | null, footer?: { __typename?: 'Template', id?: string | null, subject?: string | null, description?: string | null, html?: string | null } | null, frame?: { __typename?: 'Template', id?: string | null, subject?: string | null, description?: string | null, html?: string | null, head?: string | null, header?: { __typename?: 'Template', id?: string | null, subject?: string | null, description?: string | null, html?: string | null } | null, footer?: { __typename?: 'Template', id?: string | null, subject?: string | null, description?: string | null, html?: string | null } | null } | null, attachments?: Array<{ __typename?: 'Attachment', cid?: string | null, filename?: string | null, content?: string | null, path?: string | null, encoding?: string | null, raw?: string | null, href?: string | null, httpHeaders?: any | null, contentDisposition?: string | null, contentType?: string | null, headers?: any | null } | null> | null } | null };

export type ListTemplatesQueryVariables = Exact<{
  data: TemplateListInput;
  withHtml: Scalars['Boolean'];
}>;


export type ListTemplatesQuery = { __typename?: 'Query', templates?: Array<{ __typename?: 'Template', id?: string | null, name?: string | null, routes?: any | null, description?: string | null, subject?: string | null, type?: string | null, text?: string | null, html?: string | null, head?: string | null, tags?: Array<string | null> | null, partial?: boolean | null, createdAt?: string | null, header?: { __typename?: 'Template', id?: string | null, subject?: string | null, description?: string | null, html?: string | null } | null, footer?: { __typename?: 'Template', id?: string | null, subject?: string | null, description?: string | null, html?: string | null } | null, frame?: { __typename?: 'Template', id?: string | null, subject?: string | null, description?: string | null, html?: string | null } | null }> | null };

export type AddTokenMutationVariables = Exact<{
  data: TokenInput;
}>;


export type AddTokenMutation = { __typename?: 'Mutation', addToken?: { __typename?: 'Token', id?: string | null } | null };

export type DeleteTokenMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTokenMutation = { __typename?: 'Mutation', deleteToken?: { __typename?: 'Token', id?: string | null } | null };

export type EditTokenMutationVariables = Exact<{
  id: Scalars['String'];
  data: TokenInput;
}>;


export type EditTokenMutation = { __typename?: 'Mutation', editToken?: { __typename?: 'Token', id?: string | null } | null };

export type FindTokenQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindTokenQuery = { __typename?: 'Query', token?: { __typename?: 'Token', id?: string | null } | null };

export type ListTokensQueryVariables = Exact<{
  data: ListQueryInput;
}>;


export type ListTokensQuery = { __typename?: 'Query', tokens?: Array<{ __typename?: 'Token', id?: string | null }> | null };

export type AddUserMutationVariables = Exact<{
  data: UserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'User', id?: string | null } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', id?: string | null } | null };

export type EditUserMutationVariables = Exact<{
  id: Scalars['String'];
  data: UserInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser?: { __typename?: 'User', id?: string | null } | null };

export type FindUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type ListUsersQueryVariables = Exact<{
  data: ListQueryInput;
}>;


export type ListUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id?: string | null }> | null };

export type GeneratePdfMutationVariables = Exact<{
  data: GeneratePdfInput;
}>;


export type GeneratePdfMutation = { __typename?: 'Mutation', generatePdf?: { __typename?: 'GeneratePdfOutput', id?: string | null, url?: string | null } | null };

export type SendTemplateEmailMutationVariables = Exact<{
  data: SendTemplateEmailInput;
}>;


export type SendTemplateEmailMutation = { __typename?: 'Mutation', sendTemplateEmail?: { __typename?: 'SendTemplateEmailOutput', id?: string | null } | null };


export const AddProjectDocument = gql`
    mutation addProject($data: ProjectInput!) {
  addProject(data: $data) {
    id
  }
}
    `;
export const DeleteProjectDocument = gql`
    mutation deleteProject($id: String!) {
  deleteProject(id: $id) {
    id
  }
}
    `;
export const EditProjectDocument = gql`
    mutation editProject($id: String!, $data: ProjectInput!) {
  editProject(id: $id, data: $data) {
    id
  }
}
    `;
export const FindProjectDocument = gql`
    query findProject($id: String!) {
  project(id: $id) {
    id
  }
}
    `;
export const ListProjectsDocument = gql`
    query listProjects($data: ListQueryInput!) {
  projects(data: $data) {
    id
  }
}
    `;
export const AddTemplateDocument = gql`
    mutation addTemplate($data: TemplateInput!) {
  addTemplate(data: $data) {
    id
  }
}
    `;
export const DeleteTemplateDocument = gql`
    mutation deleteTemplate($id: String!) {
  deleteTemplate(id: $id) {
    id
  }
}
    `;
export const EditTemplateDocument = gql`
    mutation editTemplate($id: String!, $data: TemplateInput!) {
  editTemplate(id: $id, data: $data) {
    id
  }
}
    `;
export const FindTemplateDocument = gql`
    query findTemplate($id: String!) {
  template(id: $id) {
    id
    editor {
      time
      version
      blocks {
        data
        type
      }
    }
    tags
    description
    routes
    name
    subject
    type
    html
    head
    text
    amp
    header {
      id
      subject
      description
      html
    }
    footer {
      id
      subject
      description
      html
    }
    frame {
      id
      subject
      description
      html
      head
      header {
        id
        subject
        description
        html
      }
      footer {
        id
        subject
        description
        html
      }
    }
    attachments {
      cid
      filename
      content
      path
      encoding
      raw
      href
      httpHeaders
      contentDisposition
      contentType
      headers
    }
    partial
    sampleData
    createdAt
  }
}
    `;
export const ListTemplatesDocument = gql`
    query listTemplates($data: TemplateListInput!, $withHtml: Boolean!) {
  templates(data: $data) {
    id
    name
    routes
    description
    subject
    type
    text
    html @include(if: $withHtml)
    head @include(if: $withHtml)
    header @include(if: $withHtml) {
      id
      subject
      description
      html
    }
    footer @include(if: $withHtml) {
      id
      subject
      description
      html
    }
    frame @include(if: $withHtml) {
      id
      subject
      description
      html
    }
    tags
    partial
    createdAt
  }
}
    `;
export const AddTokenDocument = gql`
    mutation addToken($data: TokenInput!) {
  addToken(data: $data) {
    id
  }
}
    `;
export const DeleteTokenDocument = gql`
    mutation deleteToken($id: String!) {
  deleteToken(id: $id) {
    id
  }
}
    `;
export const EditTokenDocument = gql`
    mutation editToken($id: String!, $data: TokenInput!) {
  editToken(id: $id, data: $data) {
    id
  }
}
    `;
export const FindTokenDocument = gql`
    query findToken($id: String!) {
  token(id: $id) {
    id
  }
}
    `;
export const ListTokensDocument = gql`
    query listTokens($data: ListQueryInput!) {
  tokens(data: $data) {
    id
  }
}
    `;
export const AddUserDocument = gql`
    mutation addUser($data: UserInput!) {
  addUser(data: $data) {
    id
  }
}
    `;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: String!) {
  deleteUser(id: $id) {
    id
  }
}
    `;
export const EditUserDocument = gql`
    mutation editUser($id: String!, $data: UserInput!) {
  editUser(id: $id, data: $data) {
    id
  }
}
    `;
export const FindUserDocument = gql`
    query findUser($id: String!) {
  user(id: $id) {
    id
    firstName
    lastName
    email
  }
}
    `;
export const ListUsersDocument = gql`
    query listUsers($data: ListQueryInput!) {
  users(data: $data) {
    id
  }
}
    `;
export const GeneratePdfDocument = gql`
    mutation generatePdf($data: GeneratePdfInput!) {
  generatePdf(data: $data) {
    id
    url
  }
}
    `;
export const SendTemplateEmailDocument = gql`
    mutation sendTemplateEmail($data: SendTemplateEmailInput!) {
  sendTemplateEmail(data: $data) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addProject(variables: AddProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddProjectMutation>(AddProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addProject', 'mutation');
    },
    deleteProject(variables: DeleteProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteProjectMutation>(DeleteProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteProject', 'mutation');
    },
    editProject(variables: EditProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EditProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<EditProjectMutation>(EditProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'editProject', 'mutation');
    },
    findProject(variables: FindProjectQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindProjectQuery>(FindProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findProject', 'query');
    },
    listProjects(variables: ListProjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListProjectsQuery>(ListProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listProjects', 'query');
    },
    addTemplate(variables: AddTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddTemplateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddTemplateMutation>(AddTemplateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addTemplate', 'mutation');
    },
    deleteTemplate(variables: DeleteTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteTemplateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteTemplateMutation>(DeleteTemplateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteTemplate', 'mutation');
    },
    editTemplate(variables: EditTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EditTemplateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<EditTemplateMutation>(EditTemplateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'editTemplate', 'mutation');
    },
    findTemplate(variables: FindTemplateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTemplateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTemplateQuery>(FindTemplateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findTemplate', 'query');
    },
    listTemplates(variables: ListTemplatesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListTemplatesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListTemplatesQuery>(ListTemplatesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listTemplates', 'query');
    },
    addToken(variables: AddTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddTokenMutation>(AddTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addToken', 'mutation');
    },
    deleteToken(variables: DeleteTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteTokenMutation>(DeleteTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteToken', 'mutation');
    },
    editToken(variables: EditTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EditTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<EditTokenMutation>(EditTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'editToken', 'mutation');
    },
    findToken(variables: FindTokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTokenQuery>(FindTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findToken', 'query');
    },
    listTokens(variables: ListTokensQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListTokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListTokensQuery>(ListTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listTokens', 'query');
    },
    addUser(variables: AddUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddUserMutation>(AddUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addUser', 'mutation');
    },
    deleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserMutation>(DeleteUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser', 'mutation');
    },
    editUser(variables: EditUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EditUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<EditUserMutation>(EditUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'editUser', 'mutation');
    },
    findUser(variables: FindUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindUserQuery>(FindUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findUser', 'query');
    },
    listUsers(variables: ListUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ListUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListUsersQuery>(ListUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listUsers', 'query');
    },
    generatePdf(variables: GeneratePdfMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GeneratePdfMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GeneratePdfMutation>(GeneratePdfDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'generatePdf', 'mutation');
    },
    sendTemplateEmail(variables: SendTemplateEmailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendTemplateEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendTemplateEmailMutation>(SendTemplateEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendTemplateEmail', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
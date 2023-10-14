export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

/** The information for a Stripe account document. */
export type Account = {
  __typename?: 'Account';
  /** The account ID for the Stripe connect account. */
  accountId?: Maybe<Scalars['String']['output']>;
  /** The bank account tied to the Stripe account. */
  bankAccount?: Maybe<BankAccount>;
  /** When the document was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the document */
  createdBy?: Maybe<User>;
  /** The customer ID for the Stripe. */
  customerId?: Maybe<Scalars['String']['output']>;
  googleToken?: Maybe<Scalars['JSONObject']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The document proving identification of person or company. */
  legalDocument?: Maybe<Scalars['String']['output']>;
  /** The Stripe connect account public key. */
  publishableKey?: Maybe<Scalars['String']['output']>;
  /** The Stripe connect account secret key. */
  secretKey?: Maybe<Scalars['String']['output']>;
  /** When the document was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the document last */
  updatedBy?: Maybe<User>;
  /** The Stripe verification object to check if account is active */
  verification?: Maybe<StripeVerification>;
};

/** The information for a Address document */
export type Address = {
  __typename?: 'Address';
  /** The city information of the address */
  city?: Maybe<Scalars['String']['output']>;
  /** The country information of the address */
  country?: Maybe<Scalars['String']['output']>;
  /** When the job was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the job */
  createdBy?: Maybe<User>;
  /** The full address as a string */
  full?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The latitude of the address */
  lat?: Maybe<Scalars['Float']['output']>;
  /** The longitude of the address */
  lng?: Maybe<Scalars['Float']['output']>;
  /** A Google Places ID for easy lookup */
  placeId?: Maybe<Scalars['String']['output']>;
  /** The state information of the address */
  state?: Maybe<Scalars['String']['output']>;
  /** The street information of the address */
  street?: Maybe<Scalars['String']['output']>;
  /** The unit / PO box information of the address */
  unit?: Maybe<Scalars['String']['output']>;
  /** When the job was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the job last */
  updatedBy?: Maybe<User>;
  /** The zip code of the address */
  zip?: Maybe<Scalars['String']['output']>;
};

/** Editable Address data */
export type AddressInput = {
  /** The city information of the address */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The country information of the address */
  country?: InputMaybe<Scalars['String']['input']>;
  /** The full address as a string */
  full?: InputMaybe<Scalars['String']['input']>;
  /** The latitude of the address */
  lat?: InputMaybe<Scalars['Float']['input']>;
  /** The longitude of the address */
  lng?: InputMaybe<Scalars['Float']['input']>;
  /** A Google Places ID for easy lookup */
  placeId?: InputMaybe<Scalars['String']['input']>;
  /** The state information of the address */
  state?: InputMaybe<Scalars['String']['input']>;
  /** The street information of the address */
  street?: InputMaybe<Scalars['String']['input']>;
  /** The unit / PO box information of the address */
  unit?: InputMaybe<Scalars['String']['input']>;
  /** The zip code of the address */
  zip?: InputMaybe<Scalars['String']['input']>;
};

/** Communication in a notification, personal, and/or urgent form. */
export type Alert = {
  __typename?: 'Alert';
  /** When the alert was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the alert */
  createdBy?: Maybe<User>;
  /** A list of emails who will receive the alert */
  emails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Any errors thrown on delivery */
  errors?: Maybe<AlertErrors>;
  /** A list of filters for the users to be emailed */
  filters?: Maybe<UserFiltersInput>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Override options for each alert type */
  options?: Maybe<AlertOptions>;
  /** When was this alert last triggered */
  payload?: Maybe<Scalars['JSONObject']['output']>;
  /** When the alert is to be sent */
  sendAt?: Maybe<Scalars['String']['output']>;
  /** The success messages from the transaction */
  sent?: Maybe<AlertSent>;
  /** When the alert was sent */
  sentAt?: Maybe<Scalars['String']['output']>;
  /** A list of tags for the alert */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The template being sent out */
  template?: Maybe<Template>;
  /** The types of alerts to send */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** When the alert was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the alert last */
  updatedBy?: Maybe<User>;
  /** A list of IDs for users who will receive the alert */
  userIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AlertErrors = {
  __typename?: 'AlertErrors';
  /** A list of errors sending calls */
  call?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of errors sending email */
  email?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of errors sending feed */
  feed?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of errors sending push notifications */
  push?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of errors sending text messages */
  text?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Editable alert data */
export type AlertInput = {
  /** A list of emails who will receive the alert */
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of filters for the users to be emailed */
  filters?: InputMaybe<UserFilterInput>;
  /** Override options for each alert type */
  options?: InputMaybe<AlertOptionsInput>;
  /** When was this alert last triggered */
  payload?: InputMaybe<Scalars['JSONObject']['input']>;
  /** When the alert is to be sent */
  sendAt?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags for the alert */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The ID of the template to render as email */
  templateId?: InputMaybe<Scalars['String']['input']>;
  /** The types of alerts to send */
  types?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of IDs for users who will receive the alert */
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AlertOptions = {
  __typename?: 'AlertOptions';
  /** Call options */
  call?: Maybe<Scalars['JSONObject']['output']>;
  /** Email message options */
  email?: Maybe<Mail>;
  /** Feed card options */
  feed?: Maybe<Scalars['JSONObject']['output']>;
  /** Push notification options */
  push?: Maybe<Scalars['JSONObject']['output']>;
  /** Slack message options */
  slack?: Maybe<Scalars['JSONObject']['output']>;
  /** Text message options */
  text?: Maybe<Scalars['JSONObject']['output']>;
};

export type AlertOptionsInput = {
  /** Call options */
  call?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Email message options */
  email?: InputMaybe<MailInput>;
  /** Feed card options */
  feed?: InputMaybe<FeedInput>;
  /** Push notification options */
  push?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Slack message options */
  slack?: InputMaybe<SendSlackMessageInput>;
  /** Text message options */
  text?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type AlertSent = {
  __typename?: 'AlertSent';
  /** A list of success messages for sending calls */
  call?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of success messages for sending email */
  email?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of success messages for sending feed */
  feed?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of success messages for sending push notifications */
  push?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of success messages for sending text messages */
  text?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** The information for an email attachment */
export type Attachment = {
  __typename?: 'Attachment';
  cid?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  contentDisposition?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  encoding?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  headers?: Maybe<Scalars['JSONObject']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  httpHeaders?: Maybe<Scalars['JSONObject']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  raw?: Maybe<Scalars['String']['output']>;
};

/** The information for an email attachment */
export type AttachmentInput = {
  cid?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentDisposition?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  encoding?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  headers?: InputMaybe<Scalars['JSONObject']['input']>;
  href?: InputMaybe<Scalars['String']['input']>;
  httpHeaders?: InputMaybe<Scalars['JSONObject']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  raw?: InputMaybe<Scalars['String']['input']>;
};

/** Bank account info from Stripe */
export type BankAccount = {
  __typename?: 'BankAccount';
  /** The account ID of the bank account */
  accountId?: Maybe<Scalars['String']['output']>;
  /** The name of the bank the account is under */
  bankName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** The last 4 digits of the account number */
  last4?: Maybe<Scalars['String']['output']>;
  /** The nickname of the account */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of banking account */
  type?: Maybe<Scalars['String']['output']>;
};

/** The information for a Batch document */
export type Batch = {
  __typename?: 'Batch';
  /** The actions being batched */
  actions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** When the document was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the document */
  createdBy?: Maybe<User>;
  /** The error received, if any, for delivery */
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The status of the Batch */
  status?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Trigger>;
  /** The type of the Batch */
  type?: Maybe<Scalars['String']['output']>;
  /** When the document was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the document last */
  updatedBy?: Maybe<User>;
};

/** Editable Batch data */
export type BatchInput = {
  /** The type of the Batch */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** The information for a Editor document */
export type Block = {
  __typename?: 'Block';
  /** The timestamp of the last change */
  data?: Maybe<Scalars['JSONObject']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** The type of block */
  type?: Maybe<Scalars['String']['output']>;
};

/** The input for a Editor document */
export type BlockInput = {
  /** The timestamp of the last change */
  data?: InputMaybe<Scalars['JSONObject']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  /** The type of block */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** The information for a Component document */
export type Component = {
  __typename?: 'Component';
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the Component */
  name?: Maybe<Scalars['String']['output']>;
};

/** Editable Component data */
export type ComponentInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** The editorJS data  */
export type Editor = {
  __typename?: 'Editor';
  /** The blocks that make up the content */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /** The timestamp of the last change */
  time?: Maybe<Scalars['Float']['output']>;
  /** The version of editorJS used to edit */
  version?: Maybe<Scalars['String']['output']>;
};

/** The editorJS input data  */
export type EditorInput = {
  /** The blocks that make up the content */
  blocks?: InputMaybe<Array<InputMaybe<BlockInput>>>;
  /** The timestamp of the last change */
  time?: InputMaybe<Scalars['Float']['input']>;
  /** The version of editorJS used to edit */
  version?: InputMaybe<Scalars['String']['input']>;
};

/** Feed cards for events on the system */
export type Feed = {
  __typename?: 'Feed';
  /** The background image to use in the feed card */
  backgroundImage?: Maybe<Scalars['String']['output']>;
  /** When the Note was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the Note */
  createdBy?: Maybe<User>;
  /** The link to user for the feed card */
  href?: Maybe<Scalars['String']['output']>;
  /** The body of the activity */
  html?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The image to use in the feed card */
  image?: Maybe<Scalars['String']['output']>;
  /** A lump of payload data */
  payload?: Maybe<Scalars['JSONObject']['output']>;
  /** The project the feed card is tied to */
  project?: Maybe<Project>;
  /** Who had read the feed card */
  readIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The title of the activity */
  subject?: Maybe<Scalars['String']['output']>;
  /** A list of tags that apply to this feed card */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type of activity */
  type?: Maybe<Scalars['String']['output']>;
  /** When the Note was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the Note last */
  updatedBy?: Maybe<User>;
  /** The User the feed card is tied to */
  user?: Maybe<User>;
  /** The users who can see the feed card */
  userIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Feed cards for events on the system */
export type FeedInput = {
  /** The userId of the author of the feed card */
  authorId?: InputMaybe<Scalars['String']['input']>;
  /** The background image to use in the feed card */
  backgroundImage?: InputMaybe<Scalars['String']['input']>;
  /** The date the feed card was created */
  createdAt?: InputMaybe<Scalars['String']['input']>;
  /** The link to user for the feed card */
  href?: InputMaybe<Scalars['String']['input']>;
  /** The body of the activity */
  html?: InputMaybe<Scalars['String']['input']>;
  /** The image to use in the feed card */
  image?: InputMaybe<Scalars['String']['input']>;
  /** A lump of payload data */
  payload?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The project feed card is tied to */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** Has the feed card been read */
  read?: InputMaybe<Scalars['Boolean']['input']>;
  /** The title of the activity */
  subject?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags that apply to this feed card */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The ID of the template we are using to generate the feed card */
  templateId?: InputMaybe<Scalars['String']['input']>;
  /** The type of activity */
  type?: InputMaybe<Scalars['String']['input']>;
  /** The user feed card is tied to */
  userId?: InputMaybe<Scalars['String']['input']>;
  /** The users who can see the feed card */
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeedListQueryInput = {
  /** The ID of the first result from the current */
  back?: InputMaybe<Scalars['String']['input']>;
  /** The number of results to return */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** The ID of the last result from the current page */
  next?: InputMaybe<Scalars['String']['input']>;
  /** Order the list of results by this field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** The directions to order the results */
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  /** The page of results to get */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** A list of feed for this project */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The search query */
  query?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags to search for */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The type of activity to list */
  type?: InputMaybe<Scalars['String']['input']>;
  /** A list of feed with this user tied */
  userId?: InputMaybe<Scalars['String']['input']>;
  /** Where a list of values for a column contains a value */
  whereArrayContains?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is any of array of values */
  whereArrayContainsAny?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column matches a value */
  whereEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than a value */
  whereGreaterThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than or equal to a value */
  whereGreaterThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is in an array of values */
  whereIn?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than a value */
  whereLessThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than or equal to a value */
  whereLessThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** The information for a Flow document */
export type Flow = {
  __typename?: 'Flow';
  /** When the Flow was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the Flow */
  createdBy?: Maybe<User>;
  /** The default path for the flow */
  defaultPath?: Maybe<Scalars['String']['output']>;
  /** The endpoint to send the flow */
  endpoint?: Maybe<Scalars['String']['output']>;
  /** Template for error message */
  errorTemplate?: Maybe<Template>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the Flow */
  name?: Maybe<Scalars['String']['output']>;
  /** The logic used for path manipulation */
  pathLogic?: Maybe<Scalars['JSONObject']['output']>;
  /** The path of steps to take on a flow */
  paths?: Maybe<Scalars['JSONObject']['output']>;
  /** The renderId to use by default */
  renderId?: Maybe<Scalars['String']['output']>;
  /** A list of roles this Flow is to */
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** option to show progress in the flow */
  showProgress?: Maybe<Scalars['Boolean']['output']>;
  /** list of step ids */
  stepIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  successConfetti?: Maybe<Scalars['Boolean']['output']>;
  /** Template for success message */
  successTemplate?: Maybe<Template>;
  /** A list of tags that apply to a Flow */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** When the flow was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the Flow last */
  updatedBy?: Maybe<User>;
};

/** Editable Flow data */
export type FlowInput = {
  /** The default path for the flow */
  defaultPath?: InputMaybe<Scalars['String']['input']>;
  /** The endpoint to send the flow */
  endpoint?: InputMaybe<Scalars['String']['input']>;
  /** Template ID for error message */
  errorTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the Location the Note is tied to */
  locationId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** The logic used for path manipulation */
  pathLogic?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The path of steps to take on a flow */
  paths?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The renderId to use by default */
  renderId?: InputMaybe<Scalars['String']['input']>;
  /** option to show progress in the flow */
  showProgress?: InputMaybe<Scalars['Boolean']['input']>;
  stepIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  successConfetti?: InputMaybe<Scalars['Boolean']['input']>;
  /** Template ID for success message */
  successTemplateId?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags that apply to a flow */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** The rendered version of the flow */
export type FlowRender = {
  __typename?: 'FlowRender';
  /** When the Flow was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the Flow */
  createdBy?: Maybe<User>;
  /** The default path for the flow */
  defaultPath?: Maybe<Scalars['String']['output']>;
  /** The endpoint to send the flow */
  endpoint?: Maybe<Scalars['String']['output']>;
  /** Template for error message */
  errorTemplate?: Maybe<Template>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the Flow */
  name?: Maybe<Scalars['String']['output']>;
  /** The logic used for path manipulation */
  pathLogic?: Maybe<Scalars['JSONObject']['output']>;
  /** The path of steps to take on a flow */
  paths?: Maybe<Scalars['JSONObject']['output']>;
  /** A list of roles this Flow is to */
  roles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** option to show progress in the flow */
  showProgress?: Maybe<Scalars['Boolean']['output']>;
  /** list of step ids */
  stepIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of steps tied to the flow */
  steps?: Maybe<Array<Maybe<Step>>>;
  /** Template for success message */
  successTemplate?: Maybe<Template>;
  /** A list of tags that apply to a Flow */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** list of template ids */
  templateIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Templates tied to the flow */
  templates?: Maybe<Array<Maybe<Template>>>;
  /** When the flow was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the Flow last */
  updatedBy?: Maybe<User>;
};

/** A list of time frequencies */
export enum Frequency {
  Daily = 'daily',
  HalfHourly = 'halfHourly',
  Hourly = 'hourly',
  Monthly = 'monthly',
  QuarterHourly = 'quarterHourly',
  Quarterly = 'quarterly',
  Weekly = 'weekly',
  Yearly = 'yearly'
}

/** Generate a PDF from a template */
export type GeneratePdfInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  payload?: InputMaybe<Scalars['JSONObject']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Generate a  PDF for a template */
export type GeneratePdfOutput = {
  __typename?: 'GeneratePdfOutput';
  id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** The information for a Invoice document */
export type Invoice = {
  __typename?: 'Invoice';
  /** The total amount due */
  amount?: Maybe<Scalars['Float']['output']>;
  /** When the account was created */
  createdAt?: Maybe<User>;
  /** Who created the account */
  createdBy?: Maybe<User>;
  /** The number of days until this invoice is due */
  daysUntilDue?: Maybe<Scalars['Float']['output']>;
  /** A list of tax rates to be applied to all invoice items */
  default_tax_rates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** When the bill is due */
  dueOn?: Maybe<Scalars['String']['output']>;
  /** The email where the invoice is being sent */
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The list of invoiced items */
  items?: Maybe<Array<Maybe<InvoiceItem>>>;
  /** Has the invoice been paid */
  paid?: Maybe<Scalars['Boolean']['output']>;
  /** The payments made to this invoice */
  payments?: Maybe<Array<Maybe<Payment>>>;
  /** The id of the corresponding invoice in QBO */
  qboId?: Maybe<Scalars['String']['output']>;
  /** Transfer data on where to route payment */
  transfer_data?: Maybe<InvoiceTransferData>;
  /** The sertvice type of the invoice */
  type?: Maybe<Scalars['String']['output']>;
  /** When the account was updated */
  updatedAt?: Maybe<User>;
  /** Who updated the account last */
  updatedBy?: Maybe<User>;
  /** The user the invoice is tied to */
  user?: Maybe<User>;
};

/** Editable Invoice data */
export type InvoiceInput = {
  /** The total amount due */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** The number of days until this invoice is due */
  daysUntilDue?: InputMaybe<Scalars['Float']['input']>;
  /** A list of tax rates to be applied to all invoice items */
  default_tax_rates?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** When the bill is due */
  dueOn?: InputMaybe<Scalars['String']['input']>;
  /** The email where the invoice is being sent */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The list of invoiced items */
  items?: InputMaybe<Array<InputMaybe<InvoiceItemInput>>>;
  /** Has the invoice been paid */
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  /** The id of the corresponding invoice in QBO */
  qboId?: InputMaybe<Scalars['String']['input']>;
  /** Transfer data on where to route payment */
  transfer_data?: InputMaybe<InvoiceItemTransferDataInput>;
  /** The sertvice type of the invoice */
  type?: InputMaybe<Scalars['String']['input']>;
  /** The user the invoice is tied to */
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** An invoice item */
export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  /** The amount charged in pennies */
  amount?: Maybe<Scalars['Float']['output']>;
  /** The currency to pay in */
  currency?: Maybe<Scalars['String']['output']>;
  /** A description of what is being charged */
  description?: Maybe<Scalars['String']['output']>;
  /** The quantity of items charged */
  quantity?: Maybe<Scalars['Float']['output']>;
  /** A list of tax rates to be applied */
  tax_rates?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type InvoiceItemInput = {
  /** The amount charged in pennies */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** The currency to pay in */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** A description of what is being charged */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The quantity of items charged */
  quantity?: InputMaybe<Scalars['Float']['input']>;
  /** A list of tax rates to be applied */
  tax_rates?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InvoiceItemTransferDataInput = {
  /** The amount in pennies that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** The destination Stripe Connect account */
  destination?: InputMaybe<Scalars['String']['input']>;
};

/** Invoice transfer data */
export type InvoiceTransferData = {
  __typename?: 'InvoiceTransferData';
  /** The amount in pennies that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. */
  amount?: Maybe<Scalars['Float']['output']>;
  /** The destination Stripe Connect account */
  destination?: Maybe<Scalars['String']['output']>;
};

/** The default input to use for all list queries */
export type ListQueryInput = {
  /** The ID of the first result from the current */
  back?: InputMaybe<Scalars['String']['input']>;
  /** The number of results to return */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** The ID of the last result from the current page */
  next?: InputMaybe<Scalars['String']['input']>;
  /** Order the list of results by this field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** The directions to order the results */
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  /** The page of results to get */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** The search query */
  query?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags to search for */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Where a list of values for a column contains a value */
  whereArrayContains?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is any of array of values */
  whereArrayContainsAny?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column matches a value */
  whereEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than a value */
  whereGreaterThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than or equal to a value */
  whereGreaterThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is in an array of values */
  whereIn?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than a value */
  whereLessThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than or equal to a value */
  whereLessThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** The information for an event logged on the system */
export type Log = {
  __typename?: 'Log';
  /** When the log was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the log */
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The input data sent to the endpoint */
  input?: Maybe<Scalars['JSONObject']['output']>;
  /** The name of the endpoint being accessed or event being responded to */
  name?: Maybe<Scalars['String']['output']>;
  /** The output data returned to the endpoint */
  output?: Maybe<Scalars['JSONObject']['output']>;
  /** The project the log is tied to */
  project?: Maybe<Project>;
  /** The URL of the page that called out to the API */
  referrer?: Maybe<Scalars['String']['output']>;
  /** The amount of time it took the functionality to run */
  resolveTime?: Maybe<Scalars['Float']['output']>;
  /** The type of log */
  type?: Maybe<Scalars['String']['output']>;
};

export type LogListQueryInput = {
  /** The ID of the first result from the current */
  back?: InputMaybe<Scalars['String']['input']>;
  /** The number of results to return */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** The ID of the last result from the current page */
  next?: InputMaybe<Scalars['String']['input']>;
  /** Order the list of results by this field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** The directions to order the results */
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  /** The page of results to get */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** A list of logs tied to a project */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The search query */
  query?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags to search for */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Types of logs to display */
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of logs tied to a user */
  userId?: InputMaybe<Scalars['String']['input']>;
  /** Where a list of values for a column contains a value */
  whereArrayContains?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is any of array of values */
  whereArrayContainsAny?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column matches a value */
  whereEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than a value */
  whereGreaterThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than or equal to a value */
  whereGreaterThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is in an array of values */
  whereIn?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than a value */
  whereLessThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than or equal to a value */
  whereLessThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** A mail record sent via SendGrid */
export type Mail = {
  __typename?: 'Mail';
  /** A list of recipients email addresses that will appear on the BCC: field */
  bcc?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of recipients user IDs that will appear on the BCC: field */
  bccUids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of recipients email addresses that will appear on the CC: field */
  cc?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of recipients user IDs that will appear on the CC: field */
  ccUids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** When the mail was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the mail */
  createdBy?: Maybe<User>;
  /** The mail delivery options */
  delivery?: Maybe<MailDelivery>;
  /** The email address the e-mail wil come from */
  from?: Maybe<Scalars['String']['output']>;
  /** An object or array of additional header fields (e.g. {"X-Key-Name": "key value"} or [{key: "X-Key-Name", value: "val1"}, {key: "X-Key-Name", value: "val2"}]) */
  headers?: Maybe<Scalars['JSONObject']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The mail message options */
  message?: Maybe<MailMessage>;
  /** The Project the mail is tied to */
  project?: Maybe<Project>;
  /** The email address the recipient will send replies to */
  replyTo?: Maybe<Scalars['String']['output']>;
  /** The mail message template options */
  template?: Maybe<MailTemplate>;
  /** A list of recipients email addresses that will appear on the To: field */
  to?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of recipients user IDs that will appear on the To: field */
  toUids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** The mail attachment options */
export type MailAttachment = {
  __typename?: 'MailAttachment';
  /** optional content id for using inline images in HTML message source */
  cid?: Maybe<Scalars['String']['output']>;
  /** String, Buffer or a Stream contents for the attachment */
  content?: Maybe<Scalars['String']['output']>;
  /** optional content disposition type for the attachment, defaults to 'attachment' */
  contentDisposition?: Maybe<Scalars['String']['output']>;
  /** optional content type for the attachment, if not set will be derived from the filename property */
  contentType?: Maybe<Scalars['String']['output']>;
  /** If set and content is string, then encodes the content to a Buffer using the specified encoding. Example values: base64, hex, 'binary' etc. Useful if you want to use binary attachments in a JSON formatted e-mail object. */
  encoding?: Maybe<Scalars['String']['output']>;
  /** filename to be reported as the name of the attached file, use of unicode is allowed */
  filename?: Maybe<Scalars['String']['output']>;
  /** an URL to the file (data uris are allowed as well) */
  href?: Maybe<Scalars['String']['output']>;
  /** Pathname or URL to use streaming */
  path?: Maybe<Scalars['String']['output']>;
};

/** The mail attachment input options */
export type MailAttachmentInput = {
  /** optional content id for using inline images in HTML message source */
  cid?: InputMaybe<Scalars['String']['input']>;
  /** String, Buffer or a Stream contents for the attachment */
  content?: InputMaybe<Scalars['String']['input']>;
  /** optional content disposition type for the attachment, defaults to 'attachment' */
  contentDisposition?: InputMaybe<Scalars['String']['input']>;
  /** optional content type for the attachment, if not set will be derived from the filename property */
  contentType?: InputMaybe<Scalars['String']['input']>;
  /** If set and content is string, then encodes the content to a Buffer using the specified encoding. Example values: base64, hex, 'binary' etc. Useful if you want to use binary attachments in a JSON formatted e-mail object. */
  encoding?: InputMaybe<Scalars['String']['input']>;
  /** filename to be reported as the name of the attached file, use of unicode is allowed */
  filename?: InputMaybe<Scalars['String']['input']>;
  /** an URL to the file (data uris are allowed as well) */
  href?: InputMaybe<Scalars['String']['input']>;
  /** Pathname or URL to use streaming */
  path?: InputMaybe<Scalars['String']['input']>;
};

/** The mail delivery options */
export type MailDelivery = {
  __typename?: 'MailDelivery';
  /** Number of delivery attempts */
  attempts?: Maybe<Scalars['Float']['output']>;
  /** The time the delivery was completed */
  endTime?: Maybe<Scalars['String']['output']>;
  /** The error received, if any, for delivery */
  error?: Maybe<Scalars['String']['output']>;
  /** The time the delivery was started */
  info?: Maybe<MailDeliveryInfo>;
  /** The time the delivery lease expires */
  leaseExpireTime?: Maybe<Scalars['String']['output']>;
  /** The time the delivery was started */
  startTime?: Maybe<Scalars['String']['output']>;
  /** The current state of the delivery */
  state?: Maybe<Scalars['String']['output']>;
};

/** The mail delivery info */
export type MailDeliveryInfo = {
  __typename?: 'MailDeliveryInfo';
  /** A list of accepted emails */
  accepted?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The ID of the message in SendGrid */
  messageId?: Maybe<Scalars['String']['output']>;
  /** A list of pending emails */
  pending?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A list of rejected emails */
  rejected?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type MailInput = {
  /** A list of recipients email addresses that will appear on the BCC: field */
  bcc?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of recipients user IDs that will appear on the BCC: field */
  bccUids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of recipients email addresses that will appear on the CC: field */
  cc?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of recipients user IDs that will appear on the CC: field */
  ccUids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The email address the e-mail wil come from */
  from?: InputMaybe<Scalars['String']['input']>;
  /** An object or array of additional header fields (e.g. {"X-Key-Name": "key value"} or [{key: "X-Key-Name", value: "val1"}, {key: "X-Key-Name", value: "val2"}]) */
  headers?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The mail message options */
  message?: InputMaybe<MailMessageInput>;
  /** The project this email is tied to */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The email address the recipient will send replies to */
  replyTo?: InputMaybe<Scalars['String']['input']>;
  /** The mail message subject */
  subject?: InputMaybe<Scalars['String']['input']>;
  /** The mail message template options */
  template?: InputMaybe<MailTemplateInput>;
  /** A list of recipients email addresses that will appear on the To: field */
  to?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of recipients user IDs that will appear on the To: field */
  toUids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The user who created this email */
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type MailListQueryInput = {
  /** The ID of the first result from the current */
  back?: InputMaybe<Scalars['String']['input']>;
  /** The number of results to return */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** The ID of the last result from the current page */
  next?: InputMaybe<Scalars['String']['input']>;
  /** Order the list of results by this field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** The directions to order the results */
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  /** The page of results to get */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** A list of logs tied to a project */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The search query */
  query?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags to search for */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Types of logs to display */
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of logs tied to a user */
  userId?: InputMaybe<Scalars['String']['input']>;
  /** Where a list of values for a column contains a value */
  whereArrayContains?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is any of array of values */
  whereArrayContainsAny?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column matches a value */
  whereEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than a value */
  whereGreaterThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than or equal to a value */
  whereGreaterThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is in an array of values */
  whereIn?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than a value */
  whereLessThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than or equal to a value */
  whereLessThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** The mail message options */
export type MailMessage = {
  __typename?: 'MailMessage';
  /** An array of alternative text contents (in addition to text and html parts) (see below for details) */
  alternatives?: Maybe<Array<Maybe<MailAttachment>>>;
  /** An array of attachment objects (see below for details) */
  attachments?: Maybe<Array<Maybe<MailAttachment>>>;
  /** Comma separated list or an array of recipients e-mail addresses that will appear on the Bcc: field */
  bcc?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Comma separated list or an array of recipients e-mail addresses that will appear on the Cc: field */
  cc?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** optional Date value, current UTC string will be used if not set */
  date?: Maybe<Scalars['String']['output']>;
  /** optional transfer encoding for the textual parts (defaults to 'quoted-printable') */
  encoding?: Maybe<Scalars['String']['output']>;
  /** The e-mail address of the sender. All e-mail addresses can be plain 'sender@server.com' or formatted 'Sender Name <sender@server.com>', see here for details */
  from?: Maybe<Scalars['String']['output']>;
  /** An object or array of additional header fields (e.g. {"X-Key-Name": "key value"} or [{key: "X-Key-Name", value: "val1"}, {key: "X-Key-Name", value: "val2"}]) */
  headers?: Maybe<Scalars['JSONObject']['output']>;
  /** The HTML version of the message as an Unicode string, Buffer, Stream or an object {path: '...'} */
  html?: Maybe<MailAttachment>;
  /** The message-id this message is replying */
  inReplyTo?: Maybe<Scalars['String']['output']>;
  /** optional Message-Id value, random value will be generated if not set */
  messageId?: Maybe<Scalars['String']['output']>;
  /** Message-id list (an array or space separated string) */
  references?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** An e-mail address that will appear on the Reply-To: field */
  replyTo?: Maybe<Scalars['String']['output']>;
  /** An e-mail address that will appear on the Sender: field */
  sender?: Maybe<Scalars['String']['output']>;
  /** The subject of the e-mail */
  subject?: Maybe<Scalars['String']['output']>;
  /** The plaintext version of the message as an Unicode string, Buffer, Stream or an object {path: '...'} */
  text?: Maybe<MailAttachment>;
  /** Comma separated list or an array of recipients e-mail addresses that will appear on the To: field */
  to?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** The mail message input options */
export type MailMessageInput = {
  /** An array of alternative text contents (in addition to text and html parts) (see below for details) */
  alternatives?: InputMaybe<Array<InputMaybe<MailAttachmentInput>>>;
  /** An array of attachment objects (see below for details) */
  attachments?: InputMaybe<Array<InputMaybe<MailAttachmentInput>>>;
  /** Comma separated list or an array of recipients e-mail addresses that will appear on the Bcc: field */
  bcc?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Comma separated list or an array of recipients e-mail addresses that will appear on the Cc: field */
  cc?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** optional Date value, current UTC string will be used if not set */
  date?: InputMaybe<Scalars['String']['input']>;
  /** optional transfer encoding for the textual parts (defaults to 'quoted-printable') */
  encoding?: InputMaybe<Scalars['String']['input']>;
  /** The e-mail address of the sender. All e-mail addresses can be plain 'sender@server.com' or formatted 'Sender Name <sender@server.com>', see here for details */
  from?: InputMaybe<Scalars['String']['input']>;
  /** An object or array of additional header fields (e.g. {"X-Key-Name": "key value"} or [{key: "X-Key-Name", value: "val1"}, {key: "X-Key-Name", value: "val2"}]) */
  headers?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The HTML version of the message as an Unicode string, Buffer, Stream or an object {path: '...'} */
  html?: InputMaybe<Scalars['String']['input']>;
  /** The message-id this message is replying */
  inReplyTo?: InputMaybe<Scalars['String']['input']>;
  /** optional Message-Id value, random value will be generated if not set */
  messageId?: InputMaybe<Scalars['String']['input']>;
  /** Message-id list (an array or space separated string) */
  references?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** An e-mail address that will appear on the Reply-To: field */
  replyTo?: InputMaybe<Scalars['String']['input']>;
  /** An e-mail address that will appear on the Sender: field */
  sender?: InputMaybe<Scalars['String']['input']>;
  /** The subject of the e-mail */
  subject?: InputMaybe<Scalars['String']['input']>;
  /** The plaintext version of the message as an Unicode string, Buffer, Stream or an object {path: '...'} */
  text?: InputMaybe<Scalars['String']['input']>;
  /** Comma separated list or an array of recipients e-mail addresses that will appear on the To: field */
  to?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** The mail message template options */
export type MailTemplate = {
  __typename?: 'MailTemplate';
  /** The data to render over the template */
  data?: Maybe<Scalars['JSONObject']['output']>;
  /** The ID or name of the Template document */
  name?: Maybe<Scalars['String']['output']>;
};

/** The mail message template input options */
export type MailTemplateInput = {
  /** The data to render over the template */
  data?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The ID or name of the Template document */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAddress?: Maybe<Address>;
  addAlert?: Maybe<Alert>;
  addBatch?: Maybe<Batch>;
  addComponent?: Maybe<Component>;
  addFlow?: Maybe<Flow>;
  addInvoice?: Maybe<Invoice>;
  addPayment?: Maybe<Payment>;
  addProject?: Maybe<Project>;
  addStep?: Maybe<Step>;
  addTemplate?: Maybe<Template>;
  addToken?: Maybe<Token>;
  addTotaller?: Maybe<Totaller>;
  addTrigger?: Maybe<Trigger>;
  addUser?: Maybe<User>;
  deleteAddress?: Maybe<Address>;
  deleteAlert?: Maybe<Alert>;
  deleteBatch?: Maybe<Batch>;
  deleteComponent?: Maybe<Component>;
  deleteFlow?: Maybe<Flow>;
  deleteInvoice?: Maybe<Invoice>;
  deletePayment?: Maybe<Payment>;
  deleteProject?: Maybe<Project>;
  deleteStep?: Maybe<Step>;
  deleteTemplate?: Maybe<Template>;
  deleteToken?: Maybe<Token>;
  deleteTotaller?: Maybe<Totaller>;
  deleteTrigger?: Maybe<Trigger>;
  deleteUser?: Maybe<User>;
  editAddress?: Maybe<Address>;
  editAlert?: Maybe<Alert>;
  editBatch?: Maybe<Batch>;
  editComponent?: Maybe<Component>;
  editFlow?: Maybe<Flow>;
  editInvoice?: Maybe<Invoice>;
  editPayment?: Maybe<Payment>;
  editProject?: Maybe<Project>;
  editStep?: Maybe<Step>;
  editTemplate?: Maybe<Template>;
  editToken?: Maybe<Token>;
  editTotaller?: Maybe<Totaller>;
  editTrigger?: Maybe<Trigger>;
  editUser?: Maybe<User>;
  /** Generate a PDF from a template */
  generatePdf?: Maybe<GeneratePdfOutput>;
  /** Send a temlate to an email address. */
  sendTemplateEmail?: Maybe<SendTemplateEmailOutput>;
};


export type MutationAddAddressArgs = {
  data?: InputMaybe<AddressInput>;
};


export type MutationAddAlertArgs = {
  data?: InputMaybe<AlertInput>;
};


export type MutationAddBatchArgs = {
  data?: InputMaybe<BatchInput>;
};


export type MutationAddComponentArgs = {
  data?: InputMaybe<ComponentInput>;
};


export type MutationAddFlowArgs = {
  data?: InputMaybe<FlowInput>;
};


export type MutationAddInvoiceArgs = {
  data?: InputMaybe<InvoiceInput>;
};


export type MutationAddPaymentArgs = {
  data?: InputMaybe<PaymentInput>;
};


export type MutationAddProjectArgs = {
  data?: InputMaybe<ProjectInput>;
};


export type MutationAddStepArgs = {
  data?: InputMaybe<StepInput>;
};


export type MutationAddTemplateArgs = {
  data?: InputMaybe<TemplateInput>;
};


export type MutationAddTokenArgs = {
  data?: InputMaybe<TokenInput>;
};


export type MutationAddTotallerArgs = {
  data?: InputMaybe<TotallerInput>;
};


export type MutationAddTriggerArgs = {
  data?: InputMaybe<TriggerInput>;
};


export type MutationAddUserArgs = {
  data?: InputMaybe<UserInput>;
};


export type MutationDeleteAddressArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteAlertArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteBatchArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteComponentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteFlowArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteInvoiceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeletePaymentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteProjectArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteStepArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteTemplateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteTokenArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteTotallerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteTriggerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditAddressArgs = {
  data?: InputMaybe<AddressInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditAlertArgs = {
  data?: InputMaybe<AlertInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditBatchArgs = {
  data?: InputMaybe<BatchInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditComponentArgs = {
  data?: InputMaybe<ComponentInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditFlowArgs = {
  data?: InputMaybe<FlowInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditInvoiceArgs = {
  data?: InputMaybe<InvoiceInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditPaymentArgs = {
  data?: InputMaybe<PaymentInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditProjectArgs = {
  data?: InputMaybe<ProjectInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditStepArgs = {
  data?: InputMaybe<StepInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditTemplateArgs = {
  data?: InputMaybe<TemplateInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditTokenArgs = {
  data?: InputMaybe<TokenInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditTotallerArgs = {
  data?: InputMaybe<TotallerInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditTriggerArgs = {
  data?: InputMaybe<TriggerInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditUserArgs = {
  data?: InputMaybe<UserInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationGeneratePdfArgs = {
  data?: InputMaybe<GeneratePdfInput>;
};


export type MutationSendTemplateEmailArgs = {
  data?: InputMaybe<SendTemplateEmailInput>;
};

/** Payments transacted on the system. */
export type Payment = {
  __typename?: 'Payment';
  /** The account who received or made payment. */
  account?: Maybe<Account>;
  /** The amount charged from the payment source. */
  amount?: Maybe<Scalars['Float']['output']>;
  /** The charge ID from Stripe. */
  chargeId?: Maybe<Scalars['String']['output']>;
  /** The check number for the payment */
  checkNumber?: Maybe<Scalars['String']['output']>;
  /** When the payment was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the payment */
  createdBy?: Maybe<User>;
  /** The fee charged for the payment. */
  fee?: Maybe<Scalars['Float']['output']>;
  /** The frequency of payment if recurring. */
  frequency?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The method of payment. */
  method?: Maybe<Scalars['String']['output']>;
  /** The amount received by recipient of payment after fees and splits. */
  netTotal?: Maybe<Scalars['Float']['output']>;
  /** An ID of the Page in Notion */
  notionId?: Maybe<Scalars['String']['output']>;
  /** The project the payment is for. */
  project?: Maybe<Project>;
  /** An ID of the transaction from an external system */
  transactionId?: Maybe<Scalars['String']['output']>;
  /** The type of payment. */
  type?: Maybe<Scalars['String']['output']>;
  /** When the payment was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the payment last */
  updatedBy?: Maybe<User>;
  /** The user who made payment. */
  user?: Maybe<User>;
  /** When the payment was verified */
  verifiedAt?: Maybe<Scalars['String']['output']>;
};

/** Editable payment data */
export type PaymentInput = {
  /** The ID of the account that the payment came from */
  accountId?: InputMaybe<Scalars['String']['input']>;
  /** The amount charged from the payment source. */
  amount?: InputMaybe<Scalars['Float']['input']>;
  /** The card the payment came from */
  card?: InputMaybe<Scalars['String']['input']>;
  /** The check number for the payment */
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  /** The email of the customer */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The frequency of payment if recurring. */
  frequency?: InputMaybe<Scalars['String']['input']>;
  /** The method of payment. */
  method?: InputMaybe<Scalars['String']['input']>;
  /** The project ID the payment is tied to */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The timeline for this payment in number of days after generation */
  timeline?: InputMaybe<Scalars['Float']['input']>;
  /** The token for the paymnent */
  token?: InputMaybe<Scalars['String']['input']>;
  /** The ID for the transaction in Dade or Stripe */
  transactionId?: InputMaybe<Scalars['String']['input']>;
  /** The type of payment. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** The user ID of the person making payment */
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Payment search options */
export type PaymentListQueryInput = {
  /** The ID of the first result from the current */
  back?: InputMaybe<Scalars['String']['input']>;
  /** The number of results to return */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** The payment method to filter by */
  method?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The ID of the last result from the current page */
  next?: InputMaybe<Scalars['String']['input']>;
  /** Order the list of results by this field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** The directions to order the results */
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  /** The page of results to get */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** The location the payment is tied to */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The search query */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Where a list of values for a column contains a value */
  whereArrayContains?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is any of array of values */
  whereArrayContainsAny?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column matches a value */
  whereEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than a value */
  whereGreaterThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than or equal to a value */
  whereGreaterThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is in an array of values */
  whereIn?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than a value */
  whereLessThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than or equal to a value */
  whereLessThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** The information for a Project document */
export type Project = {
  __typename?: 'Project';
  /** When the document was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the document */
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the Project */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of tokens tied to the project */
  tokens?: Maybe<Array<Maybe<Token>>>;
  /** When the document was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the document last */
  updatedBy?: Maybe<User>;
};

/** Editable Project data */
export type ProjectInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific Account document from the Accounts collection. */
  account?: Maybe<Account>;
  /** Get a list of Account documents from the Accounts collection. */
  accounts?: Maybe<Array<Account>>;
  /** Get a specific Address document from the Addresses collection. */
  address?: Maybe<Address>;
  /** Get a list of Address documents from the Addresses collection. */
  addresses?: Maybe<Array<Address>>;
  /** Get a specific Alert document from the Alerts collection. */
  alert?: Maybe<Alert>;
  /** Get a list of Alert documents from the Alerts collection. */
  alerts?: Maybe<Array<Alert>>;
  /** Get a specific Batch document from the Batches collection. */
  batch?: Maybe<Batch>;
  /** Get a list of Batch documents from the Batches collection. */
  batches?: Maybe<Array<Batch>>;
  /** Get a specific Component document from the Components collection. */
  component?: Maybe<Component>;
  /** Get a list of Component documents from the Components collection. */
  components?: Maybe<Array<Component>>;
  /** Get a specific Feed document from the Feeds collection. */
  feed?: Maybe<Feed>;
  /** Get a list of Feed documents from the Feeds collection. */
  feeds?: Maybe<Array<Feed>>;
  /** Get a specific Flow document from the Flows collection. */
  flow?: Maybe<Flow>;
  /** Get a list of Flow documents from the Flows collection. */
  flows?: Maybe<Array<Flow>>;
  /** Get a specific Invoice document from the Invoices collection. */
  invoice?: Maybe<Invoice>;
  /** Get a list of Invoice documents from the Invoices collection. */
  invoices?: Maybe<Array<Invoice>>;
  /** Get a specific Log document from the Logs collection. */
  log?: Maybe<Log>;
  /** Get a list of Log documents from the Logs collection. */
  logs?: Maybe<Array<Log>>;
  /** Get a list of Mail documents from the Mail collection. */
  mail?: Maybe<Array<Mail>>;
  /** Get a specific Payment document from the Payments collection. */
  payment?: Maybe<Payment>;
  /** Get a list of Payment documents from the Payments collection. */
  payments?: Maybe<Array<Payment>>;
  /** Get a specific Project document from the Projects collection. */
  project?: Maybe<Project>;
  /** Get a list of Project documents from the Projects collection. */
  projects?: Maybe<Array<Project>>;
  /** Get a specific Step document from the Steps collection. */
  step?: Maybe<Step>;
  /** Get a list of Step documents from the Steps collection. */
  steps?: Maybe<Array<Step>>;
  /** Get a specific Template document from the Templates collection. */
  template?: Maybe<Template>;
  /** Get a list of Template documents from the Templates collection. */
  templates?: Maybe<Array<Template>>;
  /** Get a specific Token document from the Tokens collection. */
  token?: Maybe<Token>;
  /** Get a list of Token documents from the Tokens collection. */
  tokens?: Maybe<Array<Token>>;
  /** Get a specific Totaller document from the Totallers collection. */
  totaller?: Maybe<Totaller>;
  /** Get a list of Totaller documents from the Totallers collection. */
  totallers?: Maybe<Array<Totaller>>;
  /** Get a specific Trigger document from the Triggers collection. */
  trigger?: Maybe<Trigger>;
  /** Get a list of Trigger documents from the Triggers collection. */
  triggers?: Maybe<Array<Trigger>>;
  /** Get a specific User document from the Users collection. */
  user?: Maybe<User>;
  /** Get a list of User documents from the Users collection. */
  users?: Maybe<Array<User>>;
};


export type QueryAccountArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccountsArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryAddressArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAddressesArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryAlertArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAlertsArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryBatchArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBatchesArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryComponentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryComponentsArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryFeedArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFeedsArgs = {
  data?: InputMaybe<FeedListQueryInput>;
};


export type QueryFlowArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFlowsArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryInvoiceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInvoicesArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryLogArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLogsArgs = {
  data?: InputMaybe<LogListQueryInput>;
};


export type QueryMailArgs = {
  data?: InputMaybe<ListQueryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaymentsArgs = {
  data?: InputMaybe<PaymentListQueryInput>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectsArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryStepArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStepsArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryTemplateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTemplatesArgs = {
  data?: InputMaybe<TemplateListInput>;
};


export type QueryTokenArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTokensArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryTotallerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTotallersArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryTriggerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTriggersArgs = {
  data?: InputMaybe<ListQueryInput>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersArgs = {
  data?: InputMaybe<ListQueryInput>;
};

/** Sends a message in Slack */
export type SendSlackMessageInput = {
  /** Is the message being sent on behalf of a user */
  asUser?: InputMaybe<Scalars['Boolean']['input']>;
  /** The channel to post the message to */
  channel?: InputMaybe<Scalars['String']['input']>;
  /** The message being sent */
  text?: InputMaybe<Scalars['String']['input']>;
};

/** Send a temlate to an email address. */
export type SendTemplateEmailInput = {
  /** The attachments to be sent with the email */
  attachments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of emails to BCC on the email */
  bccs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of emails to CC on the email */
  ccs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The data to be rendered over the template */
  data?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Do you need to test the email without sending it or see who might receive it? */
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  /** The email address to send the template to */
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A list of filters for the users to be emailed */
  filters?: InputMaybe<UserFilterInput>;
  /** The frame to render the content of the template into */
  frameId?: InputMaybe<Scalars['String']['input']>;
  /** The email address the email will come from */
  from?: InputMaybe<Scalars['String']['input']>;
  /** HTML to be sent */
  html?: InputMaybe<Scalars['String']['input']>;
  /** This will determine if each email needs to be on a separate thread */
  isEblast?: InputMaybe<Scalars['Boolean']['input']>;
  /** The email address the sender will reply to */
  replyTo?: InputMaybe<Scalars['String']['input']>;
  /** The subject of the email */
  subject?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the template being sent */
  templateId?: InputMaybe<Scalars['String']['input']>;
  /** Text message or fallback email text to be sent */
  text?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the user to send the template to */
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Send a temlate to an email address. */
export type SendTemplateEmailOutput = {
  __typename?: 'SendTemplateEmailOutput';
  mailIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** The information for a Signature document */
export type Signature = {
  __typename?: 'Signature';
  /** When the document was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the document */
  createdBy?: Maybe<User>;
  /** The name of the Signature */
  data?: Maybe<Scalars['String']['output']>;
  /** When the document was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the document last */
  updatedBy?: Maybe<User>;
};

/** Editable Signature data */
export type SignatureInput = {
  data?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** The information for a Step document */
export type Step = {
  __typename?: 'Step';
  /** The html that appears after the fields */
  afterHTML?: Maybe<Scalars['String']['output']>;
  /** The html that appears before the fields */
  beforeHTML?: Maybe<Scalars['String']['output']>;
  /** the web component tag to render */
  component?: Maybe<Scalars['String']['output']>;
  /** The props to pass the web component */
  componentProps?: Maybe<Scalars['JSONObject']['output']>;
  /** When the Step was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the Step */
  createdBy?: Maybe<User>;
  /** A list of fields that accept an input */
  fields?: Maybe<Scalars['JSONObject']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the Step */
  name?: Maybe<Scalars['String']['output']>;
  /** The data passed to the step */
  payload?: Maybe<Scalars['JSONObject']['output']>;
  /** A list of tags that apply to a Step */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The template tied to the step */
  template?: Maybe<Template>;
  /** When the Step was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the Step last */
  updatedBy?: Maybe<User>;
  /** The user the Step is assigned to */
  user?: Maybe<User>;
  /** A list of userIds this Step is to */
  userIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** The information for a Step document */
export type StepInput = {
  /** The html that appears after the fields */
  afterHTML?: InputMaybe<Scalars['String']['input']>;
  /** The html that appears before the fields */
  beforeHTML?: InputMaybe<Scalars['String']['input']>;
  /** the web component tag to render */
  component?: InputMaybe<Scalars['String']['input']>;
  /** The props to pass the web component */
  componentProps?: InputMaybe<Scalars['JSONObject']['input']>;
  /** A list of fields that accept an input */
  fields?: InputMaybe<Scalars['JSONObject']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the Step */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The data passed to the step */
  payload?: InputMaybe<Scalars['JSONObject']['input']>;
  /** A list of tags that apply to a Step */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The template tied to the step */
  templateId?: InputMaybe<Scalars['String']['input']>;
  /** A list of userIds this Step is to */
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** The Stripe verification object to check if account is active */
export type StripeVerification = {
  __typename?: 'StripeVerification';
  /** The reason the Stripe Account is disabled. */
  disabled_reason?: Maybe<Scalars['String']['output']>;
  /** The date the account verification is due by before it's restricted. */
  due_by?: Maybe<Scalars['String']['output']>;
  /** The fields requiring attention in Stripe. */
  fields_needed?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** The information for a Template document */
export type Template = {
  __typename?: 'Template';
  /** The amp template to display */
  amp?: Maybe<Scalars['String']['output']>;
  /** A list of attachments to tie to sending this template */
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  /** When the document was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the document */
  createdBy?: Maybe<User>;
  /** A description of what this template is for */
  description?: Maybe<Scalars['String']['output']>;
  /** The editor data */
  editor?: Maybe<Editor>;
  fetch?: Maybe<Scalars['JSONObject']['output']>;
  /** The template to be used as a footer (For PDFs it repeats on each page) */
  footer?: Maybe<Template>;
  /** The frame used for this template */
  frame?: Maybe<Template>;
  /** The HTML to be injected into the head after prerender */
  head?: Maybe<Scalars['String']['output']>;
  /** The template to be used as a header (For PDFs it repeats on each page) */
  header?: Maybe<Template>;
  /** The HTML exported from Editor.js */
  html?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the template */
  name?: Maybe<Scalars['String']['output']>;
  /** Is this a template partial */
  partial?: Maybe<Scalars['Boolean']['output']>;
  /** The project this template belongs to */
  project?: Maybe<Project>;
  /** The query to run in order to generate routes for the page */
  routes?: Maybe<Scalars['JSONObject']['output']>;
  /** The sample data to render into the template for previewing */
  sampleData?: Maybe<Scalars['JSONObject']['output']>;
  /** The subject line when sending an email */
  subject?: Maybe<Scalars['String']['output']>;
  /** A list of tags that apply to a template */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The text to display */
  text?: Maybe<Scalars['String']['output']>;
  /** The type of template for grouping purposes */
  type?: Maybe<Scalars['String']['output']>;
  /** When the document was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the document last */
  updatedBy?: Maybe<User>;
};

/** Editable Template data */
export type TemplateInput = {
  /** The amp template to display */
  amp?: InputMaybe<Scalars['String']['input']>;
  /** A list of attachments to tie to sending this template */
  attachments?: InputMaybe<Array<InputMaybe<AttachmentInput>>>;
  /** A description of what this template is for */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The editor data */
  editor?: InputMaybe<EditorInput>;
  fetch?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The template ID of the footer used after this template */
  footerId?: InputMaybe<Scalars['String']['input']>;
  /** The template ID of the frame used to wrap this template */
  frameId?: InputMaybe<Scalars['String']['input']>;
  /** The HTML to be injected into the head after prerender */
  head?: InputMaybe<Scalars['String']['input']>;
  /** The template ID of the header used after this template */
  headerId?: InputMaybe<Scalars['String']['input']>;
  /** The name of the template */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Is this a template partial */
  partial?: InputMaybe<Scalars['Boolean']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The query to run in order to generate routes for the page */
  routes?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The sample data to render into the template for previewing */
  sampleData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The subject line when sending an email */
  subject?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags that apply to a template */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The text to display */
  text?: InputMaybe<Scalars['String']['input']>;
  /** The type of template for grouping purposes */
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Filterable list of templates */
export type TemplateListInput = {
  /** The ID of the first result from the current */
  back?: InputMaybe<Scalars['String']['input']>;
  /** The number of results to return */
  limit?: InputMaybe<Scalars['Float']['input']>;
  /** The ID of the last result from the current page */
  next?: InputMaybe<Scalars['String']['input']>;
  /** Order the list of results by this field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** The directions to order the results */
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  /** The page of results to get */
  page?: InputMaybe<Scalars['Float']['input']>;
  /** The projectId that this template is tied to */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The search query */
  query?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags to search for */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Where a list of values for a column contains a value */
  whereArrayContains?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is any of array of values */
  whereArrayContainsAny?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column matches a value */
  whereEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than a value */
  whereGreaterThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is greater than or equal to a value */
  whereGreaterThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column value is in an array of values */
  whereIn?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than a value */
  whereLessThan?: InputMaybe<Scalars['JSONObject']['input']>;
  /** Where a column is less than or equal to a value */
  whereLessThanOrEqual?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** The information for a Token document */
export type Token = {
  __typename?: 'Token';
  /** When the document was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the document */
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the Token */
  name?: Maybe<Scalars['String']['output']>;
  /** The project the token is tied to */
  project?: Maybe<Project>;
  /** When the document was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the document last */
  updatedBy?: Maybe<User>;
};

/** Editable Token data */
export type TokenInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** The information for a Total document */
export type Totaller = {
  __typename?: 'Totaller';
  /** The collection where the totals are calculated from */
  collection?: Maybe<Scalars['String']['output']>;
  /** When the document was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the document */
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  /** When the totaller was last run */
  lastRunAt?: Maybe<Scalars['String']['output']>;
  /** The name of the Total */
  name?: Maybe<Scalars['String']['output']>;
  /** The paths to generate totals in */
  paths?: Maybe<Scalars['JSONObject']['output']>;
  /** The sample data to use for testing */
  sampleData?: Maybe<Scalars['JSONObject']['output']>;
  /** The sums to store */
  sums?: Maybe<Scalars['JSONObject']['output']>;
  /** When the document was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the document last */
  updatedBy?: Maybe<User>;
};

/** Editable Total data */
export type TotallerInput = {
  /** The collection where the totals are calculated from */
  collection?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** The paths to generate totals in */
  paths?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The sample data to use for testing */
  sampleData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The sums to store */
  sums?: InputMaybe<Scalars['JSONObject']['input']>;
};

/** The information for a Trigger document */
export type Trigger = {
  __typename?: 'Trigger';
  /** What sends with the Trigger */
  action?: Maybe<Scalars['String']['output']>;
  /** Is the trigger active? */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** The information for batching a triggers action */
  batch?: Maybe<TriggerBatch>;
  /** When the document was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** The HTML to be injected into the head after prerender */
  createdBy?: Maybe<User>;
  /** The frequency this trigger fires */
  frequency?: Maybe<Frequency>;
  /** The group this trigger belongs to */
  group?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** What action will be fired */
  lastFiredAt?: Maybe<Scalars['String']['output']>;
  /** The name of the Trigger */
  name?: Maybe<Scalars['String']['output']>;
  /** When the trigger was last fired */
  payload?: Maybe<Scalars['JSONObject']['output']>;
  /** The pipeline for the trigger */
  pipeline?: Maybe<Scalars['JSONObject']['output']>;
  /** A list of queries to run when the trigger fires */
  queries?: Maybe<Scalars['JSONObject']['output']>;
  /** What sends with the Trigger */
  sampleData?: Maybe<Scalars['JSONObject']['output']>;
  /** The type of the action to trigger Trigger */
  type?: Maybe<Scalars['String']['output']>;
  /** When the document was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the document last */
  updatedBy?: Maybe<User>;
  /** The criteria that fires the Trigger */
  when?: Maybe<Scalars['String']['output']>;
};

/** The information for batching a triggers action */
export type TriggerBatch = {
  __typename?: 'TriggerBatch';
  /** Should this action be batched? */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** How long to wait while batching in minutes. */
  frequency?: Maybe<Scalars['Float']['output']>;
  /** JSON Logic to transform the data input into template */
  transformer?: Maybe<Scalars['String']['output']>;
  /** The criteria that batches actions */
  when?: Maybe<Scalars['String']['output']>;
};

export type TriggerBatchInput = {
  /** Should this action be batched? */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** How long to wait while batching in minutes. */
  frequency?: InputMaybe<Scalars['Float']['input']>;
  /** JSON Logic to transform the data input into template */
  transformer?: InputMaybe<Scalars['String']['input']>;
  /** The criteria that batches actions */
  when?: InputMaybe<Scalars['String']['input']>;
};

/** Editable Trigger data */
export type TriggerInput = {
  /** The action to fire the Trigger */
  action?: InputMaybe<Scalars['String']['input']>;
  /** Is the trigger active? */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** The information for batching a triggers action */
  batch?: InputMaybe<TriggerBatchInput>;
  /** The frequency this trigger fires */
  frequency?: InputMaybe<Frequency>;
  /** The group this trigger belongs to */
  group?: InputMaybe<Scalars['String']['input']>;
  /** The name of the Trigger */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The HTML handlebars content */
  payload?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The pipline for the trigger */
  pipeline?: InputMaybe<Scalars['JSONObject']['input']>;
  /** A list of queries to run when the trigger fires */
  queries?: InputMaybe<Scalars['JSONObject']['input']>;
  /** What sends with the Trigger */
  sampleData?: InputMaybe<Scalars['JSONObject']['input']>;
  /** The type of the action to trigger Trigger */
  type?: InputMaybe<Scalars['String']['input']>;
  /** The criteria that fires the Trigger */
  when?: InputMaybe<Scalars['String']['input']>;
};

/** The information for a user */
export type User = {
  __typename?: 'User';
  /** Is the user's account active */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** The user's address */
  address?: Maybe<Address>;
  /** When the account was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Who created the account */
  createdBy?: Maybe<User>;
  /** The user's Discord username */
  discordUsername?: Maybe<Scalars['String']['output']>;
  /** The user's primary email address */
  email?: Maybe<Scalars['String']['output']>;
  /** The user's first name */
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** The user's last name */
  lastName?: Maybe<Scalars['String']['output']>;
  /** When the user was last online */
  lastOnline?: Maybe<Scalars['String']['output']>;
  /** Is the user currently online */
  online?: Maybe<Scalars['Boolean']['output']>;
  /** The user's primary phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** A photo of the user */
  photo?: Maybe<Scalars['String']['output']>;
  /** Is the user setup */
  setup?: Maybe<Scalars['Boolean']['output']>;
  /** The user's slack handle */
  slackHandle?: Maybe<Scalars['String']['output']>;
  /** The user's ID on Stripe */
  stripeId?: Maybe<Scalars['String']['output']>;
  /** A list of tags that apply to a user */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The user's twitter handle */
  twitterHandle?: Maybe<Scalars['String']['output']>;
  /** The type of user */
  type?: Maybe<Scalars['String']['output']>;
  /** When the account was updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Who updated the account last */
  updatedBy?: Maybe<User>;
};

export type UserFilterInput = {
  /** The project ID users are tied to */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** The role ID users are tied to */
  role?: InputMaybe<Scalars['String']['input']>;
  /** The tags a user must have */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** The filters for filtering users */
export type UserFiltersInput = {
  __typename?: 'UserFiltersInput';
  /** The project ID users are tied to */
  projectId?: Maybe<Scalars['String']['output']>;
  /** The role ID users are tied to */
  role?: Maybe<Scalars['String']['output']>;
  /** The tags a user must have */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Editable user data */
export type UserInput = {
  /** The user's address */
  address?: InputMaybe<AddressInput>;
  /** The user's Discord username */
  discordUsername?: InputMaybe<Scalars['String']['input']>;
  /** The user's primary email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The user's first name */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The user's last name */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** The user's primary phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** A photo of the user */
  photo?: InputMaybe<Scalars['String']['input']>;
  /** The user's slack handle */
  slackHandle?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags that apply to a user */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The user's twitter handle */
  twitterHandle?: InputMaybe<Scalars['String']['input']>;
  /** The type of user */
  type?: InputMaybe<Scalars['String']['input']>;
};

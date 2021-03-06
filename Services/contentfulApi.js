/*
    @brief: this file enables the JS client libraries for contentful
*/

const { createClient } = require('contentful/dist/contentful.browser.min.js');
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// import tokens
import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '../tokens';

export let contentfulClient = null;

// create client
export const getContentfulClient = async () => {
  if (!contentfulClient) {
    console.log('Creating Client for contentful');
    contentfulClient = createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_API_ACCESS_TOKEN,
    });
  }
  console.log('Contentful Client Created!');
  return contentfulClient;
};

// function to get all entries
export const getAllArticleEntries = async () => {
  const client = await getContentfulClient();
  try {
    const entries = await client.getEntries();
    console.log('Contentful Entries Recieved!: ', entries.total);
    return entries.toPlainObject();
  } catch (e) {
    console.warn('Contentful ERROR: ', e);
    return e;
  }
};

// function to get an entry based on id
export const getEntry = async (entryId) => {
  const client = await getContentfulClient();
  try {
    const entry = await client.getEntry(entryId);
    console.log('Entry in api: ', entry);
    return entry;
  } catch (e) {
    console.warn('Contentful ERROR: ', e);
  }
};

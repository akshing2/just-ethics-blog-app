/*
    @brief: this file enables the JS client libraries for contentful
*/

const { createClient } = require('contentful/dist/contentful.browser.min.js');
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// import tokens
import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '../tokens';

export let contentfulClient = null;

// create client
const getContentfulClient = async () => {
  if (!contentfulClient) {
    console.log('Creating Client for contentful');
    contentfulClient = createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_API_ACCESS_TOKEN,
    });
  }
  console.log('Contentful Client: ', contentfulClient);
  return contentfulClient;
};

// function to get all entries
export const getAllArticleEntries = async () => {
  const client = await getContentfulClient();
  try {
    const entries = await client.getEntries();
    console.log('Contentful Entries Recieved!: ', entries.total);
    return entries;
  } catch (e) {
    console.warn('Contentful ERROR: ', e);
    return null;
  }
};

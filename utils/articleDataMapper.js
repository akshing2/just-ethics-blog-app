/*
    @brief: these are a set of functions to enable mapping of data structures.
*/

// @params:
// entries -> (array) array of entry objects from contenful backend
export const mapArticleItemsArray = (entries) => {
  const mappedEntries = [];

  // loop through and remap for return array
  entries.forEach((entry) => {
    //destruct relevant fields
    const {
      fields: {
        title,
        subtitle,
        category,
        body,
        articleThumbnail: {
          fields: {
            file: { url },
          },
        },
      },
      sys: { id },
      //   articleThumbnail: {
      //     fields: {
      //       file: { url },
      //     },
      //   },
    } = entry;

    const mappedEntry = {
      id,
      title,
      subtitle,
      category,
      thubnailUrl: 'https:' + url,
      body,
    };
    mappedEntries.push(mappedEntry);
  });

  return mappedEntries;
};

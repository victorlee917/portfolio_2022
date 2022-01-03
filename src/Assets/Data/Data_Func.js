const getUniqueTags = (header, contents) => {
  let tags = [];
  contents.map((content) => {
    tags = [...tags, ...content.tags];
  });
  const uniqueTags = Array.from(new Set(tags));
  header.tags = [...uniqueTags];
};

const getLastUpdate = (header, contents) => {
  const lastUpdate = {
    date: contents[0].date,
    title: contents[0].title,
    index: contents.length,
  };
  header.lastUpdate = { ...header.lastUpdate, ...lastUpdate };
};

const updateHeader = (header, contents) => {
  getUniqueTags(header, contents);
  getLastUpdate(header, contents);
};

export { updateHeader };

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdBy,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage};

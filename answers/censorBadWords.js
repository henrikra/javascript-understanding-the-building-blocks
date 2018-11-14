const censorBadWords = mySentence => {
  const regEx = /\b\w*shit|fuck\w*\b/gi;
  const censoSentence = mySentence.replace(regEx, '****');
  return censoSentence;
};

module.exports = censorBadWords;

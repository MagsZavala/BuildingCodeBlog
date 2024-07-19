module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_plural: (word, amount) => {
      // Format words to be pluralized if the amount is not 1
      if (amount !== 1) {
        return `${word}s`;
      }
      return word;
    },
    format_url: (url) => {
      // Format URL to be more readable
      return url
        .replace('http://', '')
        .replace('https://', '')
        .replace('www.', '')
        .split('/')[0]
        .split('?')[0];
    },
  };
  
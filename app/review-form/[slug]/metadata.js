export function generateMetadata({ params }) {
    console.log("data from the meta data promes",params)
    function convertHyphenToSpaceAndCapitalize(text) {
      // Split the text based on hyphens
      var words = text.split('-');
  
      // Capitalize the first letter of each word
      for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
  
      // Join the words back together with spaces
      return words.join(' ');
    }
    let pageName = convertHyphenToSpaceAndCapitalize(params);
    return {
      title: `Review Store Form ${pageName}`,
      description: `On this page you can share your review about ${pageName}.`,
      keywords: `${pageName} Review`
    };
  }
  
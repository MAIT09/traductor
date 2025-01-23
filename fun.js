const translations = {
    "es": {
      "en": "Hello",
      "fr": "Bonjour",
      "de": "Hallo",
      "it": "Ciao"
    },
    "en": {
      "es": "Hola",
      "fr": "Bonjour",
      "de": "Hallo",
      "it": "Ciao"
    },
    "fr": {
      "es": "Hola",
      "en": "Hello",
      "de": "Hallo",
      "it": "Ciao"
    },
    "de": {
      "es": "Hola",
      "en": "Hello",
      "fr": "Bonjour",
      "it": "Ciao"
    },
    "it": {
      "es": "Hola",
      "en": "Hello",
      "fr": "Bonjour",
      "de": "Hallo"
    }
  };
  
  function translateText() {
    const inputText = document.getElementById("inputText").value;
    const languageFrom = document.getElementById("languageFrom").value;
    const languageTo = document.getElementById("languageTo").value;
  
    if (inputText.trim() === "") {
      document.getElementById("outputText").value = "Por favor ingresa un texto.";
      return;
    }
  
    const translatedText = translations[languageFrom][languageTo] || "Traducción no disponible.";
    document.getElementById("outputText").value = translatedText;
  }
  
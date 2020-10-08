const loadGMaps = (callback) => {
    const existingScript = document.getElementById('googleMaps');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Adea7629fc5a568c12339c0e2450a4e623a1d4591b22ac43c66f3198bbf948990&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true';
      script.id = 'googleMaps';
      document.getElementById('card_contacts').appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };
  export default loadGMaps;
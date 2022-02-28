import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl';
import {useState, useEffect} from 'react';

const messages = {
  "tr-TR" : {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajınız var"
  },
  "en-TR" : {
    title : "Hello World",
    description: "You have {count} new messages"
  }
}

function App() {

  const isLocale = localStorage.getItem("locale")
  const defaultLocale = isLocale ? isLocale : navigator.language 
  const [locale,setLocale] = useState(defaultLocale)

  useEffect(() => {
    localStorage.setItem("locale",locale)
  },[locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id='title' />
        <p>
          <FormattedMessage id='description' values={{count : 3}} />
        </p>
        <br /><br />
        <button onClick={() => { setLocale("tr-TR")} }>TR</button>
        <button onClick={() => { setLocale("en-TR")} }>EN</button>
      </IntlProvider>
      
    </div>
  );
}

export default App;

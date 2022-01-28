import './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl'
import { useState, useEffect } from 'react';
const messages = {
  'tr': {
    title: 'Merhaba Dünya !',
    desc: '3 yeni mesajınız var'
  },
  'en': {
    title: 'Hello World !',
    desc: 'You have 3 new messages'
  }
}
function App() {
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale)
  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale])
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage
          id="title" />
        <p>
          <FormattedMessage
            id="desc" />
        </p>
        <br />
        <button onClick={() => setLocale('tr')}>TR</button>
        <button onClick={() => setLocale('en')}>EN</button>
      </IntlProvider>

    </div>
  );
}

export default App;

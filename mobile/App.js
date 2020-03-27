import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

// pra iniciar no mobile dá yarn start e depois abre no expo com QR code
import Routes from './src/routes';

export default function App() {
  return (    
    <Routes />
  );
}

/**const styles = StyleSheet.create({
  container: {
    flex: 1, // todo elemento no react native já tem por padrão display:flex, não existe block, inline etc
    backgroundColor: '#7159c1', // usar caixa alta ao invés de hifen nas propriedades css (background-color vira backgroundColor)
    alignItems: 'center', // valores q não são números sempre precisam de aspas simples ou duplas
    justifyContent: 'center',
  },

  text : { // não há herança de estilos, deve-se tag a tag definir o estilo a ser usado. Deve ser feita uma estilização própria por elemento
    color: '#FFF',
    fontSize: 100,
    fontWeight: 'bold'
  },
});*/

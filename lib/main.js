'use babel';

import kintoneAPIProvider from './autocomplete-kintoneapi';
import kintoneRESTAPIProvider from './autocomplete-kintonerest';

export default {

  getProvider() {
    return [kintoneAPIProvider, kintoneRESTAPIProvider];
  }

};

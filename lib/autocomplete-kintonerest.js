'use babel';

import kintoneProvider from './kintoneProvider';
import kintoneRestLists from '../jsons/kintoneRestLists';

class kintoneRESTAPIProvider extends kintoneProvider {
  constructor(selector, displayText, snippet) {
    super(selector);
    this.displayText = "ka";
    this.snippet = "kintone.api(kintone.api.url('${1:URI}', true), '', body, function(resp){\n\n}, function(error){\n\n});";
  }

  getSuggestions(options) {
    const { prefix, editor } = options;
    let text = super.getTextFromRange(editor);
    let methodList = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

    if(prefix.startsWith(this.displayText)) {
      return super.findKintoneFunction( this.displayText, this.snippet, 'kintone.api', 'kintoneRESTAPI');
    }

    if(text.indexOf('kintone.api.url') !== -1 && text.indexOf('true') !== -1) {
      let method = methodList.map((methodText) => {
        return {
          text: methodText,
          iconHTML: '<i class="icon-move-right"></i>'
        }
      });
      return method;
    } else if (text.indexOf('kintone.api.url') !== -1) {
      return super.findKintoneList(prefix, kintoneRestLists);
    }
  }

}

export default new kintoneRESTAPIProvider();

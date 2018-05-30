'use babel';

import kintoneProvider from './kintoneProvider';
import kintoneEventLists from '../jsons/kintoneEventLists';

class kintoneAPIProvider extends kintoneProvider {

  constructor(selector, displayText, snippet) {
    super(selector);
    this.displayText = "ke";
    this.snippet = "kintone.events.on('${1:text}', function(event) {\n\n\treturn event;\n});";
  }

  getSuggestions(options) {
    const { prefix, editor } = options;
    let text = super.getTextFromRange(editor);

    if(prefix.startsWith(this.displayText)) {
      // return this.findMatchingKintoneFunction(prefix);
      return super.findKintoneFunction(this.displayText, this.snippet, 'kintone.events.on', 'kintoneEvents');
    }

    if(text.indexOf('kintone.events.on') !== -1) {
      return super.findKintoneList(prefix, kintoneEventLists);
    }
  }

};


export default new kintoneAPIProvider();

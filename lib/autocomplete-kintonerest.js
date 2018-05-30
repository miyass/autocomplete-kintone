'use babel';

import kintone from '../jsons/kintone';
import { Range } from 'atom';

import kintoneProvider from './kintoneProvider';

class kintoneRESTAPIProvider extends kintoneProvider {
  constructor(selector) {
    super(selector);
  }

  getSuggestions(options) {
    const { prefix, editor } = options;
    let text = super.getTextFromRange(editor);
    let methodList = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

    if(prefix.startsWith('ka')) {
      return this.findMatchingKintoneRESTFunction(prefix);
    }

    if(text.indexOf('kintone.api.url') !== -1 && text.indexOf('true') !== -1) {
      let method = methodList.map((methodText) => {
        return {
          text: methodText,
          iconHTML: '<i class="icon-move-right"></i>'
        }
      })
      return method;
    }

    if(text.indexOf('kintone.api.url') !== -1 && prefix.startsWith('/')) {

    }
  }

  findMatchingKintoneRESTFunction(prefix) {
    let kintones = kintone.map((obj) => {
      return {
        displayText: obj.kinRestDisplaytext,
        snippet: obj.kinRestSnippet,
        iconHTML: '<i class="icon-move-right"></i>',
        type: 'function',
        description: 'kintone.api()',
        rightLabelHTML: '<span class="aab-right-label">kintoneRESTAPI</span>'
      }
    });
    return kintones;
  }
}

export default new kintoneRESTAPIProvider();

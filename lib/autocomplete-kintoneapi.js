'use babel';

import kintoneEvents from '../jsons/kintoneEvents';
import kintone from '../jsons/kintone';

import kintoneProvider from './kintoneProvider';

class kintoneAPIProvider extends kintoneProvider {
  constructor(selector) {
    super(selector);
  }

  getSuggestions(options) {
    const { prefix, editor } = options;
    let text = super.getTextFromRange(editor);

    if(prefix.startsWith('ke')) {
      return this.findMatchingKintoneFunction(prefix);
    }

    if(text.indexOf('kintone.events.on') !== -1) {
      return this.findMatchingKintoneEvents(prefix);
    }

  }

  findMatchingKintoneFunction(prefix) {
    let kintones = kintone.map((obj) => {
      return {
        displayText: obj.kinEveDisplaytext,
        snippet: obj.kinEveSnippet,
        iconHTML: '<i class="icon-move-right"></i>',
        type: 'function',
        description: 'kintone.events.on',
        rightLabelHTML: '<span class="aab-right-label">kintoneEvents</span>'
      }
    });
    return kintones;
  }

  findMatchingKintoneEvents(prefix) {
    let matchingKintoneEvents = kintoneEvents.map((obj) => {
      return {
        text: obj.text,
        iconHTML: '<i class="icon-move-right"></i>',
        description: obj.description,
      }
    });
    return matchingKintoneEvents;
  }
};


export default new kintoneAPIProvider();

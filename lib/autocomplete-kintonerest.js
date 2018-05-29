'use babel';

import kintone from '../jsons/kintone';

class kintoneRESTAPIProvider {
  constructor() {

    this.selector = '.source.js';
    
  }

  getSuggestions(options) {
    const { prefix, editor } = options;

    let endPosition = editor.getCursorScreenPosition();
    let startRow = endPosition.row;
    let getTextRange = new Range([startRow, 0], endPosition);
    let rangeText = editor.getTextInBufferRange(getTextRange);

    if(prefix.startsWith('ka')) {
      return this.findMatchingKintoneRESTFunction(prefix);
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

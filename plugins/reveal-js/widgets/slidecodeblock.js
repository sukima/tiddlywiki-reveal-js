/*\
title: $:/plugins/sukima/reveal-js/widgets/slidecodeblock
type: application/javascript
module-type: widget

Renders Reveal.js compatible codeblocks. Use this is you wish to allow better
line based animations with Reveal.js

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

const CodeBlockWidget = require("$:/core/modules/widgets/codeblock.js").codeblock;
const { assignDataset } = require('$:/plugins/sukima/reveal-js/libs/utils.js');

class SlideCodeblockWidget extends CodeBlockWidget {

	postRender() {
		let { code, language, id, ...dataAttrs } = this.attributes;
		this.domNodes[0].children[0].classList.add(language);
		assignDataset(this.domNodes[0].children[0].dataset, dataAttrs);
		assignDataset(this.domNodes[0].dataset, { id });
		this.domNodes[0].querySelectorAll('table').forEach(t => t.style.border = 'none');
	}

}

exports.slidecodeblock = SlideCodeblockWidget;

})();

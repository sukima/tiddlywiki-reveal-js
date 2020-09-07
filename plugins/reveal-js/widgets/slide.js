/*\
title: $:/plugins/sukima/reveal-js/widgets/slide
type: application/javascript
module-type: widget

A slide for Reveal.js presentation

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

const Widget = require("$:/core/modules/widgets/widget.js").widget;
const { assignDataset } = require('$:/plugins/sukima/reveal-js/libs/utils.js');

class SlideWidget extends Widget {

	render(parent, nextSibling) {
		this.parentDomNode = parent;
		this.computeAttributes();
		this.execute();
		let slideNode = this.document.createElement('SECTION');
		assignDataset(slideNode.dataset, this.attributes);
		this.renderChildren(slideNode);
		parent.insertBefore(slideNode,nextSibling);
		this.domNodes.push(slideNode);
	}

}

exports.slide = SlideWidget;

})();

/*\
title: $:/plugins/sukima/reveal-js/widgets/presentation
type: application/javascript
module-type: widget

Embedded Reveal.js presentation

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

const Widget = require('$:/core/modules/widgets/widget.js').widget;
const { assignDataset } = require('$:/plugins/sukima/reveal-js/libs/utils.js');

class PresentationWidget extends Widget {

	render(parent, nextSibling) {
		let Reveal = require('$:/plugins/sukima/reveal-js/reveal.js');
		this.parentDomNode = parent;
		this.computeAttributes();
		this.execute();
		let revealNode = this.document.createElement('DIV');
		let slidesNode = this.document.createElement('DIV');
		revealNode.classList.add('reveal');
		revealNode.style.height = this.getHeight();
		slidesNode.classList.add('slides');
		this.renderChildren(slidesNode);
		this.pruneErroneousWrappings(slidesNode);
		revealNode.appendChild(slidesNode);
		parent.insertBefore(revealNode,nextSibling);
		this.domNodes.push(revealNode);
		this.revealInstance = new Reveal(revealNode, {
			embedded: true,
			keyboardCondition: 'focused'
		});
		console.log(this.attributes, assignDataset({}, this.attributes));
		this.revealInstance.initialize(assignDataset({}, this.attributes));
	}

	getHeight() {
		let height = this.getAttribute('$height', '400');
		if (/[0-9]$/.test(height)) {
			height = `${height}px`;
		}
		return height;
	}

	pruneErroneousWrappings(root) {
		for (let el of root.children) {
			if (el.tagName === 'SECTION') { continue; }
			let parent = el.parentNode;
			while (el.firstChild && el.firstChild.tagName === 'SECTION') {
				parent.insertBefore(el.firstChild, el);
			}
			parent.removeChild(el);
		}
	}

}

exports.presentation = PresentationWidget;

})();

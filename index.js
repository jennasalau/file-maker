const fs = require('fs');

class FileMaker {

	constructor(spec = {commentPattern: '//', header: null, footer: null}) {
		let empty = '';
		this.buffer = empty;
		this.commentPattern = empty;
		this.header = empty;
		this.footer = empty;

		if (typeof spec === 'string') {
			this.buffer = spec;
		} else if (typeof spec === 'object') {
			this.commentPattern = spec.commentPattern || empty;
			this.header = spec.header || empty;
			this.footer = spec.footer || empty;
		}
	}

	/**
	 * Write indent characters to the buffer (tabs)
	 * @param {int}		[indents=1]		- The number of indents. Defaults to 1.
	 */
	indent(indents = 1) {
		if (indents > 0) {
			for (let i = 0; i < indents; i++) {
				this.write('\t');
			}
		}
	}

	/**
	 * Sets a header for the buffer
	 * @param {string}	header		- The header
	 */
	setHeader(header) {
		this.header = header;
	};

	/**
	 * Sets the footer for the buffer
	 * @param {string}	footer		- The footer
	 */
	setFooter(footer) {
		this.footer = footer;
	};

	/**
	 * Writes to the buffer
	 * @param {string}	line	- The value to write
	 */
	write(line) {
		this.buffer += line;
	}

	/**
	 * Writes a new line to the buffer
	 * @param {string}	[line='']	- The line to write
	 * @param {int}		[indent=0]	- The number of indents for this line. Defaults to 0
	 */
	writeLine(line = '', indent = 0) {
		this.indent(indent);
		this.write(`${line}\n`);
	}

	/**
	 * Writes a comment to the buffer
	 * @param {string}		comment	- The comment
	 */
	writeComment(comment) {
		this.write(`${this.commentPattern} ${comment}`);
	}

	/**
	 * Writes a new comment section to the buffer. Helpful to compartmentalise the file.
	 * @param {string}		heading 		- The section heading
	 * @param {number}		[indent=0]		- Indents for the heading. Defaults to 0.
	 */
	writeNewSection(heading, indent = 0) {
		this.write('\n\n');
		this.indent(indent);
		this.write(`${this.commentPattern} ${heading}\n`);
		this.indent(indent);
		this.write(`${this.commentPattern} --------------------------------\n\n`);
	};

	/**
	 * Returns the current buffer to a string including headers and footers
	 * @returns {string}
	 */
	toString() {
		return `${this.header}\n${this.buffer}\n${this.footer}`;
	}

	/**
	 * Saves the current buffer to a file including headers and footers
	 * @param {string}		path	- The path to save the file to
	 * @param {function}	onError	- Callback for any errors encountered while saving the file
	 */
	saveTo(path, onError) {
		fs.writeFile(path, this.toString(), function (err) {
			if(err) {
				if (typeof onError === 'function') {
					onError(err);
				} else {
					throw(err);
				}
			}
		});
	}
}

module.exports = FileMaker;
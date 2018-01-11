# File Maker

Handy utility for easily creating new files.

## Installing

Install with Node Package Manager (NPM)

```
npm install --save file-maker
```

## Getting Started

Simple and easy to use

```js
var FileMaker = require('file-maker');

var myFile = new FileMaker();
myFile.writeLine('Hey this is my file!');
myFile.saveTo('./MyFile.txt');
```

**Setting some options**

You can configure some options such as a the *comment pattern*, *header* & *footer*.

For example, when creating a bash script file:

```js
var FileMaker = require('file-maker');

var myFile = new FileMaker({
    commentPattern: '#',
    header: '#!/bin/bash',
    footer: 'echo "Script completed"'
});
myFile.writeNewSection('Setting some variables');
myFile.writeLine('COLOUR="black"');
myFile.saveTo('./MyFile.sh');
```

or you can make a file with an existing string/file:

```js
var myFile = new FileMaker('An existing string to start with!');
```

or

```js
var myFile = new FileMaker(fs.readFileSync('./Path/to/existing/file.txt', 'utf8'));
```


## API

### setHeader

Sets a header for the output buffer.

Example, set a tip at the top of the file

```js
myFile.setHeader('// This file is auto generated. Changes will be banished.');
```

### setFooter

Sets a footer for the output buffer.

Example, set the date created at the bottom of the file.

```js
myFile.setFooter('var dateCreated="' + Date.now().toString() + '"');
```

### indent

Write indent characters to the buffer (tabs)

Example, Indent the current buffer line with two tabs

```js
myFile.indent(2);
```

### write

Write directly to the buffer

Example, Write a winky face

```js
myFile.write(';)');
```

### writeLine

Writes a line to the buffer and any further writes will be on the next line.

Example

```js
myFile.writeLine('This text will only appear on one line.');
```
It accepts indents as the second argument too (defaults to 0):

```js
myFile.writeLine('This text will only appear on one line but indented with two tabs.', 2);
```

### writeComment

Writes a comment to the buffer. 

Example

```js
myFile.writeComment('This will appear as a comment in the file.');
```

### writeNewSection

Writes a new comment section to the buffer with a heading. 

Example

```js
myFile.writeNewSection('This my new section in this file.');
```

### toString

Returns the current buffer as string including the header and footer.

Example

```js
myFile.toString();
```

### saveTo

Saves the current buffer to a physical file.

Example

```js
myFile.saveTo('./my-file.txt');
```

## LICENSE (BSD-3-Clause)
Copyright (C) 2016, Jenna Salau. All rights reserved.

File Maker can be downloaded from: https://github.com/jennasalau/file-maker

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its contributors
may be used to endorse or promote products derived from this software without
specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


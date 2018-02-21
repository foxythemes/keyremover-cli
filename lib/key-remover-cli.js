#!/usr/bin/env node

"use strict";

// Include native libs
const fs = require('fs');
const path = require('path');

// Include extrernal libs
const commandLineArgs = require( 'command-line-args' );

// Declare CLI options
const optionDefinitions = [
  { name: 'src', alias: 's', type: String },
  { name: 'dest', alias: 'd', type: String },
  { name: 'key', alias: 'k', type: Array }
];

// CLI arguments lib
const options = commandLineArgs( optionDefinitions, { partial: true } );

// Get 'src' and 'dest' Json
var src = require( path.join(process.cwd(), options.src) );

// Remove object from Json file
delete src[options.key];

// Create result content
fs.writeFile( options.dest, JSON.stringify( src, null, 2 ), function( err ) {
  if( err ) return console.error( err );
  console.log( ' The key ' + options.key + ' was removed from ' + options.dest );
});
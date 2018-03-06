#!/usr/bin/env node

var fs = require("fs");
var program = require('commander');

var name

program
    .arguments('<componentName>')
    .option('-b, --blank-material', 'Create a blank component')
    .action (function(componentName){
    name = componentName
});

program.parse(process.argv)

var test= fs.readFileSync(name, 'utf8')

var regex0 = new RegExp(/<\!--[\..\s\S]*-->/g)
var regex1 = new RegExp(/-([a-z])/g)
var regex2 = new RegExp(/\bxmlns[:=][\w"=\\.\-/:#\d]*/g)
var regex3 = new RegExp(/<metadata[\..\s\S]*metadata>/g)
var regex4 = new RegExp(/xml:.*?"\s/g)
var regex5 = new RegExp(/style=.*?"\s/g)

test=test
.replace(regex0, function(match, p1, offset, string){ return ""})
.replace(regex1, function(match, p1, offset, string){return p1.toUpperCase()})
.replace(regex2, function(match, p1, offset, string){ return ""})
.replace(regex3, function(match, p1, offset, string){ return ""})
.replace(regex4, function(match, p1, offset, string){ return ""})
.replace(regex5, function(match, p1, offset, string){ return ""})


var svgName = name.replace('./', './svg-')
fs.writeFileSync(svgName, test)


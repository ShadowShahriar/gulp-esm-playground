/** @format */

import gulp from 'gulp'
const { src, dest } = gulp

import { particle } from './commons.js'
const cmd = process.argv

function copy() {
	return src('commons.js').pipe(dest('copied'))
}

console.log(cmd.includes('--verbose'))
console.log(particle(cmd))

export let test = copy

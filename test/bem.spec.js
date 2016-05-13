'use strict';
const expect = require('chai').expect;

describe('BEM Query', function(){

	it('Should accept a selector and return a new Bem object');

	it('Should accept a node and return a new Bem object');

	it('Should throw an error if given an invalid selector');

	describe('find', () => {

		it('Should be able to find a nested node and return a Bem object');

		it('Should be able to find a group of nested nodes and return a Bem object');
	});

	describe('modify', () => {

		it('Should be able to apply a modifier class');

		it('Should be able to remove a modifier class');

		it('Should be able to toggle a modifier class');

	});

	describe('events', () => {

		it('Should be able to add an event listener');

		it('Should be able to add an event listener to each node in a collection');

		it('Should be able to add a delegated event listener');

		it('Should be able to remove all listeners for an event');
	})

});

import { Component1, Component2, ConcreteMediator } from '../src/behavioral/Mediator/Mediator';

const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

console.log('Client triggers operation A.');
c1.doA();

console.log('');

console.log('Client triggers operation B.');
c1.doB();
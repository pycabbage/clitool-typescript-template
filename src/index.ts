#!/usr/bin/env node

import {add} from "./calc";

console.log("Hello World!");
console.log(add(1, 2));
process.argv.forEach((_)=>console.log(_));

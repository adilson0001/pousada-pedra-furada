// jest.setup.js
require("@testing-library/jest-dom");
// 膆 Silencia o warning do React sobre JSX transform antigo
const originalWarn = console.warn;

import { TextEncoder, TextDecoder } from "util";
if (!global.TextEncoder) global.TextEncoder = TextEncoder;
if (!global.TextDecoder) global.TextDecoder = TextDecoder; 
console.warn = (...args) => {
 if (
 typeof args[0] === "string" &&
 args[0].includes("using an outdated JSX transform")
 ) {
 return;
 }
 originalWarn(...args);
}; 

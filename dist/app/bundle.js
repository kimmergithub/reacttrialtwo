/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/app/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************!*\
  !*** ./Javascript/app/scripts.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nalert ('it works!')\n\n__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./module1.js\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./module2.js\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\n// instructions\n//\n// FUNfunFUNfunctions === REACT\n//\n// TERMINAL PLUS package\n// https://atom.io/packages/terminal-plus\n//\n//===============\n// NET Ninja\n//===============\n//\n// DOWNLOAD nodejs\n// download cmder (for windows) ... this is command line editor.\n//\n// npm init ===> get package.json file.\n\n// npm install -S react react-dom\n\n// npm install babel stuff ===\n// NOTE npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev\n// save these to the dev dependencies...\n//\n// NOTE npm install webpack webpack-dev-server --save-dev\n// save these also to the dev dependencies\n//\n// NOTE create your webpack.config.js file... right click or touch it...\n//\n// NOTE copy gist from this file link...\n// NOTE https://gist.github.com/iamshaunjp/a1c8fb653ddd5d27c3e38ab55e3c0a44\n//\n// NOTE https://www.youtube.com/watch?v=f7TmMBMLJ90 === WEBPACK tutorials...\n//\n//NOTE in the package.json file add ===\n// \"start\": \"npm run build\",\n// \"build\": \"webpack -d && webpack-dev-server --content-base src/ --inline --hot --port 1234\"\n// so we have quick commnads.  MAKE SURE YOU PAY ATTENTION TO THE PATHs!!!\n//\n// NOTE now you are linking so your alert runs to the scripts / BUNDLE! file form the config...\n// <script src=\"/app/bundle.js\"></script>\n//\n// then go to the packages --- go to tree view and uncheck HIDE VCS ignored Files\n// NOTE npm start\n//\n//LINKS WILL BE AT THE BOTTOM -- There is a quick way but we're going to do this the slow way.\n\n// LINKS:\n// Published on Oct 13, 2016\n// Hey ninjas, in this React tutorial I'll be showing you how to set up a basic work space for React using Webpack. I'll show you how to use the NPM to install React (and React DOM) as well as how to configure webpack to run with Babel.\n//\n// webpack config gist - https://gist.github.com/iamshaunjp/a1...\n//\n// ----- COURSE LINKS:\n// + Repo - https://github.com/iamshaunjp/react-p...\n// + Atom editor - https://atom.io/a\n// + Download GIT - https://git-scm.com/\n// + CMDER - http://cmder.net/\n//\n// JS Playlist - https://www.youtube.com/playlist?list...\n//\n// HTML Playlist - https://www.youtube.com/playlist?list...\n//\n// NODEJS Playlist - https://www.youtube.com/playlist?list...\n//\n//\n// ---------------------------------------------------------------------------------------------\n// You can find more front-end development tutorials on CSS, HTML, JavaScript, jQuery, WordPress & more on the channel homepage...\n//\n// SUBSCRIBE TO CHANNEL - https://www.youtube.com/channel/UCW5Y...\n//\n// ========== PSD to WordPress Playlist ==========\n//\n// https://www.youtube.com/playlist?list...\n//\n// ============ Node.js for Beginners Playlist =============\n//\n// https://www.youtube.com/playlist?list...\n//\n// ============== The Net Ninja =====================\n//\n// For more front-end development tutorials & to black-belt your coding skills, head over to - https://www.youtube.com/channel/UCW5Y... or http://thenetninja.co.uk\n//\n// ================== Social Links ==================\n//\n// Twitter - @TheNetNinja - https://twitter.com/thenetninjauk\n\n//\n\n//===============\n// in TERMINAL\n//=============== // HAD ERRORS\n// WEBPACK TUTORIAL:  https://www.youtube.com/watch?annotation_id=annotation_4139363737&feature=iv&src_vid=MhkGQAoc7bc&v=9kJVYpOqcVU\n// npm init\n// npm install -s webpack\n// npmm install -g webpack ==== installs is globally\n// touch webpack.config.js\n// got to this link and copy configurations into webpack.config.js\n// LINK:  https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3\n// make sure the webpack config file paths are correct, the run webpack\n// TERMINAL command === webpack\n\n// NODE_ENV=production webpack ===> this will put the code into production mode? and minify the min?\n//\n//\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0phdmFzY3JpcHQvYXBwL3NjcmlwdHMuanM/YTZiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmFsZXJ0ICgnaXQgd29ya3MhJylcblxucmVxdWlyZSgnLi9tb2R1bGUxLmpzJyk7XG5yZXF1aXJlKCcuL21vZHVsZTIuanMnKTtcblxuLy8gaW5zdHJ1Y3Rpb25zXG4vL1xuLy8gRlVOZnVuRlVOZnVuY3Rpb25zID09PSBSRUFDVFxuLy9cbi8vIFRFUk1JTkFMIFBMVVMgcGFja2FnZVxuLy8gaHR0cHM6Ly9hdG9tLmlvL3BhY2thZ2VzL3Rlcm1pbmFsLXBsdXNcbi8vXG4vLz09PT09PT09PT09PT09PVxuLy8gTkVUIE5pbmphXG4vLz09PT09PT09PT09PT09PVxuLy9cbi8vIERPV05MT0FEIG5vZGVqc1xuLy8gZG93bmxvYWQgY21kZXIgKGZvciB3aW5kb3dzKSAuLi4gdGhpcyBpcyBjb21tYW5kIGxpbmUgZWRpdG9yLlxuLy9cbi8vIG5wbSBpbml0ID09PT4gZ2V0IHBhY2thZ2UuanNvbiBmaWxlLlxuXG4vLyBucG0gaW5zdGFsbCAtUyByZWFjdCByZWFjdC1kb21cblxuLy8gbnBtIGluc3RhbGwgYmFiZWwgc3R1ZmYgPT09XG4vLyBOT1RFIG5wbSBpbnN0YWxsIGJhYmVsLWNvcmUgYmFiZWwtbG9hZGVyIGJhYmVsLXByZXNldC1lczIwMTUgYmFiZWwtcHJlc2V0LXJlYWN0IC0tc2F2ZS1kZXZcbi8vIHNhdmUgdGhlc2UgdG8gdGhlIGRldiBkZXBlbmRlbmNpZXMuLi5cbi8vXG4vLyBOT1RFIG5wbSBpbnN0YWxsIHdlYnBhY2sgd2VicGFjay1kZXYtc2VydmVyIC0tc2F2ZS1kZXZcbi8vIHNhdmUgdGhlc2UgYWxzbyB0byB0aGUgZGV2IGRlcGVuZGVuY2llc1xuLy9cbi8vIE5PVEUgY3JlYXRlIHlvdXIgd2VicGFjay5jb25maWcuanMgZmlsZS4uLiByaWdodCBjbGljayBvciB0b3VjaCBpdC4uLlxuLy9cbi8vIE5PVEUgY29weSBnaXN0IGZyb20gdGhpcyBmaWxlIGxpbmsuLi5cbi8vIE5PVEUgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaWFtc2hhdW5qcC9hMWM4ZmI2NTNkZGQ1ZDI3YzNlMzhhYjU1ZTNjMGE0NFxuLy9cbi8vIE5PVEUgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1mN1RtTUJNTEo5MCA9PT0gV0VCUEFDSyB0dXRvcmlhbHMuLi5cbi8vXG4vL05PVEUgaW4gdGhlIHBhY2thZ2UuanNvbiBmaWxlIGFkZCA9PT1cbi8vIFwic3RhcnRcIjogXCJucG0gcnVuIGJ1aWxkXCIsXG4vLyBcImJ1aWxkXCI6IFwid2VicGFjayAtZCAmJiB3ZWJwYWNrLWRldi1zZXJ2ZXIgLS1jb250ZW50LWJhc2Ugc3JjLyAtLWlubGluZSAtLWhvdCAtLXBvcnQgMTIzNFwiXG4vLyBzbyB3ZSBoYXZlIHF1aWNrIGNvbW1uYWRzLiAgTUFLRSBTVVJFIFlPVSBQQVkgQVRURU5USU9OIFRPIFRIRSBQQVRIcyEhIVxuLy9cbi8vIE5PVEUgbm93IHlvdSBhcmUgbGlua2luZyBzbyB5b3VyIGFsZXJ0IHJ1bnMgdG8gdGhlIHNjcmlwdHMgLyBCVU5ETEUhIGZpbGUgZm9ybSB0aGUgY29uZmlnLi4uXG4vLyA8c2NyaXB0IHNyYz1cIi9hcHAvYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4vL1xuLy8gdGhlbiBnbyB0byB0aGUgcGFja2FnZXMgLS0tIGdvIHRvIHRyZWUgdmlldyBhbmQgdW5jaGVjayBISURFIFZDUyBpZ25vcmVkIEZpbGVzXG4vLyBOT1RFIG5wbSBzdGFydFxuLy9cbi8vTElOS1MgV0lMTCBCRSBBVCBUSEUgQk9UVE9NIC0tIFRoZXJlIGlzIGEgcXVpY2sgd2F5IGJ1dCB3ZSdyZSBnb2luZyB0byBkbyB0aGlzIHRoZSBzbG93IHdheS5cblxuLy8gTElOS1M6XG4vLyBQdWJsaXNoZWQgb24gT2N0IDEzLCAyMDE2XG4vLyBIZXkgbmluamFzLCBpbiB0aGlzIFJlYWN0IHR1dG9yaWFsIEknbGwgYmUgc2hvd2luZyB5b3UgaG93IHRvIHNldCB1cCBhIGJhc2ljIHdvcmsgc3BhY2UgZm9yIFJlYWN0IHVzaW5nIFdlYnBhY2suIEknbGwgc2hvdyB5b3UgaG93IHRvIHVzZSB0aGUgTlBNIHRvIGluc3RhbGwgUmVhY3QgKGFuZCBSZWFjdCBET00pIGFzIHdlbGwgYXMgaG93IHRvIGNvbmZpZ3VyZSB3ZWJwYWNrIHRvIHJ1biB3aXRoIEJhYmVsLlxuLy9cbi8vIHdlYnBhY2sgY29uZmlnIGdpc3QgLSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9pYW1zaGF1bmpwL2ExLi4uXG4vL1xuLy8gLS0tLS0gQ09VUlNFIExJTktTOlxuLy8gKyBSZXBvIC0gaHR0cHM6Ly9naXRodWIuY29tL2lhbXNoYXVuanAvcmVhY3QtcC4uLlxuLy8gKyBBdG9tIGVkaXRvciAtIGh0dHBzOi8vYXRvbS5pby9hXG4vLyArIERvd25sb2FkIEdJVCAtIGh0dHBzOi8vZ2l0LXNjbS5jb20vXG4vLyArIENNREVSIC0gaHR0cDovL2NtZGVyLm5ldC9cbi8vXG4vLyBKUyBQbGF5bGlzdCAtIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXlsaXN0P2xpc3QuLi5cbi8vXG4vLyBIVE1MIFBsYXlsaXN0IC0gaHR0cHM6Ly93d3cueW91dHViZS5jb20vcGxheWxpc3Q/bGlzdC4uLlxuLy9cbi8vIE5PREVKUyBQbGF5bGlzdCAtIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXlsaXN0P2xpc3QuLi5cbi8vXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBZb3UgY2FuIGZpbmQgbW9yZSBmcm9udC1lbmQgZGV2ZWxvcG1lbnQgdHV0b3JpYWxzIG9uIENTUywgSFRNTCwgSmF2YVNjcmlwdCwgalF1ZXJ5LCBXb3JkUHJlc3MgJiBtb3JlIG9uIHRoZSBjaGFubmVsIGhvbWVwYWdlLi4uXG4vL1xuLy8gU1VCU0NSSUJFIFRPIENIQU5ORUwgLSBodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDVzVZLi4uXG4vL1xuLy8gPT09PT09PT09PSBQU0QgdG8gV29yZFByZXNzIFBsYXlsaXN0ID09PT09PT09PT1cbi8vXG4vLyBodHRwczovL3d3dy55b3V0dWJlLmNvbS9wbGF5bGlzdD9saXN0Li4uXG4vL1xuLy8gPT09PT09PT09PT09IE5vZGUuanMgZm9yIEJlZ2lubmVycyBQbGF5bGlzdCA9PT09PT09PT09PT09XG4vL1xuLy8gaHR0cHM6Ly93d3cueW91dHViZS5jb20vcGxheWxpc3Q/bGlzdC4uLlxuLy9cbi8vID09PT09PT09PT09PT09IFRoZSBOZXQgTmluamEgPT09PT09PT09PT09PT09PT09PT09XG4vL1xuLy8gRm9yIG1vcmUgZnJvbnQtZW5kIGRldmVsb3BtZW50IHR1dG9yaWFscyAmIHRvIGJsYWNrLWJlbHQgeW91ciBjb2Rpbmcgc2tpbGxzLCBoZWFkIG92ZXIgdG8gLSBodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDVzVZLi4uIG9yIGh0dHA6Ly90aGVuZXRuaW5qYS5jby51a1xuLy9cbi8vID09PT09PT09PT09PT09PT09PSBTb2NpYWwgTGlua3MgPT09PT09PT09PT09PT09PT09XG4vL1xuLy8gVHdpdHRlciAtIEBUaGVOZXROaW5qYSAtIGh0dHBzOi8vdHdpdHRlci5jb20vdGhlbmV0bmluamF1a1xuXG4vL1xuXG4vLz09PT09PT09PT09PT09PVxuLy8gaW4gVEVSTUlOQUxcbi8vPT09PT09PT09PT09PT09IC8vIEhBRCBFUlJPUlNcbi8vIFdFQlBBQ0sgVFVUT1JJQUw6ICBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD9hbm5vdGF0aW9uX2lkPWFubm90YXRpb25fNDEzOTM2MzczNyZmZWF0dXJlPWl2JnNyY192aWQ9TWhrR1FBb2M3YmMmdj05a0pWWXBPcWNWVVxuLy8gbnBtIGluaXRcbi8vIG5wbSBpbnN0YWxsIC1zIHdlYnBhY2tcbi8vIG5wbW0gaW5zdGFsbCAtZyB3ZWJwYWNrID09PT0gaW5zdGFsbHMgaXMgZ2xvYmFsbHlcbi8vIHRvdWNoIHdlYnBhY2suY29uZmlnLmpzXG4vLyBnb3QgdG8gdGhpcyBsaW5rIGFuZCBjb3B5IGNvbmZpZ3VyYXRpb25zIGludG8gd2VicGFjay5jb25maWcuanNcbi8vIExJTks6ICBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9sZWFybmNvZGVhY2FkZW15LzI1MDkyZDhmMWRhZjVlNGE2ZmQzXG4vLyBtYWtlIHN1cmUgdGhlIHdlYnBhY2sgY29uZmlnIGZpbGUgcGF0aHMgYXJlIGNvcnJlY3QsIHRoZSBydW4gd2VicGFja1xuLy8gVEVSTUlOQUwgY29tbWFuZCA9PT0gd2VicGFja1xuXG4vLyBOT0RFX0VOVj1wcm9kdWN0aW9uIHdlYnBhY2sgPT09PiB0aGlzIHdpbGwgcHV0IHRoZSBjb2RlIGludG8gcHJvZHVjdGlvbiBtb2RlPyBhbmQgbWluaWZ5IHRoZSBtaW4/XG4vL1xuLy9cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vSmF2YXNjcmlwdC9hcHAvc2NyaXB0cy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
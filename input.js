const { KEY, NAME } = require("./constants");

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //handleUserInput function
  const handleUserInput = function (key) {
    // your code here
    if (key === KEY.exit) {
      console.log('Process is exixting.')
      process.exit();
    }
    else if(key === KEY.up) conn.write("Move: up");
    else if(key === KEY.down) conn.write("Move: down");
    else if(key === KEY.left) conn.write("Move: left");
    else if(key === KEY.right) conn.write("Move: right");
    // Speak words to ppl when press 'B'
    else if(key === KEY.speak) conn.write(`Say: Hello I am ${NAME}`);

    // // code for detecting key
    // function toUnicode(theString) {
    //   var unicodeString = '';
    //   for (var i = 0; i < theString.length; i++) {
    //     var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
    //     while (theUnicode.length < 4) {
    //       theUnicode = '0' + theUnicode;
    //     }
    //     theUnicode = '\\u' + theUnicode;
    //     unicodeString += theUnicode;
    //   }
    //   return unicodeString;
    // }
    // stdin.on('data', function (key) {
    //   console.log(toUnicode(key)); //Gives you the unicode of the pressed key
    //   if (key == '\u0003') { process.exit(); }    // ctrl-c
    // });
    // // ends here

  };

  // register an event listener for stdin
  stdin.on("data", handleUserInput);


  return stdin;
};

module.exports = { setupInput };

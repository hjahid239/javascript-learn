let myName = "zahid hasan";
myName.slice(0, 5); // returns "zahid"
myName.substring(0, 5); // returns "zahid"
myName.replace("zahid", "nahid"); // returns "nahid hasan"
myName.toUpperCase(); // returns "ZAHID HASAN"
myName.toLowerCase(); // returns "zahid hasan"
myName.concat(" is a developer"); // returns "zahid hasan is a developer"
myName.padStart(13, "a "); // returns " a zahid hasan"
myName.padEnd(20, " is a developer"); // returns "zahid hasan is a developer"
myName.trim(); // returns "zahid hasan"
myName.charAt(0); // returns "z"
myName.charCodeAt(0); // returns 122
myName.at(0); // returns "z"
myName.split(" "); // returns ["zahid", "hasan"]
myName.includes("zahid"); // returns true
myName.repeat(3); // returns "zahid hasanzahid hasanzahid hasan"
myName.startsWith("zahid"); // returns true
myName.endsWith("hasan"); // returns true
myName.indexOf("h"); // returns 1
myName.lastIndexOf("h"); // returns 7
myName.search("h"); // returns 1
myName.match(/h/g); // returns ["h", "h"]

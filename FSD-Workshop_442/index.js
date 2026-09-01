const { EventEmitter } = require("node:events");

const task = new EventEmitter();

task.on("greet", (name) => {
    console.log(`Hello, ${name}! Welcome to the session.`);
});

task.on("exit", (reason) => {
    console.log(`Session ending. Reason: ${reason}`);
});

task.on("greet", () => {
    console.log("Class started by Devanshi sharma");
});

task.on("exit", () => {
    console.log("Class finished by Devanshi sharma");
});

task.emit("greet", "students");
task.emit("exit", "class time over");
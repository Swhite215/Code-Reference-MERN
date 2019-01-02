var conductor = require("./Conductor");
var { ExitCommand, CreateCommand, DeleteCommand } = require("./Commands");

var { createInterface } = require("readline");
var rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("create <fileName> <text> | history | undo | redo | exit");
rl.prompt();

rl.on("line", input => {
    var [commandText, ...remaining] = input.split(" ");
    var [fileName, ...fileText] = remaining;
    var text = fileText.join(" ");

    switch (commandText) {
        case "exit":
            conductor.run(new ExitCommand());
            break;
        case "create":
            conductor.run(new CreateCommand(fileName, text));
            break;
        case "delete":
            conductor.run(new DeleteCommand(fileName));
            break;
        case "history":
            conductor.printHistory();
            break;
        case "undo":
            conductor.undo();
            break;
        case "redo":
            conductor.redo();
            break;
        default:
            console.log(`${commandText} command not found!`);
    }

    rl.prompt();
});

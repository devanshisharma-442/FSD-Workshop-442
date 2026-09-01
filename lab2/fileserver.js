
import fs from "node:fs/promises";

const filePath = "data.txt";

async function createFile(content) {
    try {
        await fs.writeFile(filePath, content, "utf8");
        console.log("File created successfully");
    } catch (error) {
        console.error("Error creating file:", error);
    }
}

async function readFile() {
    try {
        const data = await fs.readFile(filePath, "utf8");
        console.log(`File content: ${data}`);
        return data;
    } catch (error) {
        if (error.code === "ENOENT") {
            console.error("File not found. Please create the file first.");
        } else {
            console.error("Error reading file:", error);
        }
    }
}

async function main() {
    await createFile("Hello, this is my first file!");
    await readFile();
}

main();
```

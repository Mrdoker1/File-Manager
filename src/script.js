const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const yargs = require('yargs');

class FileManager {
    constructor(username) {
        this.username = username;
        this.currentDir = os.homedir();
    }

    up() {
        // code to go up from the current directory
    }

    cd(pathToDirectory) {
        // code to go to the specified directory
    }

    list() {
        // code to list files and folders in the current directory
    }

    // other methods for performing file operations,
    // getting host machine information,
    // performing hash calculations, and
    // compressing and decompressing files
}

const username = yargs.argv.username;
const fileManager = new FileManager(username);

console.log(`Welcome to the File Manager, ${username}!`);

// prompt user for commands and execute them
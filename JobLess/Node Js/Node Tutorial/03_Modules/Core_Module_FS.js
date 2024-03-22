const fileSystem = require('fs');

// Handling Paths
const path = require('path');
console.log(path); // Output : return all the function provided by path
const current_directory_path = path.join(__dirname,'temp.txt');
console.log(current_directory_path);  // Output : D:\My Learning\Node Js\Node\03_modules\join folder or file

// 1.Reading File :  The fs.readFile(filePath,function(error,data)) method is used to read files on your computer.
const format = 'utf-8';
fileSystem.readFile(current_directory_path,format,(error,data)=>{
    console.log("Reading : ",data);
})


// 2. Writing File : The fs.writeFile(filePath,DataToWrite,Error Function) method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created.
const data_to_write = "Writing Data to a file";
fileSystem.writeFile(current_directory_path,data_to_write,(error)=>{
    console.log(error);
})

// 3. Appending File : The fs.appendFile(filePath,dataToAppend,Error Function) method appends the specified content at the end of the specified file
const data_to_append = "Appending new content data";
fileSystem.appendFile(current_directory_path,data_to_append,(error)=>{
    console.log(error);
})


// 4. Renaming File : The fs.rename(filePath,NewName,Error Function) method renames the specified file.
const new_file_name = "temp2.txt";
fileSystem.rename(current_directory_path,new_file_name,(error)=>{
    console.log(error);
})

// 5. Deleting File : The fs.unlink(filePath,Error Function) method deletes the specified file
fileSystem.unlink(current_directory_path,(error)=>{
    console.log(error);
})
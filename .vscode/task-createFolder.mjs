// const inquirer = require('inquirer'); // Dependency for prompts
   // const fs       = require 'fs/promises';       // Dependency for file system operations
   import { create } from 'domain';
   import { promises as fs } from 'fs';
   import { createInterface } from 'node:readline/promises';
   var readline = createInterface( { input: process.stdin, output: process.stdout } );

async function createFolder( aFolderName ) {
/*
  const { folderName } = await inquirer.prompt({
    type: 'input',
    name: 'folderName',
    message: 'Enter the name of the folder to create:',
  });
*/
  try {
//        fs.mkdirSync(      aFolderName, { recursive: true } ); // Use promises for cleaner async handling
//  await fs.promises.mkdir( aFolderName, { recursive: true } ); // Use promises for cleaner async handling
    await fs.mkdir(          aFolderName, { recursive: true } ); // Use promises for cleaner async handling
//  console.log(`  Folder "${aFolderName}" created successfully!`);
    console.log(`  Created Folder, "${aFolderName}", successfully!`);

    var aAppName  =  aFolderName.replace( /(client[0-9]+|server[0-9]+)\//, '')
    await fs.mkdir( `docs/${aAppName}` ); 
    
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project</title>
</head>
<body>
  <h1>Welcome to your new project!</h1>
</body>
</html>`;

//        fs.writeFileSync(      `${aFolderName}/index.html`, htmlContent);
//  await fs.promises.writeFile( `${aFolderName}/index.html`, htmlContent);
    await fs.writeFile(          `${aFolderName}/index.html`, htmlContent);

    console.log(`  Created an initial file, "index.html", inside the folder.`);
  } catch (error) {
    console.error(`* Error creating folder: ${error.message}`);
  }
}
// --------------------------------------------------------------
    console.log( "" );
var aFolderName = process.argv[2] 
// aFolderName = "c36_calendar"

if (aFolderName === undefined || aFolderName == null) { 
    aFolderName = await readline.question('  Enter the name of the folder to create: ' )
if (aFolderName == "") { 
    console.log( "* You must enter a folder name.")
    process.exit(1); 
    }  }

if (aFolderName.match(/[cs][0-9]{2}_[a-z-]+/)) { 
var aStage      = `${ aFolderName.slice(0,1) == 'c' ? 'client' : 'server' }${aFolderName.slice(1,2)}` 
    aFolderName = `${ aStage }/${ aFolderName }`.toLowerCase()
} else {
    console.log( "* You must enter a folder name as c##_name-of-app, or s##_name-of-api.")
    process.exit(1); 
    }

if (aFolderName.slice(0,1) == "c" &&  aFolderName.match( /-app$/ ) == null ) { aFolderName = `${aFolderName}-app` }
if (aFolderName.slice(0,1) == "s" &&  aFolderName.match( /-api$/ ) == null ) { aFolderName = `${aFolderName}-api` }

//  console.log( "  Creating FolderName:", aFolderName )

    await createFolder( aFolderName );
    process.exit(0)








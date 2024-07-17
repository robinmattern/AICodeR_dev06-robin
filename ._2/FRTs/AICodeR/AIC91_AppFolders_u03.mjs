// const inquirer = require('inquirer'); // Dependency for prompts
// const    fs           = require 'fs/promises';       // Dependency for file system operations
// import { promises as fs  } from 'fs';   
// import { create          } from 'domain';
// import { createInterface } from 'node:readline/promises';
   import   AIM               from './AIC98_Models_u01.mjs'   // not ../._2/FRTs/AICodeR/AIC98_Models_u01.mjs';
   import   FRT               from './AIC90_FileFns.mjs'

//    var  readline        =  createInterface( { input: process.stdin, output: process.stdout } );
       var  getModel        =  AIM.getModel 

//          main( 'c42_whatever' ) 
//          main( 'c42_whatever', 17 ) 
            main(  ) 

     async  function  main( aAppName, aModel ) {   
            console.log( "" );

       var  aAppName        =  aAppName ? aAppName : process.argv[2] 
       var  aModel          =  aModel   ? aModel   : process.argv[3] 
//          aAppName        = "c36_calendar-app"

        if (aAppName === undefined || aAppName == null) { 
            aAppName        =  await readline.question('  Enter the name of the app folder to create: '  )
        if (aAppName == "") { 
            console.log(    "* You must enter an app folder name.")
            process.exit(1); 
            }  }
        if (aAppName.match(/[cs][0-9]{2}_[a-z-]+/)) { 
       var  aStage          = `${ aAppName.slice(0,1) == 'c' ? 'client' : 'server' }${aAppName.slice(1,2)}` 
            aAppName        = `${ aStage }/${ aAppName }`.toLowerCase()
        if (aAppName.slice(0,1) == "c" &&  aAppName.match( /-app$/ ) == null ) { aAppName = `${aAppName}-app` }
        if (aAppName.slice(0,1) == "s" &&  aAppName.match( /-api$/ ) == null ) { aAppName = `${aAppName}-api` }
        } else {
            console.log(    "* You must enter an app folder name as c##_name-of-app, or s##_name-of-api.")
            process.exit(1); 
            }
            aModel                    =  await ask4Model( aModel )
        if (aModel == "") { aModel    =  await ask4Model( aModel ) }
//      if (aModel == "") { console.log( "exiting"); process.exit(1) }

            console.log( `  Creating app folders for: "${aAppName}/${aModel}"` )   

            await createAppFolders( aAppName, aModel );
            process.exit(0)
            } // eof main 
// --------------------------------------------------------------    
     async  function ask4Model( aModel ) {   

            aModel = (aModel === undefined || aModel == null) ? "" : aModel 
        if (aModel == "") {
            aModel    =  await readline.question('  Enter a Model to use for this app (or help): ' )
            }
        if (aModel == "") { 
            console.log( "* You must enter a model name.")
            process.exit(1)
            } 
            aModel == aModel == 'help' ? "" : aModel 
        if (isNaN(aModel) == false) { 
            aModel    =  getModel( 1, aModel )
        } else {
        if (aModel > "") { 
            aModel    =  getModel( 2, aModel.toLowerCase() )
            }   }  
        if (aModel != "") { aModel =  aModel[2] } 
        if (aModel == "") { 
            console.log(    "  Enter a Model No. or Alias from this list:")
            console.log(       getModel( ).map( aRec => "  " + aRec.join( "  " ) ).join ( "\n" ) )
            console.log( "\n* You must enter a model name.")
            }
    return  aModel        
            }  // eof ask4Model 
// --------------------------------------------------------------    

     async  function createAppFolders( aAppDir, aModel ) {
      var   aFolderName     =  FRT.path( __basedir, aAppDir)   
      try {
//          await fs.mkdir(    aFolderName, { recursive: true } ); // Use promises for cleaner async handling
            await FRT.makDir(  aFolderName, { recursive: true } ); // Use promises for cleaner async handling
//          console.log(    `  Creating App Folder,      "${aFolderName}"`);
//          console.log(    `  Created App Folder, "${aFolderName}", successfully!`);

       var  aAppName        =  aAppDir.replace(     /(client[0-9]+|server[0-9]+)[\\\/]/, '' )

//     var  aDocsFolderName =  aFolderName.replace( /(client[0-9]+|server[0-9]+)[\\\/]/, 'docs/' ) 
       var  aDocsFolderName =  aFolderName.replace( /(client[0-9]+|server[0-9]+)[\\\/]/, 'docs/' ) 
//          console.log(    `  Creating docs App Folder, "${aDocsFolderName}/${aModel}"`);
//          await fs.makdir(  `${aDocsFolderName}/${aModel}`, { recursive: true } ); 
            await FRT.makDir( `${aDocsFolderName}/${aModel}`, { recursive: true } ); 

        if (aAppDir.slice(0.1) === 'c' ) {

//          console.log(    `  Created docs App Folder, "${aDocsFolderName}/${aModel}", successfully!`);
       var  aHTML_Content   = `<!DOCTYPE html>
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
//          await fs.writeFile(  `${aFolderName}/index.html`, htmlContent);
        if (await FRT.checkFile( `${aFolderName}/index.html`).exists == false ) { 
            await FRT.writeFile( `${aFolderName}/index.html`, aHTML_Content); 
            console.log(    `  Creating an initial file, "index.html", inside the client app folder.`);
            }
        } // eif client 

        if (aAppDir.slice(0.1) === 's' ) {
       var  aServer_File = `server.mjs`
        if (await FRT.checkFile( `${aFolderName}/${aServer_File}`).exists == false ) { 
       var  aServer_Content =  FRT.readFile(       aServer_File ); 
            await FRT.writeFile( `${aFolderName}/${aServer_File}`, aServer_Content); 
            console.log(    `  Creating an initial file, "${aServer_File}", inside the server api folder.`);
            }
        } // eif client 

       var  aMessage_File = `${aAppName.slice(0,3)}_p099.01.${FRT._TS}_message.md`
            await FRT.writeFile( `${aDocsFolderName}/${aModel}/${aMessage_File}`, '' ); 
            console.log(    `  Creating an initial file, "${aMessage_File}", inside the docs app model folder.`);

        } catch (error) {
            console.error(  `* Error creating app folders: ${error.message}`);
            }
        }  // eof createFolder( aAppName )
// --------------------------------------------------------------    




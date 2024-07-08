    import  FRT          from './AIC90_FileFns.mjs'
    import  { getNextCommitNo } from './AIC89_Commit.mjs'

       var  bIsNotCalled    =  FRT.isCalled( import.meta.url, process.argv[1]); 
//          console.log( bIsNotCalled ? 'not called' : 'called'    ) 
//          console.log( `Called: ${bIsNotCalled ? 'NO' : 'YES' }` ) 

      var   aModel          = 'gp4oopw GPT-4o_OpenAI-web'
//                             MCode   model engine method api              response message
       var  Models1         = 
                            [ 'gp4oopw GPT-4o_OpenAI-web'          // ##    markdown, text, json (playground)
                            , 'gp4oopu GPT-4o_OpenAI-curl'         // ##    json text
                            , 'gp4oopm GPT-4o_OpenAI-node'         //       json object
                            , 'gp4oopf GPT-4o_OpenAI-fetch'        //       json object
                            , 'gp4oopc GPT-4o_OpenAI-cont'         //       markdown /share
                            , 'qw7bolu Qwen2-7b_Ollama-curl'
                            , 'qw7bolu Qwen2-7b_Ollama-node'
                            , 'qw7bolu Qwen2-7b_Ollama-cont'       // ##
                            , 'cg2bolu CodeGemma-2b_Ollama-curl'
                            , 'cg2boln CodeGemma-7b_Ollama-node'
                            , 'cg2bolc CodeGemma-7b_Ollama-cont'
                            , 'c2q5lmn Claude2-Q5_LMStudio-node'
                            , 'c2q3lmn Claude2-Q3_LMStudio-node'
                            , 'st20lmn StarCoder2_LMStudio-node'
                            , 'cl00lmn CodeLlama_LMStudio-node'
                            , 'gp4ovcp CodeParrot_VSCode-copy'
                            , 'ge15gvw Gemini1.5_Vertex-web'
                               ] 


///function getModel() {
//          Models.indexOf( qw7bolu Qwen2-7b_Ollama-cont )      
//}                                

       var  aAppName        =  FRT.setPaths(       'c39_login-app' )
       var  aSessionDir     =  FRT.join(__basedir, `docs/${aAppName}/${aModel}` )
       var  aSessionsFile   =  FRT.join(__basedir, `../._/DOCs/code-sessions/Continue.dev-sessions_v${FRT._TS}.txt` )
      var __ContinueDir     =                      '/C/Users/Robin/.continue/sessions'
/*
       var  aUseContinueDir = 'get'       // save {aSessionsFile} and use last session messages markdown
       var  aUseContinueDir = 'use'       // use session messages markdown from  __ContinueDir
//     var  aUseContinueDir = 'no'        // use saved   messages markdown file in aSessionDir
        if (aUseContinueDir =='get') {
       var  mSessonMessage  =  await shoMessages_forContinue( __ContinueDir, aSessionsFile )
       var  mSessonMessage  =  [ 13, 4 ]  // returns last session number, and 0 for last message number
            }
        if (aUseContinueDir =='use') {
       var  mSessonMessage  =  [ 13, 4 ]  // message [nSession.nMessage] markdown text is in session file located in {__ContinueDir}.
            }
        if (aUseContinueDir =='no' ) {
       var  mSessonMessage  =  [  3, 1 ]  // message _u{nSession.nMessage}.md markdown file is saved in {aSessionDir}.
            }

       var  aMarkdown_File  =  await getMarkdownFile( aSessionDir, aUseContinueDir, mSessonMessage )
*/ 
//          getScripts( 'c23_ChatGPT-4o-session_u01.40611.151206.md' )
//          getScripts( 'Curl-ask-openap-4-lofinapp.response_v3.02.md', 'c18_login' )
//          getScripts( 'Curl-ask-openap-4-lofinapp.response_v3.02.md', 'OpenAI_API', 'c38_login-app' )
//          getScripts( 'docs/c38_App-AISessions/OpenAI_API/Session-Response-curl_u03.md', 'OpenAI_API', 'c38_login-app' )

//          savScripts( 'Session-Response-curl_u03.md', aModel, aAppName )

        if (bIsNotCalled) {  
//          saveScripts(  aMarkdown_File )
//          listScripts( "E:/Repos/Robin/AIObjs_/._/DOCs/code-sessions/FRTables-markdown_u13.4.40625.1409.md" )
            listScripts( "E:/Repos/Robin/AIObjs_/._/DOCs/code-sessions/FRTables-markdown_u13.8.40625.1452.md" )
            }

// ------------------------------------------------------------------------------------------------------------------
/*
async function getMarkdownFile( aSessionDir, aUseContinueDir, mSessionMessage ) {
       var  [ nSession, nMessage ] =  mSessionMessage
       var  aDirPath        =  await FRT.makDir( `${aSessionDir}` )                               // contains: `docs/${aAppName}/${aModel}`
       var  aApp            =  aSessionDir.match( /([cs][0-9]{2})/ ); aApp = aApp ? aApp[1] : 'c00'

//      if (typeof(mUseContinue) != 'object' ) {
        if (aUseContinueDir.match( /get|use/ )) {
       var  mSessions       =  await getContinueSessions(  __ContinueDir )

       var  nSession        =  nSession ? nSession : mSessions.length                                              // last session origin one
       var  pSession        =  await getContinueSession(   __ContinueDir, nSession )

       var  nMessage        =  nMessage ? nMessage : (pSession.history.length) - 2                               // assistent message with markdown, origin 1
       var  aVer            = `u${`${nSession}`.padStart ( 2, '0' )}.${nMessage}`, nVer = +aVer.substring(1)

       if (!pSession.history[  nMessage - 1 ]) {
            console.log(    `* Opps: Nessage No. ${nMessage} is not in Continue.dev's Session No. ${nSession}.` )
            process.exit()
            }
//     var  aMarkdown_File  =  FRT.join( aSessionDir, `${aAppName}_${aVer}\`${pSession.dateCreated}.message.md` )
//     var  aMarkdown_File  =  FRT.join( aSessionDir, `${aVer}\`${pSession.dateCreated}.message.md` )   // aka request or response
       var  aMarkdown_File  =  FRT.join( aSessionDir, `${aApp}_messages_${aVer}\`${pSession.dateCreated}.md` )      // aka request or response
       var  aMarkdown       =  pSession.history[ nMessage - 1 ].message.content
                               await FRT.writeFile(  aMarkdown_File, aMarkdown )
            console.log(    `  Saved Messages Markdown file: ${aMarkdown_File}` )
        } else {
 //    var  nVer            =  mUseContinue[0]
//     var  nMessage        =  mUseContinue[1]
       var  aVer            = `u${`${nSession}`.padStart ( 2, '0' )}.${nMessage}`, nVer = +aVer.substring(1)
//     var  aMarkdown_File  =  FRT.join( `${aSessionDir}/${aVer}\`${_TS }.message.md` )
       var  aMarkdown_File  =  FRT.join( aSessionDir, `${aApp}_messages_${aVer}\`{ymmdd.hhmm}.md` )
            }
            console.log(    `  Using Messages Markdown file: ${aMarkdown_File}` )
    return  aMarkdown_File
        }
// ------------------------------------------------------------------------------------------------------------------
*/
//    var   aScrptName      =  aMarkdown.split( "\n" )[169].match( /^.*file:* `(.+)`:/ )[1]
     async  function  listScripts(    aMarkdown_File, aAIName, aAppName ) {                      // Step 5

            console.log(  `\n  Parsing aMarkdown_File: .${ aMarkdown_File.replace( /[\\\/]/g, '/' ). replace( __basedir, '' ) }` );  
//     var  aMarkdown =  await FRT.readFileSync( FRT.join( aMarkdown_File ), 'utf8' );
//     var  aMarkdown =  await FRT.readFileASync( FRT.path( aMarkdown_File ), 'utf8' );
       var  aMarkdown       =  FRT.readFileSync( FRT.path( aMarkdown_File ), 'utf8' );

       var  mCodes          =  aMarkdown.split( /```|### / )
//          console.log( mCodes )
       var  mScriptNames    =  mCodes.map( (aCode, i) => {
//                         if (aCode.match( /^((File: *|`).+)\.(js|mjs|html)/ )) {
       var  mMatch          = aCode.match(  /((File: *|`).+)\.(json|js|mjs|html)/ )
                           if (mMatch && mMatch[1]) {
//                         var aScript = aCode.replace( /(File: *|`)/, '' ).replace( /[\n\r`]+/g, '' ).trim()  
                           var aScript = mMatch[0].replace( /(File: *|`)/, '' ).replace( /[\n\r`]+/g, '' ).trim()
//                             aScript = aScript.slice(0, `${aScript} `.indexOf( ' ' )).trim()      //#.(40702.01.1 RAM No spaces in script name)
                               aScript = (aScript.indexOf( ' ' ) == -1) ? aScript : ''              // .(40702.01.1)
                           if (aScript.match(/\.(json|js|mjs|html)/)) {
                   return [ i, aScript ] } }
                               } )
            mScriptNames    =  mScriptNames.filter( a => a )    //  remove MT (undefined) rows
        
            mScriptNames.forEach( m => console.log( `${ `${m[0]}`.padStart(4) }. ${m[1]}` ))
     return mScriptNames       
            }
// ------------------------------------------------------------------------------------------------------------------

  function  fixMarkdown( aUser, aMarkdown ) {
       var  mCodes       =  aMarkdown.split( /```|### / )
        if (aUser.match( /assistant/i)) { 
//          console.log( mCodes)
            }
    return  aMarkdown
            }
// ------------------------------------------------------------------------------------------------------------------

     async  function  saveScripts( aMarkdown_File, aAIName, aAppName, aMod ) {                      // Step 6 
            aAIName         =  aAIName   ? aAIName  :   aModel
            aAppName        = (aAppName  ? aAppName : __appname).split( /[\\\/]/ ).splice( -1 )[0]

        var aUV             =  aMarkdown_File.match( /_([uv])/ )[1], aTS
//      var aVersion        =  aMarkdown_File.match( /_([vu][\d.`]+)\.md/   )[1]
        var aVersion        =  aMarkdown_File.match( /_([vu][\d.`]+).*\.md/ )[1]                    // .(40702.05.4 RAM Adjust for new pattern)
            aVersion        =  aVersion.match( /`/ ) ?  aVersion.replace( /.+`/, '.') : aVersion
        var mVersion        =  aVersion.split( "." )
        if (mVersion[1] ) { 
        var aTS             =  mVersion.slice(2).join(".")                                          // .(40703.03.x RAM Was slice(1))
        var aVer            =  mVersion.slice(0,2).join(".")                                     // .(40703.03.x RAM Added)
        } else { 
        var aTS             =  FRT._TS
//      var aVer            =  aUV + (+mVersion[0].slice(1)).toFixed( 2 ).padStart( 4, '0' );
        var aVer            =  aUV + (+mVersion[0].slice(1)).toFixed( 2 ).padStart( 6, '0' );
            }
            aVersion        =  aVer + '.' + aTS; mVersion = aVersion.split( "." )                   // .(40703.03.x RAM Reassigned mVersion)

//      var aCommit         = `c${aVersion.substring(6,11)}.${aVer}`
//      var aCommit         = `c${aVersion.substring(6,11)}.${aVer.substring( 1 ).replace( /[.0]+$/, '' )}`  //#40703.03.x)
//      var aCommit         = `c${mVersion[2]}.${mVersion[1]}`    
        var aCommit         =  await getNextCommitNo( )                                              // 40703.03.x RAM mVersion[1] S.B. Next version of the day)

        var aClientDir      = (aAppName.slice(0,1) == 'c' ? 'client' : 'server') + aAppName.slice(1,2)
        var aAppDir         =  FRT.join( __basedir, aClientDir, aAppName ) 
        var aFileName       = `${aMarkdown_File.replace( /_[uv].+/, '' )}_${aVersion}.md`         // uNN.YMMDD.HHMM is now uNN.0.YMMDD.HHMM 
        var aAppName        =  aAppName ? aAppName : aFileName.replace( /_.+/, '' )               // ?? 
        var aFilePath       =  FRT.join(  aAppDir,   aFileName )                                  //'c23_ChatGPT-4o-session_u1.03`40611.1512.md'

        var aVersion2       =  `_v${aVersion.slice(1)}-${aMod}`
//      var aBackPath       =  FRT.join(  aAppDir, `!_${aAppName.substr(0,3)}_App-Changes/${aAIName}`   )  //#.(40703.03.x)
        var aBackPath       =  FRT.join(  aAppDir, `!_${aAppName.substr(0,3)}_App-Changes/${aVersion2}` )   // .(40703.03.x Was aAIName)

//      var aMsg            =  aMsg ? aMsg : `Update ${aAppName} to ${aVersion}`
//      var aMsg1           = `Update ${aAppName} (${aVersion})`
//      var aMsg2           = `Update ${aAppName.slice(0,3)} App (${aVersion2} ${aMod})`
//      var aMsg3           = `Update re ${aMod} (${aVersion})`
        var aMsg            = `Update ${aAppName.slice(0,3)} App (${aVersion2})`                   // .(40703.03.x RAM Use aVersion2)

//          console.log(  `\n  aMarkdown_File: ${aMarkdown_File}`);  
//          console.log(    `  Saving commit1:  ${aCommit}_${aMsg1}` )
//          console.log(    `  Saving commit2:  ${aCommit}_${aMsg2}` )
//          console.log(    `  Saving commit3:  ${aAppName.slice(0,3)}.${aCommit.slice(1)}_${aMsg3}` )
            console.log(    `  Saving commit:   ${aCommit}_${aMsg}` )                              // .(40703.03.x RAM Backto aMsg )

       var  mScriptNames    =  await listScripts( aMarkdown_File )
//          console.log(   "" )
            
       var  aMarkdown       =  await FRT.readFileSync( FRT.join( aMarkdown_File ), 'utf8' );
       var  mCodes          =  aMarkdown.split( /```|### / )

//                             mScriptNames.forEach( async (mScript, i) => savScript( mScript, aBackPath, aVer, __basedir ) )  //#.(40702.03.1 RAM Ignores awaits)
/*          await Promise.all( mScriptNames.forEach( async (mScript, i) => {             //#.(40702.03.2 RAM Gets error: TypeError: undefined is not iterable) 
                        return await savScript( mScript, aBackPath, aVer, __basedir ) 
                               } ) ); 
*/
//      var writePromises   =  mScriptNames.forEach( async (mScript, i) => savScript( mScript, aBackPath, aVer, __basedir ) )
        var writePromises   =  mScriptNames.map(     async (mScript, i) => {             // .(40702.03.3 AIM Suggests this Beg) 
                         try { await savScript( mScript, aBackPath, aVer, __basedir );
                        return Promise.resolve( );                                       // .(40702.03.4 AIM Explicitly resolve with undefined (optional)
                           } catch ( error ) {
                        return Promise.reject(  error ); }                               // .(40702.03.5 AIM Reject with the error
                           } );                        
            await Promise.all( writePromises );                                          // .(40702.03.3 AIM Wait for all writes to finish End)

//    ----- ----------------------------------------------------------------------

      async function savScript( mScript, aBackPath, aVer, aBaseDir ) {
//          console.log(    `  Saving script ${mScript[0]}: ${mScript[1]} `)
        var aScriptName     =  mScript[1].split(/[\\\/]/).slice(-1)[0]                  // .match( /^`(.+\.(js|mjs|html))/ )[1]
        var aScriptDir      =  mScript[1].split(/[\\\/]/).slice(0,-1).join('/')         // .match( /^`(.+\.(js|mjs|html))/ )[1]
            aScriptDir      =  aScriptDir ? aScriptDir + '/' : ''

      if ( !mCodes[ mScript[0] + 1 ] ) { 
            console.log( `\n  Saving script ${mScript[0]}: No code for script file: ${mScript[1]}.` ); 
            return 
            }  

        var aBakPath        =  aBackPath
        var aAppPath        =  aAppDir
        var bSaveIt         =  true                                                                         // (40703.03.x )

        if (aScriptName.match( /^package.json/)) {  } // should be ok to leave this alone

        if (aScriptName.match( /^\.gitignore/)) { 
        var aBakPath        =  '.vscode'
        var aAppPath        =  __basedir
        var bSaveIt         =  false //  FRT.getStat( ).exists( aBakPath )? 1 : 0                           // .(40703.03.x )
//          return // if one doesn't currently exist, then save it, but adjust the path name                // .(40703.03.x )
            }  
        if (aScriptName.match( /^\.env/)) { 
        var aBakPath        =  aBackPath.replace( /client/, 'server' ).replace( /c([0-9]{2})/g, 's$1' ) 
        var aAppPath        =  aAppDir.replace(   /client/, 'server' ).replace( /c([0-9]{2})/g, 's$1' ) 
        var bSaveIt         =  false //  FRT.getStat( ).exists( aBakPath )? 1 : 0                           // .(40703.03.x )
//   return // if one doesn't currently exist, then save it, but adjust the path name                       // .(40703.03.x )
            }  
        if (aScriptDir.match( /^\.vscode/)) { 
        var aBakPath        =  aBackPath
        var aAppPath        =  __basedir
//          console.log( `\n  Ignoring script ${mScript[0]}: ./${mScript[1]}.` );                           // .(40703.03.x )
        var bSaveIt         =  false //  FRT.getStat( ).exists( aBakPath )? 1 : 0                           // .(40703.03.x )
//          return // if one doesn't currently exist, then save it, but adjust the path name                // .(40703.03.x )
            }  
        if (aScriptDir.match( /^client/)) { 
            aScriptDir      =  aScriptDir.replace(/client\//,'') 
        var aBakPath        =  aBackPath
        var aAppPath        =  aAppDir
            }
        if (aScriptDir.match( /^server/)) { 
            aScriptDir      =  aScriptDir.replace(/server\//,'') 
        var aBakPath        =  aBackPath.replace( /client/, 'server' ).replace( /c([0-9]{2})/g, 's$1' ) 
        var aAppPath        =  aAppDir.replace(   /client/, 'server' ).replace( /c([0-9]{2})/g, 's$1' ) 
            }
//         console.log(    `  Saving script ${mScript[0]}: ${ aAppPath.replace( /[\\\/]/g, '/' ).replace( aBaseDir, '' ).replace( /[\\\/]/g, "/" )}/${ aScriptDir }${ aScriptName } (${ aScriptType }):` )
//         return 
//                       await FRT.makDir(     FRT.join( aAppPath,  aScriptDir ) )                          //#.(40702.02.2 RAM was aAppDir) { recursive: true } ) )  create parent directories
//                       await FRT.makDir(     FRT.join( aAppPath,  aScriptDir ) )                          //#.(40702.02.2 RAM was aAppDir) { recursive: true } ) )  create parent directories
                               FRT.makDirSync( FRT.join( aBakPath,  aScriptDir ) )                          // .(40702.02.3 RAM was aBackPath) 
                               FRT.makDirSync( FRT.join( aAppPath,  aScriptDir ) )                          // .(40702.02.2 RAM was aAppDir) { recursive: true } ) )  create parent directories
//                             fsync.mkdirSync( FRT.join( __appname, aScriptDir ) )                         //#, { recursive: true } ) )  create parent directories
//                             fsync.mkdirSync( FRT.join( aBackPath, aScriptDir ) )
//                             fs.mkdir(        FRT.join( aBackPath.replace( /!/, "^!" ), aScriptDir ) )
//                             fs.mkdir(        FRT.join( aBackPath.replace( /!/, "_" ), aScriptDir ) )

//      var aScriptVer      =  aScriptName.replace( /\./, `_${aVersion}.` )                                 //#.(40703.03.x)
        var aScriptVer      =  aScriptName                                                                  // .(40703.03.x)

        var aScriptCode     =  mCodes[ mScript[0] + 1 ]
        var aScriptType     =  aScriptCode.substring( 0, aScriptCode.match( /[\r\n]+/ ).index ) //   indexOf( '\n' ) )
            aScriptCode     =  aScriptCode.replace( /.+[\n\r]+/, '' )   //   indexOf( '\n' ) + 1 )
//          aScriptCode     =  aScriptCode.replace( /\/\/.+[\n\r]+/, '' )   //  filenme comment

//          console.log(    `  --------------------------------------------------------------------------------------------------------------` )

//                       await  fs.writeFile(  FRT.join( aBackPath, aScriptDir, aScriptVer ), aScriptCode )
//                       await FRT.writeFile(  FRT.join( aBackPath, aScriptDir, aScriptVer ), aScriptCode )
                               FRT.writeFile(  FRT.join( aBakPath,  aScriptDir, aScriptVer ), aScriptCode ) // .(40702.02.3)
            console.log(  `\n  Saving backup ${mScript[0]}: .${ aBakPath.replace( /[\\\/]/g, '/' ).replace( aBaseDir, '' ).replace( /[\\\/]/g, "/" )}/${ aScriptDir }${ aScriptVer }` )
//          console.log(    `  Saving backup: ${ aBackPath }/${ aScriptDir }/${ aScriptVer }` )
        if (bSaveIt) {                                                                                      // .(40703.03.x )
//                       await  fs.writeFile(  FRT.join( __appname, aScriptDir, aScriptName), aScriptCode )
//                       await FRT.writeFile(  FRT.join( __appname, aScriptDir, aScriptName), aScriptCode )
                               FRT.writeFile(  FRT.join( aAppPath,  aScriptDir, aScriptName), aScriptCode ) // .(40702.02.4)
//          console.log(    `                 ${ FRT.join( __appname, aScriptDir, aScriptName) }` )
            console.log(    `  Saving script ${mScript[0]}: .${ aAppPath.replace( /[\\\/]/g, '/' ).replace( aBaseDir, '' ).replace( /[\\\/]/g, "/" )}/${ aScriptDir }${ aScriptName } (${ aScriptType }):` )
        } else {                                                                                            // .(40703.03.x Beg)
            console.log(    `   Keeping file ${mScript[0]}: .${ aAppPath.replace( /[\\\/]/g, '/' ).replace( aBaseDir, '' ).replace( /[\\\/]/g, "/" )}/${ aScriptDir }${ aScriptName } (${ aScriptType }):` )
                               }                                                                            // .(40703.03.x End)
//          console.log(    `  --------------------------------------------------------------------------------------------------------------` )
//          console.log(    `    ${ aScriptCode.replace( /[\r\n]+/g, "\n    " ) }` )
            } // eof savScript()
//      ----------------------------------------------------------------------------------------------
        } // eof getScripts()
// ------------------------------------------------------------------------------------------------------------------

function  fmtCurlScript( pContent, i, aMessageId )  {
    var  aCurlRequest_File =  aRequest_File.replace( /.mjs/, 'sh' )
    var  aScript           =  FRT.readFileSync( aCurl_Template )

       }   //
// --- ---  --------------  =  -------------------------------------------------------------

export default { saveScripts, listScripts, fixMarkdown }

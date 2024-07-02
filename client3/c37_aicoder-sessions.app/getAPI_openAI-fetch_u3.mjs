// import fetch from 'node-fetch';
   import   FRT             from '../../._2/FRTs/AICodeR/AIC90_FileFns.mjs'                         // .(40701.05.5 RAM Add getAPI_openAI-fetch_u3.mjs)
   import   AIC             from '../../._2/FRTs/AICodeR/AIC06_Code_u05.mjs'
   import   AIM             from '../../._2/FRTs/AICodeR/AIC98_Models.mjs'

     const  saveScripts     =  AIC.saveScripts
     const  listScripts     =  AIC.listScripts
     const  selectRow       =  AIM.selectRow
     const  getModel        =  AIM.getModel
     const  fetchFromOpenAI =  FRT.getAPI                                                           // .(40701.06.2 RAM get from AIC90_FileFns) 

       var  bIsNotCalled    =  FRT.isCalled( import.meta.url, process.argv[1]);
       var  bRun            =  bIsNotCalled && `${ process.env['CALL_IT'] }`.match( /true|1/ ) == null;

//     var  aAppName        = 'c39_login-app'
       var  aAppName        =  FRT.setPaths( aAppName )

//     var  aModel          = 'GPT-4o_OpenAI-cont'         //       markdown /share
       var  aModel          =  getModel( 'gp4oopf' )[ 2 ].trim() 

//     var  __basedir       =  __basedir
//     var  __libpath       =  __libPath
//     var  __apppath       =  __apppath 
//     var  __dirname       =  __dirname

       var  aHome_Dir       =  FRT.path(            `/C/Users/${process.env["USERNAME"]}` )
       var _Continue_Dir    =  FRT.path( aHome_Dir, `.continue/sessions` )
       var  aSessions_Dir   =  FRT.join( __basedir, `../._/DOCs/code-sessions` )
       var  aSession_Dir    =  FRT.join( __basedir, `docs/${aAppName}/${aModel}` )
                               await FRT.makDir( aSession_Dir)                                      // .(40701.05.6 RAM Create folder??)

       var  aTS             = `${FRT._TS}`
//     var  aTS             = '40621.2207'
       var  aVer1           = `u01.40701.0900`
       var  aVer2           = `u02.${aTS}`    // Session.Message (Commit) No 
//     var  aVer            =  getVer(          aSession_Dir, 'v40611.*' )

       var  aRequest_File   =  FRT.join( __apppath,    `getAPI_openAI-fetch_${aVer2.slice(0.2)}.mjs` )
       var  aRequest_JSON   =  FRT.join( aSession_Dir, `${aAppName.slice(0,3)}_request__${aVer1}.json` )
//     var  aResponse_File  =  FRT.join( aSession_Dir, `${aAppName.slice(0,3)}_response_${aVer2}.mjs`  )
       var  aResponse_JSON  =  FRT.join( aSession_Dir, `${aAppName.slice(0,3)}_response_${aVer2}.json` )
       var  aMarkdown_Save  =  FRT.join( aSession_Dir, `${aAppName.slice(0,3)}_markdown_${aVer2}.md`   )

       var  aCurl_Template  =  FRT.join( __libpath,    `AIT04_Curl-Request_u01.template.sh` )
       var  aNode_Template  =  FRT.join( __libpath,    `AIT04_Node-Request_u01.template.sh` )

// ----------------------------------------------------------------------------------------------------

// Replace with your actual OpenAI API key
   var API_KEY = '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';
// var API_URL = 'https://api.openai.com/v1/endpoint'; // Replace 'endpoint' with the desired real endpoint
   var API_URL = 'https://api.openai.com/v1/chat/completions'; // Endpoint for chat completions

// ----------------------------------------------------------------------------------------------------

     const  pRequestMessage =   JSON.parse( await FRT.readFile( aRequest_JSON ) )

// --------------------------------------------------------------------------------------------------
       var  aRetreived      =  'no' 
        if (aRetreived     ==  'no') {
       var  pResponse       =   await fetchFromOpenAI( API_URL, pRequestMessage, API_KEY )          // .(40701.06.3 RAM Add API_URL and API_KEY)
        if (pResponse.Error) {                                                                      // .(40701.07.1 RAM Check for error Beg)
            console.error(   `* Error: ${pResponse.Error}` )
            process.exit() 
            }                                                                                       // .(40701.07.2 End)
       var  aMarkdown       =   pResponse.choices[0].message.content; 
            
                                FRT.writeFile( aResponse_JSON, JSON.stringify( pResponse, null, 2 ) );
                                FRT.writeFile( aMarkdown_Save, aMarkdown );

//          console.log(       "Response:", pResponse )
            console.log(       "Markdown:", aMarkdown )
            }

            await listScripts( aMarkdown_Save )                     // <===  Step 5
            await saveScripts( aMarkdown_Save, aModel, aAppName )   // <===  Step 6

      function updAITables() {       
/*
['   13', ' 2024-06-26 18:09', ' 28d2a0c4-adbc-4acc-89ad-efe69b79c6e2', '   6', ' cont_013', ' "that extend the base class located here: \'https..."' ]  

['   57', '  13', '   1', ' Qwen2-7b_Ollama-cont', ' c39_login-app', '           c40626.01.1', '        user ']
['   58', '  13', '   2', ' Qwen2-7b_Ollama-cont', ' c39_login-app', '           c40626.01.2', '   assistant ']
['   59', '  13', '   3', ' Qwen2-7b_Ollama-cont', ' c39_login-app', '           c40626.02.1', '        user ']
['   60', '  13', '   4', ' Qwen2-7b_Ollama-cont', ' c39_login-app', '           c40626.02.2', '   assistant ']
['   61', '  13', '   5', ' Qwen2-7b_Ollama-cont', ' c39_login-app', '           c40626.03.1', '        user ']
['   62', '  13', '   6', ' Qwen2-7b_Ollama-cont', ' c39_login-app', '           c40626.03.2', '   assistant ']

['   57', '  13', '    57', '  1', ' text', '     981', '  "I want you to assist me in developing a NodeJS…irectory structure for the script files.  \nThen', ' for each script', ' return the following \n- a heading for the filen…script contents in a code block using three tics', ' \`\`\` with the name of the language.  \n- after the code block', ' list steps that explain the major sections of th… to run the application.  \nFor JavaScript files', ' please use ES6 modules with an \`.mjs\` extension and remember to use import \nstatements', ' not require(). Also please break the User Interf…delivr.net/gh/lit/dist@2/core/lit-core.min.js\';"' ]
['   58', '  13', '    58', '  1', ' text', '    4345', '  "# Overview\n\nThis guide outlines the development of a NodeJS Express web application', ' including setting up a directory structure and w…avaScript features with ES6 modules (.mjs files)', ' utilize Lit components', ' and employ basic server setup using Express.\n\n…iles\napp.use(express.static(path.join(__dirname', ' 'public')));\n\n// Routes configuration goes here...\napp.get('/'', ' (req', ' res) => {\n  res.sendFile(path.join(__dirname', ' 'views'', ' 'templates.mjs'));\n});\n\n// Starting the serve…ORT = process.env.PORT || 3000;\napp.listen(PORT', ' () => console.log(`Server is running on port ${P…ion:** This file sets up the Express application', ' defines routes for serving static files and hand…const UserController = {\n  async createUser(req', ' res) {\n    try {\n      const newUser = create(…res.status(500).send(error.message);\n    }\n  }', '\n};\n```\n**Explanation:** This controller handles user creation logic', ' interacting with the service layer (`user.servic…`\n```javascript\nclass User {\n  constructor(id', ' name) {\n    this.id = id;\n    this.name = name…uter = express.Router();\n\nrouter.post('/users'', ' UserController.createUser);\n\nexport default ro…** This file sets up the route for user creation', ' using the `UserController`.\n\n#### `utils/datab…const db = mongoose.connection;\n\ndb.on('error'', ' console.error.bind(console', ' 'connection error:'));\ndb.once('open'', ' function () {\n  // Connection open event goes h…\n}\n\ncustomElements.define('welcome-component'', ' WelcomeComponent);\n```\n**Explanation:** This f…. The `WelcomeComponent` here is just an example', ' and you would define other components as needed.…ect.\n4. Add necessary dependencies like Express', ' Lit (via npm or other package manager).\n   ```b…ol like Postman to test your routes.\n\nRemember', ' this is just a basic setup and can be expanded with authentication', ' routing for different endpoints', ' more complex models', ' and UI components as needed."' ]
['   59', '  13', '    59', '  1', ' text', '     259', '  "Can you write a node js app that performs sign…se code the full implementation of each script."' ]

*/
      }
// --------------------------------------------------------------------------------------------------


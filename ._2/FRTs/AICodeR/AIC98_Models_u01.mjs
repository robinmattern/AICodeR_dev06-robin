   import   FRT          from './AIC90_FileFns.mjs'

       var  Models2 = 
             [ [ ' 1.', 'gp4oopw', 'GPT-4o_OpenAI-web       ' ] // ##    markdown, text, json (playground)
             , [ ' 2.', 'gp4oopu', 'GPT-4o_OpenAI-curl      ' ] // ##    json text
             , [ ' 3.', 'gp4oopn', 'GPT-4o_OpenAI-node      ' ] //       json object
             , [ ' 3.', 'gp4oopm', 'GPT-4o_OpenAI-maxi      ' ] //       json object             // .(40702.06.1 RAM New Models)
             , [ ' 4.', 'gp4oopf', 'GPT-4o_OpenAI-fetch     ' ] //       json object
             , [ ' 5.', 'gp4oopc', 'GPT-4o_OpenAI-cont      ' ] //       markdown /share
             , [ ' 6.', 'qw7bolu', 'Qwen2-7b_Ollama-curl    ' ]
             , [ ' 7.', 'qw7boln', 'Qwen2-7b_Ollama-node    ' ]
             , [ ' 8.', 'qw7bolc', 'Qwen2-7b_Ollama-cont    ' ] // ##
             , [ ' 9.', 'cg2bolu', 'CodeGemma-2b_Ollama-curl' ]
             , [ '10.', 'cg2boln', 'CodeGemma-7b_Ollama-node' ]
             , [ '11.', 'cg2bolc', 'CodeGemma-7b_Ollama-cont' ]
             , [ '12.', 'c2q5lmn', 'Claude2-Q5_LMStudio-node' ]
             , [ '13.', 'c2q3lmn', 'Claude2-Q3_LMStudio-node' ]
             , [ '13.', 'c3q3lmn', 'Claude3-Q3_LMStudio-node' ]
             , [ '14.', 'c35sanm', 'Claude-35s_Anthropic-maxi']                                  // .(40702.06.2)
             , [ '15.', 'c35sanu', 'Claude-35s_Anthropic-curl']                                  // .(40704.01.1)
             , [ '16.', 'c35sann', 'Claude-35s_Anthropic-node']                                  // .(40704.01.2)
             , [ '17.', 'c35sanw', 'Claude-35s_Anthropic-web' ]                                  // .(40704.01.3)
             , [ '18.', 'st20lmn', 'StarCoder2_LMStudio-node' ]
             , [ '19.', 'cllalmn', 'CodeLlama_LMStudio-node ' ]
             , [ '20.', 'gp4ovcp', 'CodeParrot_VSCode-copy  ' ]
             , [ '21.', 'ge15ggw', 'Gemini-15_Google-web    ' ]
             , [ '22.', 'ge15gvw', 'Gemini-15_Vertex-web    ' ]
                ] 

  function  selectRow( mRows, nFld, aVal ) { 
        if (typeof(nFld) == 'undefined' ||  `${ nFld || '' }` == '') { return mRows }
        if (typeof(nFld) == 'string'    ) { aVal = nFld; nFld = 2 }
        if (typeof(aVal) == 'undefined' ) { return mRows.map( mRow => mRow[ nFld - 1 ] ) }
        if ( aVal  == '' ) { return ''}
        if (isNaN(aVal)) { var nVal = 0 } else {var nVal = aVal * 1 }
       var  nRow = mRows.findIndex( ( mRow, i ) => { var aFld  = mRow[ nFld - 1 ]; 
            return nVal ? mRow[ nFld - 1 ] * 1 == nVal : aFld.slice( 0, aVal.length ) == aVal } )
    return (nRow != -1) ? mRows[nRow] : ''
            }

   function getModel( nFld, aVal ) { return selectRow( Models2, nFld, aVal ) }  
   
     export default { getModel, selectRow }

//   -----------------------------------------------------------------------

       var  bIsNotCalled    =  FRT.isCalled( import.meta.url, process.argv[1]);
       var  bIsCalled       = `${ process.env['CALL_IT'] }`.match( /true|1/ ) != null;
       
       var  bRun            =  bIsNotCalled && `${ process.env['CALL_IT'] }`.match( /true|1/ ) == null;
//          console.log( `bRun: ${ bRun },  bIsNotCalled :${ bIsNotCalled }, CALL_IT: ${ process.env['CALL_IT'] }` );
//          process.exit()  

        if (bRun) { 

       var  aModel         =  process.argv.length > 2 ? process.argv[2] : null
      
            console.log( getModel( aModel ).map( m => '  ' + m.join( '  ' )).join( '\n' ) );     
            }
      



      
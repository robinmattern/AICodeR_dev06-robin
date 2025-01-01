     const  fs   = require( 'fs' ).promises;
//   const  path = require('path');
     const  mime = require( 'mime-types' );

// ---------------------------------------------------------------------

async function markdownToHtmlImg( markdownText ) {
     const  match       =  markdownText.match(/!\[(.*?)\]\((.*?)\)/);  // Extract file path and alt text from markdown
       if (!match) { return "No image found in markdown text"; }

     const [, altText, filePath] = match;
       try {
     const  imageBuffer =  await fs.readFile( filePath );   // Read the image file
     const  base64Image =  imageBuffer.toString('base64');   // Convert image to base64
     const  mimeType    =  mime.lookup(filePath);   // Get MIME type
     const  dataUri     = `data:${mimeType};base64,${base64Image}`;   // Create data URI
     const  htmlImg     = `<img src="${dataUri}" alt="${altText}">`;   // Create HTML img tag
    return  htmlImg;
        } catch (error) {
            console.error('Error processing image:', error);
    return `Error processing image: ${error.message}`;
            }
    }
// ---------------------------------------------------------------------

     const  markdownText = '![Diagram2](./rm41009-02_Diagram2.png)';

            markdownToHtmlImg( markdownText )
              .then( htmlImg => console.log( htmlImg ) )
             .catch( error   => console.error( 'Error:', error ) );

// ---------------------------------------------------------------------

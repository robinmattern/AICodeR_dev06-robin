#!/bin/bash

 export OPENAI_API_KEY=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

 aApp="c35_calendar-app"
 aModel=""
 
 aVer=
 aMessages_File="c35_u020.01.40703.1805_messages.json"
 aRequest__File="c35_u020.01.40703.1805_request_.curl.sh"
 aResponse_File="c35_u020.01.40703.1805_response.json"
 aMarkdown_File="c35_u020.01.40703.1805_markdown.md"

#bash ${aRequest__File}
 bash ${aRequest__File} >${aResponse_File}

 jq '.choices[0].message.content' ${aResponse_File} >${aMarkdown_File}
#jq '.choices[0].message.content' c35_u020.01.40703.1805_response.json >${aMarkdown_File}
#jq '.choices[0].message.content' c35_u020.01.40703.1805_response.json

cat ${aMarkdown_File}


  aResult="$( curl -s ${aAPI_URL} \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer ${aAPI_KEY}" \
     -d @${aInfile} )"

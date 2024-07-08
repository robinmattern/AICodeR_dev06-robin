#!/bin/bash

   nSession=26
   nMessage=2


#  nMsg1=$1; if [ "${nMsg1}" != "" ]; then nMessage=${nMsg1%.*};  nSession=${nMsg1##*.}; fi
   nMsg1=$1; if [ "${nMsg1}" != "" ]; then nMessage=${nMsg1##*.}; nSession=${nMsg1%.*};  fi
   nMsg2=$2; if [ "${nMsg2}" != "" ]; then nMessage=${nMsg2};
if [ "${nMsg1/./}" == "${nMsg1}" ] && [ "$2" == "" ]; then nMessage=1; fi; fi

   aUV="t"

   export AICodeR_Title="Assistant Response Message No. ${nSession}.${nMessage}"
   export aAPI_KEY=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
   export aAPI_URL=https://api.openai.com/v1/chat/completions

#  -----------------------------------------------------------------------------

   aPath=$(readlink -f "$0")
 __filename="${aPath##*/}"
 __dirname="${aPath%/*}"; aPath="${aPath%/*}"   # remove everything after /
 __basedir="${aPath%\/docs/*}";
   aModel="${aPath##*/}"; aPath="${aPath%/*}"   # Model is determined by current folder path
   aAppNm="${aPath##*/}"; aPath="${aPath%/*}"   # App Name is determined by current folder path
   aStage="${aPath##*/}";                       # remove everything before /

   echo -e "\n  aStage:  '${aStage}', aAppNm: '${aAppNm}', aModel: '${aModel}'";
#  echo -e "  __dirname: '${__dirname}'\n  __baseDir: '${__basedir}'"; exit

#  -----------------------------------------------------------------------------

function findLast( ) {
   bQuiet=1

   aPath="$1" # "."
   aType="$2" # "_messages.json"
   aTS_="$3"

   aVer0="${aUV}${aSession}.${aMessage}.1"; if [ "$3" != "" ]; then aVer0="${aVer0}.${aTS_}"; fi
   echo "  aVer0: '${aVer0}.${aTS}', aApp: ${aApp}, aSession: '${aUV}${aSession}', aMessage: '${aMessage}'"
#  aPattern="^${aVer0}.*${aType}$"
   aPattern="${aApp}_${aVer0}.*${aType}\$"
   aFoundFile=""

for aFile in "${aPath}"/*; do aFilename="${aFile:2}" # "${aFile#./}"
#   Check if filename starts with the start string and ends with the end string
#   if [[ ${aFile} == "$startString"* && ${aFile} == *"$endString" ]]; then

#   echo " ${aVer0}     =~  '${aFile}'"
#   echo " ${aPattern}  =~  ${aFile}"
    if [  "${bQuiet}" == "0" ]; then echo " ${aFilename} =~  ${aPattern}"; fi
#   if [[  ${aFile}     == "${aVer0}"*   && ${aFile} == *"${aType}"   ]]; then
#   if [[ "${aFilename}"=~ "${aPattern}" ]]; then
#   if [[  ${aFile:2}   =~  ${aPattern}  ]]; then
#   if [[  ${aPattern}  =~  ${aFile}     ]]; then
    if [[  ${aFilename} =~  ${aPattern}  ]]; then
      aFoundFile="${aFile}"
      fi
    done
   }
#  -----------------------------------------------------------------------------

 if [ "${aStage}" != "docs" ]; then
    echo -e "\n* You are not running this script in an {AppName}/{Model} folder."
    exit
    fi

    aStag1="${aStage}"
if [ ""c" == ${aAppNm:0:1}" ]; then aStage="client${aAppNm:1:1}"; fi
if [ ""s" == ${aAppNm:0:1}" ]; then aStage="server${aAppNm:1:1}"; fi

   aTS=$(date +'%y%m%d.%H%M'); aTS=${aTS:1}

if [ "${#nSession}" == "1" ]; then aSession="00${nSession}"; fi
if [ "${#nSession}" == "2" ]; then aSession="0${nSession}";  fi
if [ "${#nMessage}" == "1" ]; then aMessage="0${nMessage}";  fi

   aApp="${aAppNm:0:3}"

   aVer1="${aUV}${aSession}.${aMessage}.1.40707.1155"
   aVer2="${aUV}${aSession}.${aMessage}.2.${aTS}"

#  echo "  aVer1: '${aVer1}'"
#  echo "  aVer2: '${aVer2}', aApp: ${aApp}, aSession: '${aSession}', aMessage: '${aMessage}'"; # exit

#  findLast "." "_messages.json" $3
   findLast "." "_request_.json" $3

   aApp_Dir="${aStage}/${aAppNm}/${aModel}"
   aDoc_Dir="${aStag1}/${aAppNm}/${aModel}"

if [ "${aFoundFile}" != "" ]; then
   aVer1="${aFoundFile:6:20}"
   echo "  aVer1: '${aVer1}'"; # exit
   echo "  aVer2: '${aVer2}'"; # exit
   echo "  Request File:          ${aFoundFile:2}"; # exit
 else
#  echo -e "\n* No file found for '${aVer0}*${aType}' in '${aDoc_Dir}'"
   echo -e "\n* No file found for '${aPattern}' in '${aDoc_Dir}'"
   exit
   fi
#  -----------------------------------------------------------------------------

   aRequestScript="${__basedir}/._2/FRTs/AICodeR/AIC04_Curl-Request_u01.sh"

#  aRequest__File="c35_u020.01.1.40703.1805_request__.json"
## aMessages_File="c35_u020.01.1.40703.1805_messages.json"
#  aResponse_File="c35_u020.01.2.40703.1805_response.json"
#  aMarkdown_File="c35_u020.01.2.40703.1805_markdown.md"

   aRequest__File="${aFoundFile:2}";                export aRequest__File="${__dirname}/${aRequest__File}"
#  aMessages_File="${aApp}_${aVer1}_messages.json"; export aMessages_File="${__dirname}/${aMessages_File}"
   aResponse_File="${aApp}_${aVer2}_response.json"; export aResponse_File="${__dirname}/${aResponse_File}"
   aMarkdown_File="${aApp}_${aVer2}_markdown.md";   export aMarkdown_File="${__dirname}/${aMarkdown_File}"

#  echo "  aMessages_File:       ${aMessages_File}";   exit
   echo "  aResponse_File: ./docs${aResponse_File##*docs}";  # exit
   echo "  aRequestScript: ${aRequestScript}"; # exit
   echo ""

if [ ! -f "${aRequest__File}" ]; then
   echo -e "\n* The file '${aRequest__File}' doesn't exist in '${aDoc_Dir}'"
   exit
   fi
#  -----------------------------------------------------------------------------

   bQuiet=1; bHere=0

   echo "  ${aRequest__File}"; # exit
   echo "-----------------------------------------------------------------------------------------------------------------------"
   cat    "${aRequest__File}" | awk '{ print "  " $0 }'; #exit
   echo "-----------------------------------------------------------------------------------------------------------------------"
   echo ""

#  echo bash "${aRequestScript}"
   bash "${aRequestScript}"

   if [ "${bHere}" == 0 ]; then exit; fi

#  -----------------------------------------------------------------------------

if [ "${bQuiet}" == "1" ] && [ "${bHere}" == 1 ]; then

   aResult="$( curl -s ${aAPI_URL} \
    -H "Content-Type:  application/json"   \
    -H "Authorization: Bearer ${aAPI_KEY}" \
    -d  @${aRequest__File} )"

#  aResult="$( curl -s ${aAPI_URL} \
#   -H "Content-Type: application/json" \
#   -H "Authorization: Bearer ${aAPI_KEY}" \
#   -d @${__dirname}/${aRequest__File} )"

#  aResult="$( curl -s ${aAPI_URL} -H "Content-Type: application/json" -H "Authorization: Bearer ${aAPI_KEY}" -d @${aRequest__File} )"

     else
     if [ "${bHere}" == "1" ]; then

               curl -s ${aAPI_URL} \
    -H "Content-Type:  application/json"   \
    -H "Authorization: Bearer ${aAPI_KEY}" \
    -d  @${aRequest__File}

#              curl -s ${aAPI_URL} -H "Content-Type: application/json" -H "Authorization: Bearer ${aAPI_KEY}" -d @${aRequest__File}

#              curl    https://api.openai.com/v1/chat/completions \
#   -H "Content-Type: application/json" \
#   -H "Authorization: Bearer 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" \
#   -d  @${aRequest__File}

        fi; fi
#  -----------------------------------------------------------------------------

   echo "${aResult}"          >"${__dirname}/${aResponse_File}"

   aMarkdown="$( jq '.choices[0].message.content' "${aResponse_File}" )"
   aMarkdown="$( echo -e "${aMarkdown}" | sed 's/\\n/\
/g' )"

   echo -e "${aMarkdown//\"/}"


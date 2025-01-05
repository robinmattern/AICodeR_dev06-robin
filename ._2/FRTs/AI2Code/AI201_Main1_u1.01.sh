#!/bin/bash
#*\
##=========+====================+================================================+
##RD         Main1              | AI2Code Functions
##RFILE    +====================+=======+===============+======+=================+
##FD   AI201_Main1.sh           |  21714| 10/26/24 17:20|   461| p1.02`.41026.1720
#
##DESC     .--------------------+-------+---------------+------+-----------------+
#            This script implements AI2code functions.
#
##LIC      .--------------------+----------------------------------------------+
#            Copyright (c) 2024 JScriptWare and 8020Date-FormR * Released under
#            MIT License: http://www.opensource.org/licenses/mit-license.php
##FNCS     .--------------------+----------------------------------------------+
#                               |
#            help               |
#            exit_wCR           |
#            setOSvars          |
#            getRepoDir         |
#                               |
##CHGS     .--------------------+----------------------------------------------+
#.(41228.01  12/28/24 RAM 11:30a| Created AI201_Main1.sh

##PRGM     +====================+===============================================+
##ID 69.600. Main0              |
##SRCE     +====================+===============================================+
#*/
#========================================================================================================== #  ===============================  #

        aVDt="Dec 28, 2024 11:30a"; aVer="p1.01"; aVTitle="AI2code by formR";                                             # .(41228.01.1).(41103.02.2 RAM Was: gitR1)
        aVer="$( echo "$0" | awk '{ match( $0, /_[dpstuv][0-9]+\.[0-9]+/ ); print substr( $0, RSTART+1, RLENGTH-1) }' )"  # .(21031.01.1 RAM Add [d...).(20416.03.8 "_p2.02", or _d1.09)
          
        LIB="AI2CD"; LIB_LOG=${LIB}_LOG; LIB_USER=${LIB}_USER; Lib=${LIB}; aDir="$( cd "$( dirname "$0" )" && pwd)"       # .(41228.01.1).(41103.02.3).(41102.01.1 RAM Add JPT12_Main2Fns_p1.07.sh Beg).(80923.01.1)
        aFns="${aDir}/../JPT12_Main2Fns_p1.07.sh"; if [ ! -f "${aFns}" ]; then   # It's in ._2/FRTs 
        echo -e "\n ** ${LIB}[  35]  JPT Fns script, '${aFns}', NOT FOUND\n"; exit; fi; #fi
        source "${aFns}";                                                                                                 # .(41102.01.1 End)

#       aVdt="${aVDt}"; aVtitle="gitR Tools"                                                                              # .(20420.07.2 RAM JPT12_Main2Fns uses these)
        Begin "$@"                                                                                                        # .(41102.01.2)

# ---------------------------------------------------------------------------

function help() {                                                                                           # .(41228.01.2 RAM Add new Help)
     echo ""
#    echo "  GitR Commands (${aVer})"
     echo "  ${aVTitle} (${aVer})         (${aVDt})"
     echo "  -------------------------------------------  ---------------------------------"
     echo "    Add App \"ANo\" \"AppName\"                    Create a new app folder"         
     echo "    Set App \"ANo\"                              Set App for AI Program Scripts"         
     echo "    Set Model \"Model\"                          Set Model for AI Program Scripts"      
     echo "    Add Model \"Model\" \"ModelName\"              Add Model Parameters for AI Generation"                     
#    echo "    Add System Prompt                          Add System Prompt [from File}""   
     echo "    Set System [Prompt] [\"@{File\"]             Set System Prompt [from File}" 
     echo "    Set Prompt                                 Set Next User Prompt Message"   
     echo "    Run AI2Code                                Run AI Model to Generate AI App" 
     echo "    View Session [\"#[.MsgNo[.TS]]\"]            View AI Markdown Session file"   
     echo "    Save Scripts                               Save AI Program Scripts"  

#    echo " 9. Make AppModel \"ANo\" \"AppName\" \"Model\"      Create a Folder for [ANo] (c##_name-of-client-app or s##_name-of-server-api)"
#    echo "26. Edit Sys Msg [\"#\"] [\"ANo\"] [\"Model\"]       Edit System Prompt for Session # (aka Thread ###)"
#    echo "20. New  Prompt  [\"#\"] [\"ANo\"] [\"Model\"]       Create a new Session Prompt Message File for [ANo] [Model]"
#    echo "15. Run [Model]  [\"ANo\" [\"Model\"               Run an AI Session Prompt for [Last] UsrMessage file for [Model]"
#    echo "23. View Prompt  [\"#[.MsgNo[.TS]]\"] [\"Model\"]  Open a Session Prompt Message File for [ANo] [Model]"
#    echo " 5. List Scripts [\"#[.MsgNo[.TS]]\"] [\"Model\"]  Show App scripts for [last] Message Markdown File for [ANo] [Model]"
#    echo " 6. Save Scripts [\"#[.MsgNo[.TS]]\"] [\"Model\"]  Save App scripts for [last] Message Markdown File for [ANo] [Model]"
 
#    echo "    Cmd                                        Cmd Title"                                        # .(41228.01.2 End)                                              
#    echo "    Init                                       Initialize a git repository"   
     echo "    [-b]                                       Show debug messages"
     echo "    [-d]                                       Doit, i.e. execute the command"
#    echo ""
#    echo "    Note: [name] defaults to ${aLocation}"
#    echo "          [acct] defaults to ${aAcct}"
# if [ "${aProject}" != "" ]; then
#    echo "          [proj] defaults to ${aProject}"
#    echo "          [repo] defaults to ${aProject}_${aStage}"
#  else
#    echo "          [proj] defaults to a Project_ folder"
#    echo "          [repo] defaults to a Project_/Stage folder"
#    fi
     exit_wCR
     }
# ---------------------------------------------------------------------------

function exit_wCR() {
# if [ "${OSTYPE:0:6}" == "darwin"  ]; then echo ""; fi                                 ##.(41120.01.1)
  if [ "${OS:0:7}"     != "Windows" ]; then echo ""; fi                                 # .(41120.01.1 RAM Fix exit_wCR)
# [[ -z $(tail -c1) ]] || echo                                                          ##.(41202.04.1 RAM An incorrect suggestion from claude. He thought that tail checks the last char of the current output)
     exit # ${1:-0}
     }
# ---------------------------------------------------------------------------

function setOSvars() {
     aTS=$( date '+%y%m%d.%H%M' ); aTS=${aTS:1}                                                             # .(41225.01.2)
#    aBashrc="$HOME/.bashrc"                                                                                ##.(41208.02c.1)
     if [ -f "$HOME/.bash_profile" ]; then aBashrc="$HOME/.bash_profile"; fi                                # .(41208.02c.1)
     if [ -f "$HOME/.bashrc"       ]; then aBashrc="$HOME/.bashrc"; fi                                      # .(41208.02c.2)
     aBinDir="/Home/._0/bin"
     aOS="linux"
  if [[ "${OS:0:7}" == "Windows" ]]; then
     aOS="windows";
     aBinDir="/C/Home/._0/bin"
     fi
  if [[ "${OSTYPE:0:6}" == "darwin" ]]; then
     aBashrc="$HOME/.zshrc"
     aBinDir="/Users/Shared/._0/bin"
     aOS="darwin"
     fi
     }
# -----------------------------------------------------------

function Sudo() {                                                                                           # .(41105.03.1 RAM Write Sudo)
  if [[ "${OS:0:7}" != "Windows" ]]; then if [ "${USERNAME}" != "root" ]; then sudo "$@"; fi; fi            # .(41105.03.12 RAM Was: "windows").(41105.03.2)
     }                                                                                                      # .(41105.03.3)
# -----------------------------------------------------------

# function setFlags

# Initialize variables
    bDebug=0; bDoit=0;  mArgs=(); mARGs=($1)
    aArg1=$1; aArg2=$2; aArg3=$3; aArg4=$4; aArg5=$5; aArg6=$6; aCmd=""
    sayMsg  "AI2CD[ 121]  \$aArg1: '$aArg1',   \$aArg2:    '$aArg2',  \$aArg3:    '$aArg3',    \$aArg4:    '$aArg4',  \$aArg5:    '$aArg5',  \$aArg6:    '$aArg6'" -1

while [[ $# -gt 0 ]]; do  # Loop through all arguments
    case "$1" in
#       -[bdf]*)           # Handle combined flags                                      ##.(41105.02.1 Beg)
#           if [[ "$1" =~ "b" ]]; then  bDebug=1; fi
#           if [[ "$1" =~ "d" ]]; then  bDoit=1; fi
#           if [[ "$1" =~ "f" ]]; then  bForce=1; fi                                    ##.(41105.02.1 Beg)
        -doit|--doit)    bDoit=1 ;;                                                     # .(41105.02.2 RAM Rewrite)
        -debug|--debug)  bDebug=1 ;;                                                    # .(41105.02.3)
        -force|--force)  bForce=1 ;;                                                    # .(41105.02.4)
        -[bdf]*)         [[ "$1" =~ "b" ]] && bDebug=1; [[ "$1" =~ "d" ]] && bDoit=1; [[ "$1" =~ "f" ]] && bForce=1 ;;  # .(41105.02.5)
        *)
         mArgs+=("$( echo "${1:0:3}" | sed 'y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/')"); # mARGs+=("$1")
         mARGs+=("$1")
         i=${#mARGs[@]}
#        sayMsg  "AI2CD[ 137]  \${mARGs[${i}]}: '${mARGs[${i}]}', \$$i: '$1'" 1
         ;;
    esac
    shift
  done
    set -- "${mArgs[@]}"  # Restore the command arguments, lower case, three letters
    aArg1="$1"; aArg2="$2"; aArg3="$3"; aArg4="$4"; aArg5="$5"; aArg6="$6"; aArg7="$7"; aArg8="$8"; aArg9="$9" 
    sayMsg  "AI2CD[ 145]  \$mARGs[1]: '${mARGs[1]}',  \$mARGs[2]: '${mARGs[2]}',    \$mARGs[3]: '${mARGs[3]}',  \$mARGs[4]: '${mARGs[4]}',  \$mARGs[5]: '${mARGs[5]}',  \$mARGs[6]: '${mARGs[6]}',  \$mARGs[7]: '${mARGs[7]}'" 1
    sayMsg  "AI2CD[ 146]  \$1:     '$1',     \$2:        '$2',          \$3:        '$3',      \$4:        '$4',     \$5:        '$5',   \$6:        '$6',  \$7:        '$7'" 1
    sayMsg  "AI2CD[ 147]  \$aArg1: '$aArg1', \$aArg2: '$aArg2',  \$aArg3: '$aArg3',  \$aArg4: '$aArg4',  \$aArg5:    '$aArg5',  \$aArg6:    '$aArg6',  \$aArg7:    '$aArg7'" -1
    sayMsg  "AI2CD[ 148]  \$bDoit: '$bDoit', \$bForce: '$bForce', \$bDebug: '$bDebug'" -1
    sayMsg  "AI2CD[ 149]  \$mARGs[2]: '${mARGs[2]}', \$aArg3: '$aArg3', \$3 '$3'" -1
#   sayMsg  "AI2CD[ 150]  \$mARGs[3]: '${mARGs[3]}', \$aArg4: '$aArg4', \$4 '$4'" -1
# ---------------------------------------------------------------------------

# if [ "$1" == "ini" ];                      then aCmd="init";    fi               
# if [ "$1" == "cmd" ];                      then aCmd="cmd";     fi                                  
# if [ "$1" == "cmd" ] && [ "$2" == "sub" ]; then aCmd="cmdSub";  fi               

# if [ "$1" == "sta" ];                      then aCmd="status";        fi   
  if [ "$1" == "hel" ] || [ "$1" == ""    ]; then aCmd="help";          fi   
  if [ "$1" == "add" ] && [ "$2" == "app" ]; then aCmd="addApp";        fi        
  if [ "$1" == "set" ] && [ "$2" == "app" ]; then aCmd="setApp";        fi        
  if [ "$1" == "set" ] && [ "$2" == "mod" ]; then aCmd="setModel";      fi     
  if [ "$1" == "add" ] && [ "$2" == "mod" ]; then aCmd="addModel";      fi                       
# if [ "$1" == "add" ] && [ "$2" == "sys" ]; then aCmd="setSysPrompt";  fi  
  if [ "$1" == "set" ] && [ "$2" == "sys" ]; then aCmd="setSysPrompt";  fi  
  if [ "$1" == "set" ] && [ "$2" == "pro" ]; then aCmd="setUsrPrompt";  fi  
  if [ "$1" == "run" ];                      then aCmd="runAI2code";    fi  
  if [ "$1" == "run" ] && [ "$2" == "ai2" ]; then aCmd="runAI2code";    fi  
  if [ "$1" == "vie" ] && [ "$2" == "ses" ]; then aCmd="viewSession";   fi  
  if [ "$1" == "sav" ] && [ "$2" == "scr" ]; then aCmd="saveScripts";   fi  
  if [ "$1" == "sav" ];                      then aCmd="saveScripts";   fi  
# if [ "$1" == "mak" ];                      then aCmd="makeAppModel";  fi  
# if [ "$1" == "edi" ] && [ "$2" == "sys" ]; then aCmd="editSysPrompt"; fi  
# if [ "$1" == "new" ] && [ "$2" == "pro" ]; then aCmd="addNextPrompt"; fi    
# if [ "$1" == "run" ];                      then aCmd="runAI2code";    fi  
# if [ "$1" == "vie" ];                      then aCmd="viewPrompt";    fi  
# if [ "$1" == "vie" ] && [ "$2" == "pro" ]; then aCmd="viewPrompt";    fi    
# if [ "$1" == "lis" ];                      then aCmd="listScripts";   fi  
# if [ "$1" == "lis" ] && [ "$2" == "scr" ]; then aCmd="listScripts";   fi  
# if [ "$1" == "sav" ];                      then aCmd="saveScripts";   fi  
# if [ "$1" == "sav" ] && [ "$2" == "scr" ]; then aCmd="saveScripts";   fi  
 
   sayMsg  "AI2CR[ 182]  aCmd: ${aCmd}, aArg1: '$aArg1', aArg2: '$aArg2', aArg3: '$aArg3', aArg4: '$aArg4', bDoit: '$bDoit', bForce: '$bForce'" -1
  if [ "${aCmd}" == "" ]; then 
     echo -e "\n* Invalid command. Use any of these."
     aCmd="help"
     fi 
# ---------------------------------------------------------------------------

function chkRepo() {                                                                                        # .(41103.03.3 RAM Write chkRepo Beg)

#if [ "${aStage}"   == "$(pwd)" ]; then
 if [ "${aRepoDir}" == "" ]; then
#if [ "${aStage}"   == "" ]; then
    echo "* You are not in a ${aProject}_/{StgDir} Git Repository"
    exit_wCR
  else
    echo "  RepoDir is: ${aRepoDir}, branch: ${aBranch}";   # exit_wCR
    fi
    }                                                                                                       # .(41103.03.3 End)
# ---------------------------------------------------------------------------

 function getRepoDir() {

   aRepos="$( echo "$(pwd)"       | awk '{ match( $0, /.*[Rr][Ee][Pp][Oo][Ss]/); print substr($0,1,RLENGTH) }' )"
   if [ "${aRepos}" == "" ];        then aRepos="$( dirname $(pwd) )"; fi; # echo "  aRepos: '${aRepos}'"   # .(41129.05.1 RAM What if no Repos dir)
   aRepo="$( git remote -v        | awk '/origin.+push/ { sub( /.+\//, ""); sub( /\.git.+/, "" ); print }' )"
#  aProjDir="${aRepoDir%%_*}"
#  aProjDir="$( echo "$(pwd)"     | awk '{ sub( "'${aRepoDir}'", "" ); print }' )"
#  aAWK='{ sub( "'${aRepos//\//\/}'/", "" ); sub( /[\/_].*/, "_"); print }';             # echo "  aAWK:    '${aAWK}'"  # double up /s
   aAWK='{ sub( "'${aRepos}'/", "" );  sub( /_\/*.+/, "" ); sub( /\/.+/, "" ); print }'; # echo "  aAWK: echo \"\$(pwd)\" | awk '${aAWK}'"
   aProject="$( echo "$(pwd)"     | awk "${aAWK}" )"
#  echo "  aProject:    '${aProject}'"; exit
   aStgDir="$(  echo "$(pwd)"     | awk '{ sub( "'.+"${aProject}"'", "" ); print }' )"                      # .(41103.04.1 RAM Added "{aProject}" based on ShellCheck)
   aStage="$(   echo "${aStgDir}" | awk '{ sub( "^[_/]+", "" ); print }' )"
   aRepoDir="${aRepos}/${aProject}${aStgDir}"
   if [ "${aRepo}" == "" ]; then aRepo="${aProject}${aStgDir}"; fi

   getBranch                                                                                                # .(41104.04.2)
#          bDebug=1
   if [ "${bDebug}" == "1" ]; then
   echo "  - aRepos:   '${aRepos}'"
   echo "  - aRepo:    '${aRepo}'"
   echo "  - aProject: '${aProject}'"
   echo "  - aStage:   '${aStage}'"
   echo "  - aBranch:  '${aBranch}'"                                                                          # .(41102.02.2)
   echo "  - aRepoDir: '${aRepoDir}'"
   echo "  - aAcct:    '${aAcct}'"
   echo ""
#  exit_wCR
   fi
   } # eof getRepoDir
# ---------------------------------------------------------------------------

function getReposDir() {                                                                                    # .(41103.03b.1 RAM Write getReposDir for gitr Init Beg)

         aDir="$( pwd )"
         aREpos="$( echo "${aDir}" | awk '{ match( $0, /.*[Rr][Ee][Pp][Oo][Ss]/); print substr($0,1,RLENGTH) }' )"
         aRDirs="$( echo "${aDir}" | awk '{ match( $0, /.*[Rr][Ee][Pp][Oo][Ss]/); print substr($0,RLENGTH+2) }' )"

     if [ "${aREpos}" == "" ]; then
         echo -e "\n* You must be in a Repos folder."
         exit_wCR
         fi

         aSDirs="$( find . -maxdepth 2 -type d -name "?1_*" | awk '{ print; exit }' )"
         sayMsg  "AI2CD[ 242]  aSDirs: '${aSDirs}'" -1
     if [ "${aRDirs}" != "" ]; then  # aRepos has no subfolder
        if [ "${aSDirs}" != "" ] || [ "$1" == "no-check" ]; then
           aREpos="${aREpos}/${aRDirs}"  # It is a Repos dir
         else
           if [ -d ".git" ]; then
              echo -e "\n* This project folder already contains a git repository"
              exit_wCR
              fi # eif .git exists
           echo -e "\n* You must be in a Repos folder with a subfolder: ._/!1_Support Files for ..."
           aREpos=""
           exit_wCR
           fi;  # eif aSDirs
       else
#        if [ "${aSDirs}" != "" ] || [ "$1" == "no-check" ]; then return; fi
         if [ "${aSDirs}" != "" ]; then return; fi
         sayMsg  "AI2CD[ 258]  The Repos root folder does not contain a subfolder: ._/!1_Support Files for ..." -1
         fi

         sayMsg  "AI2CD[ 261]  aRepos: '${aREpos}', aRDirs: '${aRDirs}'" -1
#       echo "${aREpos}"
        } # // eof getReposDir                                                                              # .(41103.03b.1 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========
#>      AI2CD HELP                                                                                          # .(41228.01.3 RAM Add AI2code Init command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "help" ]; then                                                                          #  
     sayMsg  "AI2CD[ 275]  Help" -1
     help
     exit_wCR
     fi # eoc Help                                                                                          # .(41228.01.3 End)                                                                                        # .(41228.01.3 Beg RAM Add AI2code Init Beg)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #
#====== =================================================================================================== #  ===========

#====== =================================================================================================== #  ===========
#>      AI2CD INIT                                                                                          # .(41228.01.3 RAM Add AI2code Init command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "init" ]; then                                                                          #  
     sayMsg  "AI2CD[ 287]  Init" -1
     sayMsg  "AI2CD[ 388]  init"  1  

     exit_wCR
     fi # eoc Init                                                                                          # .(41228.01.3 End)                                                                                        # .(41228.01.3 Beg RAM Add AI2code Init Beg)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #
#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      ADD APP                                                                                             # .(41228.01.4 RAM Add App Add Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "addApp" ]; then
     sayMsg  "AI2CD[ 300]  Add App" -1
     aApp="${mARGs[2]}"
     aAppName="${mARGs[3]}"
     sayMsg  "AI2CD[ 303]  addApp aApp: \"${aApp}\", aAppName: \"${aAppName}\"" 1  

     exit_wCR
     fi # eoc addApp                                                                                        # .(41228.01.4 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      SET APP                                                                                             # .(41228.01.5 RAM Set App Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "setApp"        ]; then        
     sayMsg  "AI2CD[ 316]  Set App" -1
     aApp="${mARGs[2]}"
     sayMsg  "AI2CD[ 318]  setApp aApp: \"${aApp}\"" 1    

     exit_wCR
     fi # eoc setApp                                                                                        # .(41228.01.5 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      SET MODEL                                                                                           # .(41228.01.6 RAM Set Model Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "setModel"      ]; then  
     sayMsg  "AI2CD[ 331]  Set Model" -1
     aModel="${mARGs[2]}"
     sayMsg  "AI2CD[ 333]  setModel aModel: \"${aModel}\"" 1    

     exit_wCR
     fi # eoc setMOdel                                                                                      # .(41228.01.6 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      ADD MODEL                                                                                           # .(41228.01.7 RAM Add Model Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "addModel"      ]; then 
     sayMsg  "AI2CD[ 346]  Add Model" 1
     aModel="${mARGs[2]}"
     aModelName="${mARGs[3]}"
     sayMsg  "AI2CD[ 349]  addModel aModel: \"${aModel}\", aModelName: \"${aModelName}\"" 1  

     exit_wCR
     fi # eoc addModel                                                                                      # .(41228.01.7 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      MAKE APP MODEL                                                                                      # .(41228.01.8 RAM Make App Model Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "makeAppModel"  ]; then
     sayMsg  "AI2CD[ 362]  Make App Model" -1
     aApp="${aArg1}"
     aModel="${aArg2}"
     sayMsg  "AI2CD[ 365]  makeAppModel aApp: \"${aApp}\", aModel: \"${aModel}\"" 1    

     exit_wCR
     fi # eoc makeAppModel                                                                                  # .(41228.01.8 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      SET SYSTEM PROMPT                                                                                   # .(41228.01.9 RAM Set System Prompt Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "setSysPrompt"  ]; then
     sayMsg  "AI2CD[ 378]  Set System Prompt" -1
     aFile="${mARGs[3]}"; if [ "${aArg3}" == "pro" ]; then aFile="${mARGs[4]}"; mARGs[4]=""; fi
     sayMsg  "AI2CD[ 380]  setSysPrompt aFile: \"${aFile}\"" 1    

     exit_wCR
     fi # eoc setSysPrompt                                                                                  # .(41228.01.9 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      EDIT SYSTEM PROMPT                                                                                  # .(41228.01.10 RAM Edit System Prompt Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "editSysPrompt" ]; then
     sayMsg  "AI2CD[ 3694]  Edit System Prompt" -1
     aFile="${mARGs[2]}"; if [ "aArg3" == "pro" ]; then aFile="${mARGs[3]}"; mARGs[3]=""; fi
     sayMsg  "AI2CD[ 381]  editSysPrompt aFile: \"${aFile}\"" 1  
     exit_wCR
     fi # eoc editSysPrompt                                                                                 # .(41228.01.10 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      ADD NEXT USER PROMPT                                                                                # .(41228.01.11 RAM Add Next User Prompt Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "addNextPrompt" ] || 
     [ "${aCmd}" == "setUsrPrompt"  ]; then
     sayMsg  "AI2CD[ 380]  Add Next User Prompt" 1

     exit_wCR
     fi # eoc addNextPrompt                                                                                 # .(41228.01.11 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

# ------------------------------------------------------------------------------------
#>      VIEW USER PROMPT                                                                                    # .(20102.01.12 RAM View User Prompt Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "viewPrompt"    ]; then
     sayMsg  "AI2CD[ 391]  View Prompt" 1

     exit_wCR
     fi # eoc viewPrompt                                                                                  # .(20102.01.12 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      RUN AI2CODE                                                                                         # .(41228.01.13 RAM Run AI2COde Command Beg)
#====== =================================================================================================== #
 
  if [ "${aCmd}" == "runAI2code"    ]; then
     sayMsg  "AI2CD[ 404]  Run AI2code" 1 

     exit_wCR
     fi # eoc runAI2code                                                                                    # .(41228.01.13 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      VIEW SESSION                                                                                        # .(41228.01.14 RAM View Session Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "viewSession"   ]; then
     sayMsg  "AI2CD[ 417]  View Session" 1


     exit_wCR
     fi # eoc viewSession                                                                                   # .(41228.01.14 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#>      LIST SCRIPTS                                                                                        # .(41228.01.15 RAM List Scripts Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "listScripts"   ]; then
     sayMsg  "AI2CD[ 431]  List Scripts" 1

     exit_wCR
     fi # eoc viewPrompt                                                                                    # .(41228.01.15 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========
# ------------------------------------------------------------------------------------
#>      SAVE SCRIPTS                                                                                        # .(41228.01.16 RAM Save Scripts Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "saveScripts"   ]; then     
     sayMsg  "AI2CD[ 443]  Save Scripts" 1

     exit_wCR
     fi # eoc saveScripts                                                                                   # .(41228.01.16 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

#====== =================================================================================================== #  ===========
# ------------------------------------------------------------------------------------
#>      NEXT COMMAND                                                                                        # .(20102.01.2 RAM Add Next Command Beg)
#====== =================================================================================================== #

  if [ "${aCmd}" == "Next Command" ]; then
     sayMsg  "AI2CD[ 457]  Next Command" 1

     exit_wCR
     fi # eoc Next Command                                                                                  # .(20102.01.2 End)
#    -- --- ---------------  =  ------------------------------------------------------  #  ---------------- #

#====== =================================================================================================== #  ===========

# ------------------------------------------------------------------------------------
#       END
#========================================================================================================== #  ===============================  #
#*\
##SRCE     +====================+===============================================+
##RFILE    +====================+=======+===================+======+=============+
#*/

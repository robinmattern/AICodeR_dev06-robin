#!/bin/bash
#!/bin/bash
#*\
##=========+====================+================================================+
##RD         set-frtools        | JScriptWare Power Tools
##RFILE    +====================+=======+=================+======+===============+
##FD         set-aicoder.sh     |   9479| 12/28/24 10:30|   136| v1.01`41228.1030
##FD         set-aicoder.sh     |   9804| 12/29/24 20:45|   203| v1.01`41229.2045
#
##DESC     .--------------------+-------+-----------------+------+---------------+
#            Copy command scriptfor ai2code and aicoder
#
##LIC      .--------------------+----------------------------------------------+
#            Copyright (c) 2024 formR Tools - 8020 Data * Released under
#            MIT License: http://www.opensource.org/licenses/mit-license.php
##FNCS     .--------------------+-------+-------------------+------+-----------+
#            help               | List of ommands         |
#            cpyToBin           |
#            cpyScript          |
#            setOSvars          |
#            exit_withCR        |
#            Sudo               |
#                               |
##CHGS     .--------------------+-------+-------------------+------+-----------+
# .(41228.01 12/28/24 RAM 10:30a| Created
# .(41229.01 12/29/24 RAM  4:15p| Fixe launch paths
# .(41229.02 12/29/24 RAM  4:15p| Add ai2code
# .(50105.07  1/05/25 RAM  4:00p| Cleaned up show command

##PRGM     +====================+===============================================+
##ID 69.600. Main0              |
##SRCE     +====================+===============================================+
#*/
#========================================================================================================== #  ===============================  #

  aVer="v1.05\`41128.1030"
  aVer="v1.05\`41129.1615"

  echo ""

# ---------------------------------------------------------------------------

function help() {
  echo "  Run ./set-frtools.sh commands: (${aVer}, OS: ${aOS})"
  echo "    help             This help"
  echo "    show            ${aBashrc} and script files"
  echo "    doit             Do scripts -doit"                                                              # .(41031.02.1)
  echo "    scripts [-doit]  Copy FRTools scripts"
  echo "    wipe    [-doit]  Erase all setup changes"                                                       # .(41030.03.1)
  exit_withCR
  }
# -----------------------------------------------------------

function setOSvars() {
     aTS=$( date '+%y%m%d.%H%M' ); aTS=${aTS:1}                                                             # .(41225.01.1 RAM Was ${aTS:2})
#    aBashrc="$HOME/.bashrc"                                                                                ##.(41208.02c.1)
     if [ -f "$HOME/.bashrc"       ]; then aBashrc="$HOME/.bashrc"; fi                                      # .(41208.02b.1).(41208.02c.2)
     if [ -f "$HOME/.bash_profile" ]; then aBashrc="$HOME/.bash_profile"; fi                                # .(41208.02b.2).(41208.02c.1)
     aBinDir="/home/._0/bin"                                                                                # .(41211.02.1 RAM Was /Home/._0/bin)
     aOS="linux"
  if [[ "${OS:0:7}" == "Windows" ]]; then
     aOS="windows";
     aBinDir="/C/Home/._0/bin"
     fi
  if [[ "${OSTYPE:0:6}" == "darwin" ]]; then
     if [ -f "$HOME/.bashrc"       ]; then aBashrc="$HOME/.bashrc"; fi                                      # .(41208.02b.3).(41208.02.2)
     if [ -f "$HOME/.bash_profile" ]; then aBashrc="$HOME/.bash_profile"; fi                                # .(41208.02b.4).(41208.02.1)
     if [ -f "$HOME/.zshrc"        ]; then aBashrc="$HOME/.zshrc"; fi                                       # .(41208.02.3)
     bZSHver="0"; if [[ "${OSTYPE:6:2}" > 21 ]]; then bZSHver="1"; fi                                       # .(41208.02b.1)
#    echo "  bZSHver: '${bZSHver}', OSTYPE:6:2: '${OSTYPE:6:2}'"; exit
     aBinDir="/Users/Shared/._0/bin"
     aOS="darwin"
     fi
     }
# -----------------------------------------------------------

function Sudo() {
  if [[ "${aOS}" != "windows" ]]; then if [ "${USERNAME}" != "root" ]; then sudo "$@"; fi; fi
     }
# -----------------------------------------------------------

function exit_withCR() {
  if [[ "${aOS}" != "windows" ]]; then echo ""; fi
     }
# -----------------------------------------------------------

                                      aCmd="help";    bDoWipe="0";   bDoShow="0";   bDoScripts="0";
#  if [[ "$1" == ""          ]]; then aCmd="help";    fi
   if [[ "${1:0:3}" == "hel" ]]; then aCmd="help";    fi
   if [[ "${1:0:2}" == "-d"  ]]; then aCmd="doit";                                  bDoScripts="1";  fi
   if [[ "${1:0:3}" == "doi" ]]; then aCmd="doit";                                  bDoScripts="1";  fi
   if [[ "${1:0:3}" == "sho" ]]; then aCmd="showEm";  fi
   if [[ "${1:0:3}" == "scr" ]]; then aCmd="copyEm";  if [[ "$2" == "doit" ]]; then bDoScripts="1";  fi; fi
   if [[ "${1:0:3}" == "wip" ]]; then aCmd="wipeIt";  if [[ "$2" == "doit" ]]; then bDoWipe="1"; fi; fi

# ---------------------------------------------------------------------------

function showEm() {

  echo "  aBinDir: '${aBinDir}'"
# if [ -f "${aBinDir}/frt" ]; then ls -l "${aBinDir} ai" | awk 'NR > 1 { print "    " $0 }'; fi
  if [ -f "${aBinDir}/frt" ]; then rdir "${aBinDir}" "ai" | awk 'NR > 3 { print substr( $0, 7 ) }'; fi      #  .(50105.07.1)
  echo ""
                                                                                                            ## .(50105.07.1 RAM Removed a lot)
  echo "  \${PATH (bin folders only):"
  echo "${PATH}" | awk '{ gsub( /:/, "\n" );  print }' | awk '/[us]ers|[hH]ome/ && length($0) < 20' | awk '/[.]*bin$/ { print "    " $0 }'
  }
# -----------------------------------------------------------

function clnHouse() {

  if [[  "${bDoWipe}" == "0" ]]; then
   echo "  About to delete the AICoder scripts from ${aBinDir}"; return
   else
#    PATH="${PATH/${aBinDir}:/}"    # remmove "${aBinDir}:"" from $PATH

  if [[ -f "${aBinDir}"/aic ]] || [[ -f "${aBinDir}"/ai2code ]]; then
   echo "  Deleting the AICoder scripts from ${aBinDir}"
     rm   "${aBinDir}"/aic;
     rm   "${aBinDir}"/aicoder;
     rm   "${aBinDir}"/ai2code;
   else
   echo "  Nothing to delete from ${aBinDir}";
   exit_CR
     fi

#    cp -p "${aBashrc}" "${aBashrc}_v${aTS}"
#    cat   "${aBashrc}" | awk '/._0/ { exit }; NF > 0 { print }' >"${aBashrc}_@tmp"
#    mv    "${aBashrc}_@tmp" "${aBashrc}"

   echo "  Wipe of the AICoder scripts complete";
     fi
  }
# -----------------------------------------------------------

function cpyToBin() {

     aScrDir="${aBinDir}";

 if [   -d "${aScrDir}"   ]; then                                                     echo "  Won't create BinDir. It already exists: \"${aScrDir}\""; fi
 if [ ! -d "${aScrDir}"   ]; then
 if [ "${bDoScripts}" == "0" ]; then                                                  echo "  Will create BinDir: doesnt exist \"${aScrDir}\""; else
 if [ "${aOS}" == "windows"  ]; then      mkdir -p  "${aScrDir}";
                                else Sudo mkdir -p  "${aScrDir}"; fi;                 echo "  Created BinDir:  it didn't exist \"${aScrDir}\""
                                     Sudo chmod 777 "${aScrDir}"; fi;
        fi;
    cpyScript "aic     " "${aRepo_Dir}/._2/FRTs/AICodeR/AIC01_Main0.sh"
    cpyScript "aicoder " "${aRepo_Dir}/._2/FRTs/AICodeR/AIC01_Main0.sh"                #.(41229.02.1 RAM Add aicoder)
    cpyScript "ai2code " "${aRepo_Dir}/._2/FRTs/AI2Code/AI201_Main0.sh"                #.(41229.02.2 RAM Add ai2code)

   cd "${aRepo_Dir}"

  Sudo find . -type f -name "*.sh" -exec chmod 755 {} \;                                #  For those in aRepo_Dir

  if [ "${bDoScripts}" == "1" ]; then echo -e "\n  AICoder scripts installed."; fi                          #  .(50105.07.2)
  }
# ---------------------------------------------------------------------------

function cpyScript() {

  aScript="$2"; aName1="$1"; aName="${aName1// /}"   # echo "  cp -p \"${aScript}\" to \"${aScrDir}/${aName}\""
#                                                      echo "  copying script:    \"${aScript}\" to \"${aScrDir}/${aName}\""

# if [ ! -f "${aScript}" ]; then                       echo "* Script not found:  \"${aScript}\""; return; fi

  if [ "${bDoScripts}" == "0" ]; then                  echo "  Will create script: ${aScrDir}/${aName1} for \"${aScript}\""; return; fi
  if [ "${bDoScripts}" == "1" ]; then
  if [ -f "${aScript}"        ]; then makScript  "${aScript}" "${aRepo_Dir}" "${aName}"; echo "  Created script in:                              \"${aRepo_Dir}/${aName}\"";   # .(41229.02.1 RAM Create command in aRepo_Dir)
                                      makScript  "${aScript}" "${aScrDir}" "${aName}";   echo "  Created script in: ${aScrDir}/${aName1} for \"${aScript}\"";
                                 fi
#                                Sudo chmod  777 "${aScript}";                          ##.(41104.03.1 RAM No need to set permission for each script
       fi # eif bDoScripts
  }
# ---------------------------------------------------------------------------

function  makScript() {
# echo -e "\n  Making  script in: $2/$3";  return
# echo "    aAnyLLMscr:  $2/$3"
# return
  echo "#!/bin/bash"   >"$2/$3"
  echo "  $1 \"\$@\"" >>"$2/$3"
  chmod 777 "$2/$3"
  }
# -----------------------------------------------------------

     aRepo_Dir="$(pwd)"
     cd ..

  setOSvars;          # echo "  OS: ${aOS}"

  if [[ "${aCmd}" == "help"    ]]; then help; fi
  if [[ "${aCmd}" == "doit"    ]]; then cpyToBin; fi  # setBashrc; fi                                       # .(41031.02.3)
  if [[ "${aCmd}" == "showEm"  ]]; then showEm; fi
  if [[ "${aCmd}" == "copyEm"  ]]; then cpyToBin; fi
  if [[ "${aCmd}" == "wipeIt"  ]]; then clnHouse; fi

# ---------------------------------------------------------------------------

#    cd "${aRepo_Dir}"
     exit_withCR
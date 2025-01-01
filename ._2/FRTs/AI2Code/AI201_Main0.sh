#!/bin/sh
#   AIC Launcher (Prod Copy)

#       AI2_Scr=AI202_AI2code_u1.01.sh               ##.(41229.01.4)
        AI2_Scr=AI201_Main1_u1.01.sh                 # .(41229.01.4 RAM Latest version)

#       AI2_Dir=$( dirname "$0" );                   # echo "AI2_Dir: '${AI2_Dir}'";      # Returns "." if run from it's folder location
#       AI2_Dir=$( realpath "$0" );                  # echo "AI2_Dir: '${AI2_Dir}'";      # fails in MacOS Catalina's zsh 
#       AI2_Dir=$( dirname "${BASH_SOURCE}" );       # echo "AI2_Dir: '${AI2_Dir}'"; exit # Also "."
#       AI2_Dir=$( dirname "${AI2_Dir}" );           # echo "AI2_Dir: '${AI2_Dir}'"; exit
#                                                      echo "\$( cd \"\$( dirname \"\$0\" ) && pwd\" ): '$( cd "$( dirname "$0" )" && pwd)'" 
        AI2_Dir="$( cd "$( dirname "$0" )" && pwd)"; # echo "AI2_Dir: '${AI2_Dir}'"; exit
#                $( cd .                   && pwd)   # returns full path of current  directory if called with ./script
#                $( cd ..                  && pwd)   # returns full path of parent   directory if called with ../script
#                $( cd path/script         && pwd)   # returns full path of script's directory if called with path/script

        AI201_Main1=$AI2_Dir/$AI2_Scr

#echo "$AI201_Main1" "$@"; exit
 bash "$AI201_Main1" "$@"


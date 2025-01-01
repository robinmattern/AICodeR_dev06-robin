#!/bin/sh
#   AIC Launcher (Prod Copy)

#       AIC_Scr=AIC02_Main1.mjs                      ##.(41229.01.5)
#       AIC_Scr=AIC02_Main1_u03.mjs                  ##.(41229.01.5)
        AIC_Scr=AIC01_Main1_u1.03.sh                 # .(41229.01.5 RAM Latest version)
    
#       AIC_Dir=$( dirname "$0" );                   # echo "AIC_Dir: '${AIC_Dir}'"  # Sometimes its just "."
#       AIC_Dir=$( realpath "$0" );                  # echo "AIC_Dir: '${AIC_Dir}'";
#       AIC_Dir=$( dirname "${AIC_Dir}" );           # echo "AIC_Dir: '${AIC_Dir}'"; exit
        AIC_Dir="$( cd "$( dirname "$0" )" && pwd)"; # echo "AI2_Dir: '${AI2_Dir}'"; exit

        AIC02_Main1=$AIC_Dir/$AIC_Scr

#echo "$AIC02_Main1" "$@"; exit
 bash "$AIC02_Main1" "$@"


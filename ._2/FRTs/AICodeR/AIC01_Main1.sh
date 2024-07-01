#!/bin/sh
#   AIT Launcher (Prod Copy)

        AIT_Scr=AIT02_Main1.mjs

#       AIT_Dir=$( dirname "$0" )
        AIT_Dir=$( realpath "$0" ); AIT_Dir=$( dirname "${AIT_Dir}" )
        AIT02_Main1=$AIT_Dir/$AIT_Scr

#echo "$AIT02_Main1" "$@"; exit
 node "$AIT02_Main1" "$@"


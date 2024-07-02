#!/bin/bash

cd ._2/FRTs/AICodeR 

    export CALL_IT=1
                                     AIC05_Schema_IO="AIC05_Schema-IO_u08.mjs"  
    if [ "$1" == "1" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "2" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "3" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "4" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "5" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "7" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "8" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "9" ]; then shift; node "../../../.vscode/task-createFolder.mjs" $@; exit; fi   


    echo ""
    echo "  AICoder Commands: "
    echo "    1                               Save Continue Sessions JSON Fles into a Continue JSON File "
    echo "    7                               List Continue Sessions JSON Files"
    echo "    2  [Date]                       Save a FRTables JSON .db File from a Continue JSON File for [Date]"
    echo "    8                               List Continue Sessions in a FRTables JSON .db File"
    echo "    3  [Date.Time]                  Format Sessions from FRTables JSON .db File"
#   echo "    5  [App] [Model] [Date] [Time]  Save a Session into a Continue JSON File for [App] [Model]"
#   echo "    6  [App] [Model] [Date] [Time]  List Sessions in a Continue JSON File for [App] [Model]"  
    echo "    4   S.M [TS]  [App] [Model]     Save a Message Markdown file from FRTables JSON File for [App] [Model]"
    echo ""
    echo "    9  [App]                        Create a Folder for [App] (c##_name-of-app or s##_name-of-api)"
    echo "   10  [App] [Model]                Save a Message Markdown File for [App] [Model]"
    echo "    5  [S[.M.TS]] [App] [Model]     Show App scripts for [last] Message Markdown File for [App] [Model]"
    echo "    6  [S[.M.TS]] [App] [Model]     Save App scripts for [last] Message Markdown File for [App] [Model]"
    echo "" 
    echo "       [TS]        =>               Optional Date.Time per below"
    echo "       [App] [Model]                AppName ([cs]##_name-app) and Model (Owner_Model_Interface)"
    echo "       [Date]      => YMM[DD]:      Optional Year Month Day that file(s) were saved"
    echo "       [Date.Time] => YMMDD.HH[MM]  Optional Day and Time that file(s) were saved"
    echo "        S.M        =>               Required Session, Message Number "





   


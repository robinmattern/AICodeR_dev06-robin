#!/bin/bash

cd ._2/FRTs/AICodeR 

    export CALL_IT=1
                                     AIC05_Schema_IO="AIC05_Schema-IO_u07.mjs"
    if [ "$1" == "1" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "2" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "3" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "4" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "5" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "7" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   
    if [ "$1" == "8" ]; then node "${AIC05_Schema_IO}" $@; exit; fi   

    echo ""
    echo "  AICoder Commands: "
    echo "    1                               Save to Continue JSON File from Continue Sessions files"
    echo "    7                               List Continue Sessions JSON files"
    echo "    2  [Date]                       Save FRTables JSON File from Continue JSON File for [Date]"
    echo "    8                               List Continue Sessions in FRTables JSON .db File"
    echo "    3  [Date.Time]                  Format Sessions from FRTables JSON File"
    echo "    4   S.M [TS]  [App] [Model]     Save Message Markdown file from FRTables JSON File for [App Model]"
    echo "    5  [S[.M.TS]] [App] [Model]     Show App scripts for [last] Message Markdown  File for [App Model]"
    echo "    6  [S[.M.TS]] [App] [Model]     Save App scripts for [last] Message Markdown  File for [App Model]"
    echo "" 
    echo "       [TS]        =>               Optional Date.Time per below"
    echo "       [App] [Model]                AppName ([cs]##_name-app) and Model (Owner_Model_Interface)"
    echo "       [Date]      => YMM[DD]:      Optional Year Month Day that file(s) were saved"
    echo "       [Date.Time] => YMMDD.HH[MM]  Optional Day and Time that file(s) were saved"
    echo "        S.M        =>               Required Session, Message Number "





   


#!/bin/bash

cd android && ./gradlew assembleRelease && cd .. &&  cd android/app/build/outputs/apk/ && adb install app-release.apk &&  cd -

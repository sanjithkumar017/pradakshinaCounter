from subprocess import check_output
from subprocess import call
import os
from os.path import expanduser
import time

#######################################################
##We need to run the npm test before we proceed with building the apk
##Remove some lines of code from AndroidManifest
##Build the release apk
##Check the size of the apk
##Start the emulator, if not started already
##Uninstall the apk, if already installed
##Install the release apk on the emulator
##Test the apk on the emulator
##Let the script wait, after success, Let it share the apk over mail to a few people.
##Undo the changes in AndroidManifest

#result = check_output(["ls", "-l"])
#print "result",result

#print "Let's try traversing"
##os.chdir("android/app")
#result = check_output(["ls", "-l"])
#print "result",result

currentDirectory = os.getcwd()
projectName = currentDirectory.split("/")[-1]
apkDirectory = "/android/app/build/outputs/apk"

packageName = 'com.pradakshinacounter'

home = expanduser("~")

print "Building ... ",projectName

##We need to place the production androidmanifest in android directory

call(['cp', currentDirectory  + '/swap/production/AndroidManifest.xml' ,currentDirectory  + '/android/app/src/main/'])

print "Production AndroidManifest.xml installed for ",projectName

print "Lets now build the release apk"

os.chdir("android")

call(['./gradlew','assembleRelease'])

os.chdir("..")

os.chdir(currentDirectory+ apkDirectory )

apkSize = check_output(["du", "-sh","app-release.apk"])

print "Size of the apk ",apkSize.split(' ')[0]

os.chdir(currentDirectory)


print "Uninstalling the existing app, If any."
call(['adb', 'uninstall',packageName])

print "Installing the apk."
call(['adb', 'install',currentDirectory+ apkDirectory + '/app-release.apk'])

print "Launching the app."
call(['adb', 'shell','am','start','-n',packageName+'/' +packageName +'.MainActivity'])

print "Complete..."



call(['cp', currentDirectory  + '/swap/development/AndroidManifest.xml' ,currentDirectory  + '/android/app/src/main/'])






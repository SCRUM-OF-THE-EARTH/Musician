# THE MUSICIAN APP

As a third year project we, the scrum of the earth wits software design group, have been tasked with building an app that is specifically for musicians. This app will contain tools such as a metronome, a chromatic tuner, a beat loop maker and more. 

## Cloning and setup 

This app was made using ==pure react native== code, because some of the libraries and modules that were needed are not supported by expo cli. This simply means that there aren't all the bells and whistles in this project that would normally come with expo. 
<br>
This just simply means that you'll have to make sure that your enviroment is setup before you can work on this app. 

## Steps
1. First you need to clone the app onto your machine. You can do this in anyway you like but I prefer to use the terminal and the command line:

```bash
git clone git@github.com:SCRUM-OF-THE-EARTH/Musician.git
```

2. Make sure you have NOde installed on your machin. If you don't already have Node instaklled you can find it here: 
[Nodejs](https://nodejs.org/en/download/)

3. You will also need to install and configure the Java JDk so that react can compile an android app from the react native project. Java JDk can be foudn here: [JavaJDK](https://www.oracle.com/java/technologies/downloads/)

3. You will also need to install Android studios in order to have access to an emulator and to build and generate APK or bundle files for Android. This is because the Android SDK is needed for this project Which can be found here: [Android Studios](https://developer.android.com/studio)

4. Once these have been installed we need to set the enviromenta variables so that react knows where to get the build tools. This can be done in terminal.
- To set the `JAVA_HOME` Variable:
```bash
 export JAVA_HOME=`Path to your java jdk`
 ```
- To set the `ANDROID_HOME` Variable with the directory of your sdk:
```bash
export ANDROID_HOME=`Pathg to your android sdk`
```

replacing the /usr/lib/android-sdk with the directory that has your version of the sdk


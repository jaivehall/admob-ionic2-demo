# Cordova AdMob plugin demo for Ionic2 framework#

App demo for [Cordova AdMob plugin](https://github.com/floatinghotpot/cordova-admob-pro/), using Ionic2 framework

### Quick Start ###

First, make sure Android SDK (for android) or Xcode (for iOS) is installed.

```bash
# install ionic
[sudo] npm install -g ionic cordova

# start an blank App with name "AdMobDemo2", app ID "com.rjfun.admobdemo2", in folder "admob"
ionic start --appname "AdMobDemo2" --id com.rjfun.admobdemo2 --v2 admob2 blank

# add admob plugin
cd admob2
ionic plugin add cordova-plugin-admobpro

# remove all default files in src folder
rm -fr src/*

# download demo and copy files to src folder
curl https://codeload.github.com/jaivehall/admob-ionic2-demo/zip/master -o demo.zip
unzip demo.zip
cp -r admob-ionic2-demo-master/demo/* src/

# build and run demo app in ios simulator
ionic run ios

```

### Screenshot ###

![ScreenShot](https://github.com/jaivehall/admob-ionic2-demo/raw/master/screen.png)


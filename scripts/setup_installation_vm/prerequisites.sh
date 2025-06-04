#!/bin/bash

sudo apt-get update
sudo apt-get install python3
sudo apt-get install cmake
sudo apt-get install ninja-build
sudo apt-get install pkg-config
sudo apt-get install libxrandr-dev 
sudo apt-get install libxinerama-dev 
sudo apt-get install libxcursor-dev 
sudo apt-get install mesa-common-dev 
sudo apt-get install libx11-xcb-dev 
sudo apt-get install nodejs 
sudo apt-get install npm
sudo apt-get install libxi-dev
sudo apt-get install python3-pip
sudo apt install python3.12-venv

cd ~/dev
wget https://go.dev/dl/go1.24.3.linux-amd64.tar.gz
rm -rf go
tar -xzf go1.24.3.linux-amd64.tar.gz
export PATH=$PATH:/home/ubuntu/go/bin


#!/bin/bash

# Important! install imagemagick before
mkdir ./small
path=$(pwd)

for file in "$path"/*
do
    filename="$(basename -- $file)"
    if test -f "$filename"; then
        echo "$filename: resizing..."
        # convert $file -resize 400x400 "./small/$filename"
        convert $file -resize 400 "./small/$filename"
        echo "$filename: done!"
    fi
done
echo ""
echo "Remove the ./small directory once you have moved the content"
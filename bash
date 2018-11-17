#!/bin/sh
if [ ! -d $1 ]; then
    mkdir $1
    cd $1
    mkdir css js
    touch css/style.css js/main.js index.html
    echo ' <!DOCTYPE>
    <title>Hello</title>
    <h1>Hi</h1>' > index.html
    echo 'h1{color: red;}' > css/style.css
    echo ' var string = "Hello World"
    alert(string)' > js/main.js
    echo $1'文件创建成功'
else
    echo $1'文件已存在了'
    exit 1
fi

# git status | grep modified | awk '{print $2}' | sed '1a drink tea'


# sed -i '1i\ ' README.md
# current=`date` && sed -i "1c **文本更新于 $current**" README.md

 # 1. 给每个 md 文件开头新加一个空行
# for file in `find  -name "*.md"`
# do
#     sed -i '1i\ ' $file
# done

git add .
for file in `git diff HEAD --name-only | grep .md`
do
    sed -n 1p $file | grep "文本更新于"
    if [ $? = 0 ];then
        current=`date` && sed -i "1c **文本更新于 $current**" $file
    else
        current=`date` && sed -i "1i **文本更新于 $current**" $file
    fi
    # current=`date` && sed -i "1c **文本更新于 $current**" $file
    # echo $file
done

git add .


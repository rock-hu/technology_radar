while IFS=, read -r artifact title ring quadrant tags
do
    echo plop radar $artifact $title $ring $quadrant $tags
    nohup plop radar $artifact $title $ring $quadrant $tags &>/dev/null &
    # nohup plop article $quadrant $artifact &>/dev/null &
done < raders.csv
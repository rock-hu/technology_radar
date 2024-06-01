while IFS=, read -r artifact title ring quadrant tags
do
    nohup plop radar  $artifact $title $ring $quadrant $tags &>/dev/null &
    nohup plop article $quadrant $artifact &>/dev/null &
done < raders.csv
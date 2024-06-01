while IFS=, read -r artifact title ring quadrant tags
do
    # nohup plop radar -- --radar $radar --title $title --ring $ring --quadrant $quadrant --tags $tags &>/dev/null &
    echo plop radar -- --artifact $artifact --title $title --ring $ring --quadrant $quadrant --tags $tags
    echo plop article -- --module $ring --article $artifact
done < raders.csv
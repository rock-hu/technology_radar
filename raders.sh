while IFS=, read -r radar title ring quadrant tags
do
    # nohup plop radar -- --radar $radar --title $title --ring $ring --quadrant $quadrant --tags $tags &>/dev/null &
    echo plop radar -- --radar $radar --title $title --ring $ring --quadrant $quadrant --tags $tags
done < raders.csv
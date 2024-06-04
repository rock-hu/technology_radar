# technology_radar
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Frock-hu%2Ftechnology_radar.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Frock-hu%2Ftechnology_radar?ref=badge_shield)


This is the location of AOE techradar content - published under: <https://www.aoe.com/techradar/>

If you want to build your own techradar you may want to have a look at <https://github.com/AOEpeople/aoe_technology_radar> instead.

## Content Guidelines

New blips should be tagged. The following tags are currently established:

- architecture
- security
- devops
- frontend
- agile
- coding
- quality assurance
- ci/cd
- ux/ui
- documentation

e.g. use like this:

```md
tags: [devops, security]
```

## Development

### Build the radar

```
npm i
npm run serve
```

Then open here: <http://localhost:3000/techradar>

### Build the radar with static files

```
npm i
npm run build
```


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Frock-hu%2Ftechnology_radar.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Frock-hu%2Ftechnology_radar?ref=badge_large)
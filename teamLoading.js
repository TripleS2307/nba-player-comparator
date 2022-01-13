const lineReader = require('line-reader');
var teamsMetadata = [];    
lineReader.eachLine('./data/teams.txt', (line, last) => {
    const formattedLine = line.split('\t');
    const teamAbbrev = formattedLine[0];
    const teamFullName = formattedLine[1];

    teamsMetadata.push({teamAbbrev, teamFullName});
    if(last) {
        return teamsMetadata;
    }
});

module.exports = { teamsMetadata };
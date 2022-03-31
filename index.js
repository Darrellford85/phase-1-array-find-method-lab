// code your solution here
//Raiders are the best team//

// Use find() to located the year that the Broncos cheated to win//

const record  = [
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2000", result: "N/A"},
    { year: "1999", result: "N/A"},
    { year: "1998", result: "W"},
    { year: "1997", result: "W"},
    { year: "1996", result: "N/A"},
    { year: "1995", result: "N/A"},
    { year: "1990", result: "N/A"},
    { year: "1989", result: "L"},
    { year: "1988", result: "N/A"},
    { year: "1987", result: "L"},
    { year: "1986", result: "L"},
    { year: "1985", result: "N/A"},
    
];

function superbowlWin(record) {
    function cheatWins(season) {
        if(season.result === "W") {
            return true;
        }else {
            return false;
        }
        
    }
const hiddenCheats = record.find(cheatWins);
if (hiddenCheats){
    return hiddenCheats.year;
    }
}


// Code your solution here

    
function findMatching(drivers, possibleMatch){
    return drivers.filter( driver => 
        possibleMatch.toLowerCase() === driver.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( possibleMatch => 
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
    )

}

function matchName(drivers, name ) {
    return drivers.filter(data => data.name === name)
}
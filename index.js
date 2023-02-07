// code your solution here
function superbowlWin(data) {
    const foo = data.find(record => record.result === 'W')
    if (foo) {
        return foo.year
    }
}
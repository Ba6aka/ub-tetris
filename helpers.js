export { clone, rnd }

function clone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

function rnd(limit) {
    return Math.floor(Math.random() * limit)
}

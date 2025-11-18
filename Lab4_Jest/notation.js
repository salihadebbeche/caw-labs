function mean(scores) {
    if (!scores || scores.length === 0) return 0;
    let sum = 0;
    for (let s of scores) sum += s;
    return sum / scores.length;
}

module.exports = mean;
function exf(s, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += s + '\n';
    }
    return result.trim(); // إزالة السطر الأخير الفارغ
}

module.exports = exf;
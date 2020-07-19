function shellsort() {
    var tables = [];

    for (var gap = parseInt(table.length / 2, 10); gap > 0; gap = parseInt(gap / 2, 10)) {
        console.log(gap);
        for (var i = gap; i < table.length; i++) {
            var temp = table[i];
            for (var j = i; j >= gap && table[j - gap] > temp; j -= gap) {
                table[j] = table[j - gap];
                tables.push(table.map((x) => x));
            }
            table[j] = temp;
            tables.push(table.map((x) => x));
        }
    }
    return tables;
}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
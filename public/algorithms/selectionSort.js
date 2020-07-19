function selectionSort() {
    tables = [];

    for (var i = 0; i < table.length; i++) {
        var indexMin = i;
        for (var j = i; j < table.length; j++) {
            if (table[indexMin] > table[j])
                indexMin = j;

        }
        swap(i, indexMin);
        tables.push(table.map((x) => x));
    }
    return tables;
}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
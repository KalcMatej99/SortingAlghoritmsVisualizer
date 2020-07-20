function selectionSort() {
    var tables = [];
    var numberOfComparisions = 0;
    var numberOfSwaps = 0;

    for (var i = 0; i < table.length; i++) {
        var indexMin = i;
        for (var j = i; j < table.length; j++) {
            numberOfComparisions++;
            if (table[indexMin] > table[j])
                indexMin = j;

        }
        numberOfSwaps++;
        swap(i, indexMin);
        tables.push(table.map((x) => x));
    }
    return {numberOfComparisions, numberOfSwaps, tables};
}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
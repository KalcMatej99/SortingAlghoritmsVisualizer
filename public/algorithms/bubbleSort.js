function bubbleSort() {
    var tables = [];
    var numberOfComparisions = 0;
    var numberOfSwaps = 0;

    for (var i = 0; i < table.length; i++) {
        for (var j = 0; j < table.length; j++) {
            numberOfComparisions++;
            if (table[j] > table[1 + j]) {
                numberOfSwaps++;
                swap(j, j + 1)
                tables.push(table.map((x) => x));
            }

        }
    }

    return {numberOfComparisions, numberOfSwaps, tables};
}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
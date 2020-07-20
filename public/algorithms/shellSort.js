function shellsort() {
    var tables = [];

    var numberOfComparisions = 0;
    var numberOfSwaps = 0;

    for (var gap = parseInt(table.length / 2, 10); gap > 0; gap = parseInt(gap / 2, 10)) {
        
        for (var i = gap; i < table.length; i++) {
            var temp = table[i];
            for (var j = i; j >= gap && table[j - gap] > temp; j -= gap) {
                numberOfComparisions++;
                numberOfSwaps++;
                table[j] = table[j - gap];
                tables.push(table.map((x) => x));
            }
            numberOfComparisions++;
            numberOfSwaps++;
            table[j] = temp;
            tables.push(table.map((x) => x));
        }
    }
    return {numberOfComparisions, numberOfSwaps, tables};
}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
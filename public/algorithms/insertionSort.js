function insertionSort() {
    var tables = [];

    var numberOfComparisions = 0;
    var numberOfSwaps = 0;

    /*
        0: 2 1 9
        1: 1 2 9 -> shranim stanje
    */

    // zacetek
    for (var i = 0; i < table.length; i++) {
        var j = i - 1;
        numberOfComparisions++;
        while (j >= 0 && table[j] > table[j + 1]) {
            numberOfSwaps++;
            swap(j, j + 1);
            tables.push(table.map((x) => x)); // shranim stanje
            j--;
        }
    }
    // konec

    return {numberOfComparisions, numberOfSwaps, tables};

}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
function quickSort() {
    var tables = [];

    var numberOfComparisions = 0;
    var numberOfSwaps = 0;

    function razporedi(p, z) {
        var m = table[parseInt(p + (z - p) / 2, 10)];

        var i = p;
        var j = z;

        while (i <= j) {
            while (table[i] < m) {
                numberOfComparisions++;
                i++;
            }
            numberOfComparisions++;

            while (table[j] > m) {
                numberOfComparisions++;
                j--;
            }
            numberOfComparisions++;

            if (i <= j) {
                numberOfSwaps++;
                swap(i, j);
                tables.push(table.map((x) => x));
                i++;
                j--;
            }
        }

        if (p < j)
            razporedi(p, j);

        if (i < z)
            razporedi(i, z);
    }

    razporedi(0, table.length - 1);
    return {numberOfComparisions, numberOfSwaps, tables};
}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
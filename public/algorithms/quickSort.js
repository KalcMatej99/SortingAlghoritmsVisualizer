function quickSort() {
    tables = [];

    function razporedi(p, z) {
        var m = table[parseInt(p + (z - p) / 2, 10)];

        var i = p;
        var j = z;

        while (i <= j) {
            while (table[i] < m) {
                i++;
            }

            while (table[j] > m) {
                j--;
            }

            if (i <= j) {
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
    return tables;
}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
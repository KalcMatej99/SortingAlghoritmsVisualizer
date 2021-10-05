function countSort() {
    var tables = [];

    var numberOfComparisions = 0;
    var numberOfSwaps = 0;
    var maxValueInTable = Math.max(...table);

    var c = Array(maxValueInTable + 1).fill(0);
    var b = Array(table.length).fill(0);


    for (var i = 0; i < table.length; i++)
        c[table[i]]++;

    // Kumulativa
    for (var i = 1; i <= maxValueInTable; i++) {
        c[i] += c[i - 1];
    }

    for (var i = table.length - 1; i >= 0; i--) {
        var x = table[i];
        c[x]--;
        b[c[x]] = x;
        tables.push(b.map((x) => x));
    }

    return {numberOfComparisions, numberOfSwaps, tables};
}
function countSort() {
    tables = [];

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

    return tables;
}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
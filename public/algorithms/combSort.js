function combsort() {
    var tables = [];

    var gap = table.length; // Initialize gap size
    var shrink = 1.3; // Set the gap shrink factor
    var sorted = false;

    while (sorted == false) {

        gap = parseInt(gap / shrink, 10);
        if (gap <= 1) {
            gap = 1;
            sorted = true;
        }
        var i = 0;
        while (i + gap < table.length) {
            if (table[i] > table[i + gap]) {
                swap(i, i + gap);
                tables.push(table.map((x) => x));
                sorted = false;
            }

            i++;
        }
    }
    return tables;
}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
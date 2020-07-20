function heapSort() {
    var tables = [];

    var numberOfComparisions = 0;
    var numberOfSwaps = 0;

    function correctHeap(i, size) {
        if (i * 2 + 1 < size) {
            var s = i * 2 + 1;
            numberOfComparisions++;
            if (s + 1 < size && table[s] < table[s + 1])
                s++;

            numberOfComparisions++;
            if (table[i] < table[s]) {
                numberOfSwaps++;
                swap(i, s);
                tables.push(table.map((x) => x));
                correctHeap(s, size)
            }
        }
    }

    for (var i = table.length / 2 - 1; i >= 0; i--) {
        correctHeap(i, table.length);
    }
    var r = table.length - 1;
    while (r >= 0) {
        numberOfSwaps++;
        swap(r, 0);
        tables.push(table.map((x) => x));
        correctHeap(0, r);
        r--;
    }

    return {numberOfComparisions, numberOfSwaps, tables};

}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
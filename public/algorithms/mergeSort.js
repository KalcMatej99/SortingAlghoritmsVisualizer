function mergeSort() {
    tables = [];

    function msort(p, sre, z) {

        const velikost1podtabela = sre - p + 1;
        const velikost2podtabela = z - sre;

        var t1 = [];
        var t2 = [];

        for (var i = 0; i < velikost1podtabela; i++)
            t1[i] = table[p + i];
        for (var j = 0; j < velikost2podtabela; j++)
            t2[j] = table[sre + 1 + j];

        var l = 0;
        var r = 0;
        var k = p;

        while (l < velikost1podtabela && r < velikost2podtabela) {

            if (t1[l] <= t2[r]) {
                table[k] = t1[l++];
            } else {
                table[k] = t2[r++];
            }
            tables.push(table.map((x) => x));

            k++;
        }

        while (l < velikost1podtabela) {
            table[k++] = t1[l++];
            tables.push(table.map((x) => x));
        }

        while (r < velikost2podtabela) {
            table[k++] = t2[r++];
            tables.push(table.map((x) => x));
        }
    }

    function sortInitializer(p, z) {
        if (p < z) {
            var sre = parseInt((p + z) / 2, 10);
            sortInitializer(p, sre);
            sortInitializer(sre + 1, z);
            msort(p, sre, z);
        }
    }

    sortInitializer(0, table.length - 1);
    return tables;
}

function swap(i, j) {
    var temp = table[j];
    table[j] = table[i];
    table[i] = temp;
}
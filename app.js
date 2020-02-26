let x = [-3, 5, 1, 3, 2, 10];
let max = x[0];
let i;
for (i = 0; i < x.length ; i++) {
    if (max < x[i]) {
        max = x[i];
    }
}
document.getElementById("number").innerHTML = max + " index = " + i;

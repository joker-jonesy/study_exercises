// create a function(s) that takes in two main inputs, an array and the number of items in a combo
// return all the possible combinations of those items from that given array
// note: you do not need to accommodate for different positions. [1,2,3] and [2,1,3] would count as the same combination

const array = [1,2,3,4,5];

function combinations (arr, num) {
    const combinations = [];

    const generateCombinations = (currentCombo, start) => {
        if (currentCombo.length === num) {
            combinations.push(currentCombo);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            generateCombinations([...currentCombo, arr[i]], i + 1);
        }
    };

    generateCombinations([], 0);
    return combinations;
}

console.log(combinations(array,3));



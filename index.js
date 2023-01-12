const rand = mathRand();

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Add traits here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓

function Trait0(rand) {
    if (rand > 0.5) {
        return true;
    } else {
        return false
    }
}

function Trait1(rand) {
    if (rand > 0.3) {
        return true;
    } else {
        return false
    }
}

window.$generativeTraits = {
    "Trait0": Trait0(rand),
    "Trait1": Trait1(rand),
}

console.log(window.$generativeTraits)

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Add traits here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑




// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Insert your generative code here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓

const container = document.createElement("div")
container.innerHTML = "<span>GM. I'm Seed #" + seed + "</span>";
document.body.prepend(container)

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Insert your generative code here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑

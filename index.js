document.addEventListener("DOMContentLoaded", function () {
    const rand = mathRand();

    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Your traits here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    function T1(rand) {
        // calculate rarity by yourself
        if (rand > 0.5) {
            return true;
        } else {
            return false
        }
    }

    // window.$generativeTraits contain list traits for token
    // you need to populate a $generativeTraits object in the window object
    window.$generativeTraits = {
        "T1": T1(rand),
    }
    console.log(window.$generativeTraits)
    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Your traits here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑


    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Your code here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let containerDiv = document.getElementById("container-el");
    containerDiv.innerHTML = "<span>tokenId: " + tokenId + "</span><br>" + "<span>tokenMintNumber: " + tokenMintNumber + "</span><br>" + "<span>project: " + projectNumber + "</span><br>" + "<span>seed: " + seed + "</span><br>";

    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Your code here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑
});

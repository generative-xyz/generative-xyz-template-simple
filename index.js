document.addEventListener("DOMContentLoaded", function () {
    // not editable
    const tokenId = tokenData.tokenId;
    const ONE_MIL = 1000000;
    const projectNumber = Math.floor(parseInt(tokenData.tokenId) / ONE_MIL)
    const tokenMintNumber = parseInt(tokenData.tokenId) % ONE_MIL
    const seed = tokenData.seed
    // don't edit


    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Your code here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let containerDiv = document.getElementById("container-el");
    containerDiv.innerHTML = "<span>tokenId: " + tokenId + "</span><br>" + "<span>tokenMintNumber: " + tokenMintNumber + "</span><br>" + "<span>project: " + projectNumber + "</span><br>" + "<span>seed: " + seed + "</span><br>";


    // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Your code here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑
});
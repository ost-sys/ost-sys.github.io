// document.addEventListener('DOMContentLoaded', () => {
//     const changelogSector = document.querySelectorAll(".changelog-sector");
//     const changelogList =  document.querySelectorAll(".changelog-list");

//     let isVisible = false;

    // changelogSector.addEventListener('click', function() {
    //     isVisible = !isVisible;

    //     if (isVisible) {
    //         changelogList.style.display = "block";
    //     } else {
    //         changelogList.style.display = "none";
    //     }
    // }, true)
// })

function changeSize(element) {
    const changelogSector = document.querySelectorAll(".changelog-sector");
    const changelogList = document.querySelectorAll(".changelog-list");

    let isVisible = false;
    isVisible = !isVisible;

    
    changelogSector.addEventListener('click', function() {
        changelogList.forEach(item => {
            if (isVisible) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    })

}
//Add style to enforce max-width to 1920px;
var editCSS = document.createElement('style')
editCSS.innerHTML = ".CanvasComponent.LCS .CanvasZone { max-width: 1920px; }";
document.body.appendChild(editCSS);
//Clear styling on workbenchPageContent element which restricts max-width to 924px
var workbenchPageContent = document.getElementById("workbenchPageContent");
//Remove workBenchPage Content Styling - has no impact on view
if (workbenchPageContent != null) {
    workbenchPageContent.classList.forEach((className) => {
        workbenchPageContent.classList.remove(className);
    });
}
// POPUP FUNCTIONS
function openPopup(title, link){
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-title").innerText = title;
    if(link){
        document.getElementById("popup-frame").src = link;
    }
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-frame").src = "";
}

// GENERATE BUTTONS FUNCTION
function createButtons(sectionId, links){
    const container = document.getElementById(sectionId);
    links.forEach((link, index)=>{
        const btn = document.createElement("button");
        btn.innerText = `Activity ${index+1}`;
        btn.onclick = ()=> openPopup(`Activity ${index+1}`, link);
        container.appendChild(btn);
    });
}

// ==== HTML PRELIM ACTIVITIES ====
createButtons("prelim", [
    "attributes.html",
    "CenterContent.html",
    "FavouriteWebsite.html",
    "Headings.html",
    "HorizontalLine.html",
    "LineBreak.html",
    "LINKS.html",
    "PARAGRAPH.html",
    "TextFormat.html"
]);

// ==== HTML MIDTERM ACTIVITIES ====
createButtons("midterm", [
    "Allimage_Salazar.html",
    "AllMarq_Salazar.html",
    "ColorDec_Salazar.html",
    "Colorhex_Salazar.html",
    "ColorName_Salazar.html",
    "FavWebsite2_Salazar.html",
    "FontFace._Salazar.html",
    "FontSize_Salazar.html",
    "links_Salazar.html",
    "PhraseTags_Salazar.html"
]);

// ==== CSS SEMI-FINAL PART 1 ====
createButtons("css1", [
"GroupSelectors.html","IDSelector.html","InlineStyle.html","InternalStyle.html","Last na part.html","Margins.html","MarginsSides.html","MarginsSP.html",
"MultipleClass.html","MultipleStyle.html","PaddingSides.html","TextColor.html"
]);

// ==== CSS SEMI-FINAL PART 2 ====
createButtons("css2", [
"Activelink.html","ActiveNav.html","CenterLinks.html","Dividers.html","FixedNav.html","HorizontalNav.html","HoverEffect.html","Float ata to.html",
"LetterSpacing.html","LineHeight.html","Opacity.html","Outline.html","TextAlign.html","TextColor.html","TextDeco.html","TextDirection.html",
"TextIndent.html","TextShadow.html","TextTransform.html","VerticalNav.html","WordSpacing.html"
]);
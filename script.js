// Minimal, modular behavior
/* Keep minimal behavior for the index page only. When anchors are used to open dedicated pages,
   this script will gently update the panel if used on index.html; it does nothing on the standalone pages. */

const presentation = {
  title: "Présentation",
  text: "Le lion (Panthera leo) est un grand félin social vivant en groupes appelés coalitions ou troupes. Il est connu pour sa crinière (chez le mâle), sa stature puissante et son rôle de prédateur-apex dans la savane."
};

const regime = {
  title: "Régime alimentaire",
  text: "Les lions sont carnivores : ils chassent des ongulés (zèbres, antilopes, buffles) et peuvent aussi consommer des charognes. La chasse est souvent coopérative entre femelles d'une même troupe."
};

const elTitle = document.getElementById("title");
const elContent = document.getElementById("content");
const btnPres = document.getElementById("btn-presentation");
const btnReg = document.getElementById("btn-regime");
const btnRep = document.getElementById("btn-reportage");

function show(obj){
  if (!elTitle || !elContent) return;
  elTitle.textContent = obj.title;
  elContent.textContent = obj.text;
  elContent.setAttribute("aria-live","polite");
}

// If the elements exist on this page, bind quick panel updates (anchors will still navigate).
if (btnPres) btnPres.addEventListener("click", ()=> show(presentation));
if (btnReg) btnReg.addEventListener("click", ()=> show(regime));

if (btnRep){
  btnRep.addEventListener("click", ()=>{
    if (elTitle && elContent){
      elTitle.textContent = "Reportage";
      elContent.textContent = "Ouverture du reportage dans un nouvel onglet...";
    }
  });
}
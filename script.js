let domain = "unset";

function setValue(newDomain) {
  domain = newDomain;
  updatePhrase();
}

function updatePhrase() {
  switch (domain) {
    case "forsaken": //Mondstadt Domains
      document.getElementById("phrase").innerHTML =
        "Forsaken Rift (Mondstadt talent domain)";
      break;
    case "midsummer":
      document.getElementById("phrase").innerHTML =
        "Midsummer Courtyard (Electro artifact domain)";
      break;
    case "cecilia":
      document.getElementById("phrase").innerHTML =
        "Cecilia Garden (Mondstadt weapon domain)";
      break;
    case "peakvind":
      document.getElementById("phrase").innerHTML =
        "Peak of Vindagnyr (Cryo/Hydro artifact domain)";
      break;
    case "rememberance":
      document.getElementById("phrase").innerHTML =
        "Valley of Rememberance (Anemo/Maiden artifact domain)";
      break;
    case "taishan": // Liyue Domains
      document.getElementById("phrase").innerHTML =
        "Taishan Mansion (Liyue talent domain)";
      break;
    case "lianshan":
      document.getElementById("phrase").innerHTML =
        "Hidden Palace of Lianshan Formula (Liyue weapon domain)";
      break;
    case "ridge":
      document.getElementById("phrase").innerHTML =
        "Ridge Watch (Tenacity/Pale Flame artifact domain)";
      break;
    case "guyun":
      document.getElementById("phrase").innerHTML =
        "Domain of Guyun (Geo/Retracting Bolide artifact domain)";
      break;
    case "zhou":
      document.getElementById("phrase").innerHTML =
        "Hidden Palace of Zhou Formula (Pyro artifact domain)";
      break;
    case "clearpool":
      document.getElementById("phrase").innerHTML =
        "Clear Pool and Mountain Cavern (Noblesse/Bloodstained artifact domain)";
      break;
    case "lostvalley":
      document.getElementById("phrase").innerHTML =
        "The Lost Valley (Echoes/Vermillion artifact domain)";
      break;
    case "violet": // Inazuma Domains
      document.getElementById("phrase").innerHTML =
        "Violet Court (Inazuma talent domain)";
      break;
    case "flowingsand":
      document.getElementById("phrase").innerHTML =
        "Court of Flowing Sand (Inazuma weapon domain)";
      break;
    case "momiji":
      document.getElementById("phrase").innerHTML =
        "Momiji-Dyed Court (Emblem/Shimenawa artifact domain)";
      break;
    case "slumbering":
      document.getElementById("phrase").innerHTML =
        "Slumbering Court (Opulent/Ocean-Hued artifact domain)";
      break;
    case "ignorance": // Sumeru Domains
      document.getElementById("phrase").innerHTML =
        "Steeple of Ignorance (Sumeru talent domain)";
      break;
    case "abject":
      document.getElementById("phrase").innerHTML =
        "Tower of Abject Pride (Sumeru weapon domain)";
      break;
    case "cityofgold":
      document.getElementById("phrase").innerHTML =
        "City of Gold (Pavillion/Paradise Lost artifact domain)";
      break;
    case "solitary":
      document.getElementById("phrase").innerHTML =
        "Spire of Solitary Enlightment (Dendro/Guilded artifact domain)";
      break;
    case "paleforgotten": // Fontaine Domains
      document.getElementById("phrase").innerHTML =
        "Pale Forgotten Glory (Fontaine talent domain)";
      break;
    case "echoesofdeep":
      document.getElementById("phrase").innerHTML =
        "Echoes of the Deep Tides (Fontaine weapon domain)";
      break;
    case "denouement":
      document.getElementById("phrase").innerHTML =
        "Denouement of Sin (Golden Troupe/Marechaussee artifact domain)";
      break;
    case "molteniron":
      document.getElementById("phrase").innerHTML =
        "Molten Iron Fortress (Nymph's Dream/Vourukasha's Glow artifact domain)";
      break;
    case "waterfallwen":
      document.getElementById("phrase").innerHTML =
        "Waterfall Wen (Songs of Days Past/Nighttime Whispers artifact domain)";
      break;
    case "fadedtheater":
      document.getElementById("phrase").innerHTML =
        "Faded Theater (Unfinished Reverie/Fragment of Harmonic Whimsy artifact domain)";
      break;
    case "boreas": // Trounce Domains
      document.getElementById("phrase").innerHTML =
        "Wolf of the North Challenge (Andrius)";
      break;
    case "dvalin":
      document.getElementById("phrase").innerHTML =
        "Confront Stormterror (Stormterror Dvalin)";
      break;
    case "azhdaha":
      document.getElementById("phrase").innerHTML =
        "Beneath the Dragon-Queller (Azhdaha)";
      break;
    case "childe":
      document.getElementById("phrase").innerHTML =
        "Enter the Golden House (Childe)";
      break;
    case "signora":
      document.getElementById("phrase").innerHTML =
        "Narukami Island: Tenshukaku (Signora)";
      break;
    case "raiden":
      document.getElementById("phrase").innerHTML =
        "End of the Oneiric Euthymia (Magatsu Mitake Narukami no Mikoto)";
      break;
    case "scaramouche":
      document.getElementById("phrase").innerHTML =
        "Joururi Workshop (Everlasting Lord of Arcane Wisdom)";
      break;
    case "apep":
      document.getElementById("phrase").innerHTML =
        "The Realm of Beginnings (Guardian of Apep's Oasis)";
      break;
    case "narwhal":
      document.getElementById("phrase").innerHTML =
        "Shadow of Another World (All-Devouring Narwhal)";
      break;
    default:
      document.getElementById("phrase").innerHTML =
        "Click a button to set the requested domain.";
  }
}

const select = document.getElementById("a-rank");
const output = document.getElementById("adv-rank");
const wloutput = document.getElementById("wrld-lvl");
const ascSwitch = document.getElementById("asc-switch");

function updateWL() {
  const selectedAR = select.options[select.selectedIndex].value;
  output.innerHTML = selectedAR;
  const ARnum = parseInt(selectedAR);
  if (ARnum >= 16 && ARnum < 20) {
    wloutput.innerHTML = "0";
  } else if (ARnum >= 20 && ARnum < 25) {
    wloutput.innerHTML = "1";
  } else if (ARnum >= 25 && ARnum < 30) {
    wloutput.innerHTML = "2";
  } else if (ARnum >= 30 && ARnum < 35) {
    wloutput.innerHTML = "3";
  } else if (ARnum >= 35 && ARnum < 40) {
    wloutput.innerHTML = "4";
  } else if (ARnum >= 40 && ARnum < 45) {
    wloutput.innerHTML = "5";
  } else if (ARnum >= 45 && ARnum < 50) {
    wloutput.innerHTML = "6";
  } else if (ARnum >= 50 && ARnum < 55) {
    wloutput.innerHTML = "7";
  } else if (ARnum >= 55 && ARnum <= 60) {
    wloutput.innerHTML = "8";
  } else {
    wloutput.innerHTML = "N/A";
  }
}

function hideAsc() {
  const selectedAR = select.options[select.selectedIndex].value;
  let ARnum = parseInt(selectedAR);
  if (ARnum === 25 || ARnum === 35 || (ARnum >= 40 && ARnum <= 60)) {
    ascSwitch.classList.remove("hide");
    ascToggle.checked = true;
  } else {
    ascSwitch.classList.add("hide");
    ascToggle.checked = true;
  }
}

select.addEventListener("change", () => {
  updateWL();
  hideAsc();
});

const ascToggle = document.getElementById("asc-checker");

ascToggle.addEventListener("change", () => {
  let wlNum = parseInt(wloutput.innerHTML);
  if (ascToggle.checked === false) {
    let newMessage = wlNum - 1;
    wloutput.innerHTML = newMessage;
  } else if (ascToggle.checked && wloutput !== wlNum) {
    wloutput.innerHTML = wlNum + 1;
  }
});

const runInp = document.getElementById("runs-field");
const runVal = document.getElementById("num-of-runs");

runInp.addEventListener("input", () => {
  let inpVal = runInp.value;
  runVal.innerHTML = inpVal;
});

function copyToClipboard() {
  let text = document.getElementById("grab-text").textContent;
  const successPop = document.getElementById('cpy-popup');
  const errorPop = document.getElementById('err-popup');
  // Create a Clipboard API writeText request
  navigator.clipboard.writeText(text)
    .then(function () {
      successPop.classList.add('pop-show');
      setTimeout(() => { successPop.classList.remove('pop-show') }, 1200);
    })
    .catch(function (err) {
      errorPop.classList.add('pop-show');
      setTimeout(() => { errorPop.classList.remove('pop-show') }, 1200);
    });
}

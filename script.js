const themeToggle = document.querySelector(".toggle-theme-checkbox");
const dividerParagraphs = document.querySelectorAll(".divider-paragraph");
const LOCAL_STORAGE_KEY = "VYASPORTFOLIO";

const localData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {
  darkTheme: themeToggle.checked,
};

changeTheme(localData.darkTheme);
themeToggle.checked = localData.darkTheme;
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localData));

themeToggle.addEventListener("click", () => {
  if (themeToggle.checked) {
    changeTheme(true);
    localData.darkTheme = true;
  } else {
    changeTheme(false);
    localData.darkTheme = false;
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localData));
});

function changeTheme(darkTheme) {
  if (darkTheme) {
    setDocumentProperty("--background-color", "rgb(27, 27, 27)");
    setDocumentProperty("--color", "white");
    setDocumentProperty("--box-shadow-color", "rgba(255,255,255,0.1)");
    setDocumentProperty("--border-width", "1px");
    return;
  }
  setDocumentProperty("--background-color", "white");
  setDocumentProperty("--color", "black");
  setDocumentProperty("--border-width", "0");
}

function setDocumentProperty(property, value) {
  document.documentElement.style.setProperty(property, value);
}

themeToggle.checked = localData.darkTheme;

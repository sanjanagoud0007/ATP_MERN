// Assignment 3: Application Settings Controller
//---------------------------------------------

// Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// 1. Toggle theme
settings.theme = settings.theme === "light" ? "dark" : "light";

// 2. Turn autoSave to true
settings.autoSave = true;

// 3. Remove notifications setting
delete settings.notifications;

// 4. Freeze settings object
Object.freeze(settings);

console.log(settings);

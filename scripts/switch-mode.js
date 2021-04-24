let prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
let theme = sessionStorage.getItem('theme');

prefersDark.addEventListener("change", setPreferredMode);

function darkMode(theme){
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', theme);
	document.getElementById("theme-toggle-icon").classList.remove('fa-flip-horizontal');
}

function lightMode(theme){
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', theme);
	document.getElementById("theme-toggle-icon").classList.add('fa-flip-horizontal');
}

function setPreferredMode(colorSchemePreference){
	if(colorSchemePreference.matches) {
		darkMode('');
	} else {
		lightMode('');
	}
}

function switchMode() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		lightMode('light');
	}	else if (theme === "light") {
		darkMode('dark');
	} else if (prefersDark.matches) {	
		lightMode('light');
	} else {
		darkMode('dark');
	}
	return false;
}

if (theme === "dark") {
	darkMode('dark');
} else if (theme === "light") {
	lightMode('light');
} else if (prefersDark.matches) {	
	darkMode('dark');
} else {
	lightMode('light');
}
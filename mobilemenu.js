function menuiconDropdown(menuId, iconId) {
    const menu = document.getElementById(menuId);
    const icon = document.getElementById(iconId);
    
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"; // Show the menu
        icon.name = "close"; // Change icon to "close" if you have a close icon
    } else {
        menu.style.display = "none"; // Hide the menu
        icon.name = "menu-outline"; // Change icon back to "menu"
    }
}

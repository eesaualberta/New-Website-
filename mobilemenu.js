function menuiconDropdown(menuDropdown, menuIcon){
    var x = document.getElementById(menuDropdown)
    var y = document.getElementById(menuIcon)
    if (x.style.display === 'none' ){
        x.style.display = 'flex';
        y.style.transform = 'rotate(90deg)';
    } else{
        x.style.display = 'none';
        y.style.transform = 'rotate(0deg)';
    }
}
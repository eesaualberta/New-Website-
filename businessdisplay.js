function businessTypeDisplay(selectedButton, selectedClass) {
    var x = document.getElementById(selectedButton);

    // Reset styles for all buttons
    var buttonArray = ['AllButton', 'ResturantsButton', 'HairButton', 'BeautyButton', 'PhotographyButton', 'OtherButton'];
    buttonArray.forEach(function(buttonId) {
        var button = document.getElementById(buttonId);
        button.style.backgroundColor = 'white';
        button.style.color = 'goldenrod';
        var buttonh2 = button.querySelector('h2'); 
        buttonh2.style.color = 'goldenrod'; 
    });

    x.style.backgroundColor = 'goldenrod';
    x.style.color = 'white';
    var xh2 = x.querySelector('h2'); 
    xh2.style.color = 'white';

    if (selectedButton === 'AllButton') {
        var allElements = document.querySelectorAll('.businessPosters');
        allElements.forEach(function(element) {
            element.parentNode.style.display = 'block'; // Adjusted here
        });
    } else {
        var allElements = document.querySelectorAll('.businessPosters');
        allElements.forEach(function(element) {
            element.parentNode.style.display = 'none'; // Adjusted here
        });

        var selectedElements = document.querySelectorAll(selectedClass);
        selectedElements.forEach(function(element) {
            element.style.display = 'block'; // Adjusted here
        });
    }
}

const animatedText = document.getElementById('animatedText');
        let colorIndex = 0;
 
        function changeColor() {
            const colors = ['pink', 'purple', 'blue', 'cyan']; // Add more colors as needed
            animatedText.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }
 
        // Change text color every 1000 milliseconds (1 second)
        setInterval(changeColor, 1000);
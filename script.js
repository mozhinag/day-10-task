const display = document.getElementById('display');
        
        function addToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                alert('Invalid expression');
                clearDisplay();
            }
        }

        document.addEventListener('keydown', function(event) {
            if (event.key.match(/[0-9]|[\+\-\*\/\%]|Enter/)) {
                addToDisplay(event.key);
            } else {
                alert('Only numbers and operators are allowed.');
            }
        });

const binarySearchModule = (function() {

    let array = [];
    const containerId = 'array-container';
    const statusId = 'bs-status';
    const inputId = 'bs-input';
    
    function updateDOM() {
        const container = document.getElementById(containerId);
        container.innerHTML = array.map(num => 
            `<div class="array-element">${num}</div>`
        ).join('');
    }
    
    function setStatus(message, isSuccess = null) {
        const statusElement = document.getElementById(statusId);
        
        if (isSuccess === true) {
            statusElement.innerHTML = `<span style="color: #10b981">✓ ${message}</span>`;
        } else if (isSuccess === false) {
            statusElement.innerHTML = `<span style="color: #ef4444">✗ ${message}</span>`;
        } else {
            statusElement.textContent = message;
        }
    }
    
    return {
        generateArray: function() {
            array = Array.from({length: 15}, () => Math.floor(Math.random() * 100) + 1);
            array.sort((a, b) => a - b);
            updateDOM();
            setStatus('Array generated. Enter a value to search');
        },
        
        startSearch: async function() {
            const input = document.getElementById(inputId);
            const target = parseInt(input.value);
            
            if (isNaN(target)) {
                setStatus('Please enter a valid number');
                return;
            }
            
            let low = 0, high = array.length - 1;
            const elements = document.getElementsByClassName('array-element');
            setStatus('Searching...');
            
            for (let i = 0; i < array.length; i++) {
                elements[i].classList.remove('highlight', 'mid');
            }
            
            while (low <= high) {
                const mid = Math.floor((low + high) / 2);
                
                for (let i = 0; i < array.length; i++) {
                    elements[i].classList.remove('highlight', 'mid');
                }
                
                elements[mid].classList.add('mid');
                for (let i = low; i <= high; i++) {
                    if (i !== mid) elements[i].classList.add('highlight');
                }
                
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                if (array[mid] === target) {
                    setStatus(`Found ${target} at index ${mid}`, true);
                    return;
                } else if (array[mid] < target) {
                    low = mid + 1;
                    setStatus(`${array[mid]} < ${target}, searching right half`);
                } else {
                    high = mid - 1;
                    setStatus(`${array[mid]} > ${target}, searching left half`);
                }
            }
            
            for (let i = 0; i < array.length; i++) {
                elements[i].classList.remove('highlight', 'mid');
            }
            
            setStatus(`Value ${target} not found in the array`, false);
        },
        

        getArray: function() {
            return [...array];
        }
    };
})();
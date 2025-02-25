(function() {
    function init() {
        binarySearchModule.generateArray();
        
        setupEnterKeyListeners();
    }
    
    function setupEnterKeyListeners() {
        // Stack 
        document.getElementById('stack-input').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                stackModule.pushStack();
            }
        });
        
        // Queue 
        document.getElementById('queue-input').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                queueModule.enqueue();
            }
        });
        
        // Linked List 
        document.getElementById('ll-input').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                linkedListModule.insertEnd();
            }
        });
        
        // Binary Search 
        document.getElementById('bs-input').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                binarySearchModule.startSearch();
            }
        });
    }
    
    document.addEventListener('DOMContentLoaded', init);
})();
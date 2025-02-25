const queueModule = (function() {
    const queue = [];
    const containerId = 'queue-container';
    const inputId = 'queue-input';
    
    function updateDOM() {
        const container = document.getElementById(containerId);
        
        if (queue.length === 0) {
            container.innerHTML = '<div class="empty-text">Queue is empty</div>';
            return;
        }
        
        container.innerHTML = queue.map(value => 
            `<div class="queue-item">${value}</div>`
        ).join('');
    }
    
    return {
        enqueue: function() {
            const input = document.getElementById(inputId);
            const value = input.value.trim();
            
            if (!value) return;
            
            queue.push(value);
            input.value = '';
            updateDOM();
        },
        
        dequeue: function() {
            if (!queue.length) return;
            
            const container = document.getElementById(containerId);
            const firstItem = container.firstChild;
            
            if (firstItem && firstItem.classList) {
                firstItem.classList.add('fade-out');
                setTimeout(() => {
                    queue.shift();
                    updateDOM();
                }, 400);
            } else {
                queue.shift();
                updateDOM();
            }
        },
        
        getQueue: function() {
            return [...queue]; 
        }
    };
})();
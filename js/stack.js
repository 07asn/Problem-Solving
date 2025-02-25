const stackModule = (function() {
    const stack = [];
    const containerId = 'stack-container';
    const inputId = 'stack-input';
    
    function updateDOM() {
        const container = document.getElementById(containerId);
        
        if (stack.length === 0) {
            container.innerHTML = '<div class="empty-text">Stack is empty</div>';
            return;
        }
        
        container.innerHTML = stack.map(value => 
            `<div class="stack-item">${value}</div>`
        ).join('');
    }
    
    return {
        pushStack: function() {
            const input = document.getElementById(inputId);
            const value = input.value.trim();
            
            if (!value) return;
            
            stack.push(value);
            input.value = '';
            updateDOM();
        },
        
        popStack: function() {
            if (!stack.length) return;
            
            const container = document.getElementById(containerId);
            const lastItem = container.firstChild;
            
            if (lastItem && lastItem.classList) {
                lastItem.classList.add('fade-out');
                setTimeout(() => {
                    stack.pop();
                    updateDOM();
                }, 400);
            } else {
                stack.pop();
                updateDOM();
            }
        },
        
        getStack: function() {
            return [...stack];
        }
    };
})();
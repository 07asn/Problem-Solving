const linkedListModule = (function() {
    const linkedList = [];
    const containerId = 'linkedlist-container';
    const inputId = 'll-input';
    
    function updateDOM() {
        const container = document.getElementById(containerId);
        
        if (linkedList.length === 0) {
            container.innerHTML = '<div class="empty-text">List is empty</div>';
            return;
        }
        
        container.innerHTML = linkedList.map(value => 
            `<div class="node">${value}</div>`
        ).join('');
    }
    
    return {
        insertFront: function() {
            const input = document.getElementById(inputId);
            const value = input.value.trim();
            
            if (!value) return;
            
            linkedList.unshift(value);
            input.value = '';
            updateDOM();
        },
        
        insertEnd: function() {
            const input = document.getElementById(inputId);
            const value = input.value.trim();
            
            if (!value) return;
            
            linkedList.push(value);
            input.value = '';
            updateDOM();
        },
        
        deleteNode: function() {
            const input = document.getElementById(inputId);
            const value = input.value.trim();
            
            if (!value) return;
            
            const index = linkedList.indexOf(value);
            if (index > -1) {
                linkedList.splice(index, 1);
            }
            
            input.value = '';
            updateDOM();
        },

        getLinkedList: function() {
            return [...linkedList];
        }
    };
})();
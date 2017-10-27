
    

        function get_notes() {
        var notes = new Array;
        var notes_str = localStorage.getItem('note');
        if (notes_str !== null) {
            notes = JSON.parse(notes_str); 
        }
        return notes;
    }
     
    function add() {
        var task = document.getElementById('task').value;
     
        var notes = get_notes();
        notes.push(task);
        localStorage.setItem('note', JSON.stringify(notes));
     
        show();
     
        return false;
    }
     
     
    function show() {
        var notes = get_notes();
     
        var html = '<ul>';
        for(var i=0; i<notes.length; i++) {
            html += '<li>' + notes[i];
        };
        html;
     
        document.getElementById('notes').innerHTML = html;
     
    
    }
     
    document.getElementById('add').addEventListener('click', add);
    show();
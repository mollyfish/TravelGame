(function() {
  var answer1 = 32;



  var Note = function(noteBody, author) {
    this.noteBody = noteBody;
    this.author = author || 'Anonymous';
  };

  Note.prototype.render = function() {
    var el = document.createElement('li');
    el.innerHTML = this.author + ': ' + this.noteBody;
    return el;
  };
  //this is wrapped in an IIFY, but the events.js file will need to be able to access it, so we need to expose the function to the global scope.

  window.Note = Note;
})();
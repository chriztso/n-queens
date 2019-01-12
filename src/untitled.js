hasRowConflictAt: function(rowIndex) {
      let row = this.rows()[rowIndex];
      let conflict = false;
      
      for (let i = 0; i < row.length; i++) {
        if (conflict && row[i]) {
          return true;
        }
        
        if (row[i]) {
          conflict = true;
        }
      }
      
      return false;
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
      for (let i = 0; this.rows().length; i++) {
        if (this.hasRowConflictAt(i)) {
          return true;
        }
      }
      
      return false;
    // },



    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    // hasColConflictAt: function(colIndex) {
      let conflict = false;
      
      for (let i = 0; i < this.rows().length; i++) {
        if (conflict && this.rows()[i][colIndex]) {
          return true;
        }
        
        if (this.rows()[i][colIndex]) {
          conflict = true;
        }
      }
      
      return false
    // },

    // test if any columns on this board contain conflicts
    // hasAnyColConflicts: function() {
      for (let i = 0; i < this.rows().length; i++) {
        if (this.hasColConflictAt(i)) {
          return true;
        }
      }
      
      return false;
    // },
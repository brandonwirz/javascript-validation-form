function validate() {
      var x = document.forms["bw-form"]["fname"].value;
      var y = document.forms["bw-form"]["lname"].value;
      var z = document.forms["bw-form"]["email"].value;
      if (x == "") {
          alert("Name must be filled out");
          return false;
        } else if (y == "") {
        	alert("Last name must be filled out");
          return false;
        } else if (z == "") {
        	alert("Zip must be filled out");
          return false;
        }
  }

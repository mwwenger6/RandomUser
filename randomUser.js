let cards = []
let names = [];
let count =1

window.onload = async () => {
    window.setTimeout(doIt, 500);
    document.getElementById("search").ariaPlaceholder
  }
  
  doIt = () => {
    const url = "https://randomuser.me/api/";
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {
          let fullName
          let gender
          let email
          let phone
          let age
          let address
          let img;
          $(data.results).each( function(key, value){
            fullName = value.name.first + ' ' + value.name.last
            gender = value.gender;
            email = value.email
            phone = value.phone
            age = value.dob.age
            address = value.location.street.number + ' ' + value.location.street.name + ', ' + value.location.state + ' ' + value.location.postcode + ' '+ value.location.country;
            img = value.picture.large
          })
          let people = new Person(fullName, gender, email, phone, age, address,img);
          names.push(fullName);
          cards.push(people);
          document.getElementById('image' +count).src = img
          document.getElementById('name' +count).innerHTML = fullName
          document.getElementById('phone'+count).innerHTML = phone
          document.getElementById('email'+count).innerHTML = email
          document.getElementById('address'+count).innerHTML = address
          document.getElementById('age'+count).innerHTML = age
          document.getElementById('gender'+count).innerHTML = gender
          count++
        }
      });
  }
  
 class Person{
    constructor(fullName,gender,email,phone,age,address,img){
        this.fullName = fullName
        this.gender = gender
        this.email = email
        this.phone = phone
        this.age = age
        this.address = address
        this.img = img
    }
  }

  filter = () => {

      let search = document.getElementById('search')
      search = search.value.toUpperCase();
      console.log(search)
      for(let i = 0; i < names.length; i++) {
        if(names[i].toUpperCase().indexOf(search) > -1){
          document.getElementById('card'+(i+1)).hidden = false
        } 
        else{
          document.getElementById('card'+(i+1)).hidden = true
        }
        if(search == ''){
          document.getElementById('card'+(i+1)).hidden = false

        }
      }
    }

for(let i =0; i<4;i++){
  doIt()
}

  
  
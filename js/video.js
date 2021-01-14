// this is customer information that shows what movies they have rented and for how long
let cus = {
 "name": "Martin Fowler",
 "rentals": [
 {"movieID": "F001", "days": 3},
 {"movieID": "F002", "days": 1},]};

// titles of the movies they have rented  
 let pic = {"F001": {"title": "Ran", "code": "regular"},
 "F002": {"title": "The Waterboy", "code": "regular"},
 "F003": {"title": "Animal House", "code": "regular"},
}

let ta = 0, 
frequentRenterPoints = 0;
let result = `<h2>Rental Record for ${cus.name}\n</h2>`;
for (let r of cus.rentals) {
    let item = pic[r.movieID];
    let thisa = 0;

if(item.code == 'regular'){
    thisa = 2;
if (r.days > 2) {
    thisa += (r.days - 2) * 1.5;
}
} else if(item.code == 'new'){thisa = r.days * 3;
} else if(item.code == 'childrens'){thisa = 1.5;
if (r.days > 3) {
thisa += (r.days - 3) * 1.5;
}
};frequentRenterPoints++;
if(item.code === "new" && r.days > 2) frequentRenterPoints++;
result += `<h5>\t${item.title}\t${thisa}\n</h5>` ;
ta += thisa;
};

result += `<h3>Amount owed is ${ta}\n</h3>`;
result += `<h4>You earned ${frequentRenterPoints} frequent renter points\n</h4>`;
document.querySelector('.main').innerHTML = result;


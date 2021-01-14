// this is customer information that shows what movies they have rented and for how long
let customer = {
 "name": "Martin Fowler",
 "rentals": [
 {"movieID": "F001", "days": 3},
 {"movieID": "F002", "days": 1},]};

// titles of the movies they have rented  
 let videos = {"F001": {"title": "Ran", "code": "regular"},
 "F002": {"title": "The Waterboy", "code": "regular"},
 "F003": {"title": "Animal House", "code": "regular"},
}

let totalAmount = 0; 
let frequentRenterPoints = 0;
let receipt = `<h2>Rental Record for ${customer.name}\n</h2>`;

for (let r of customer.rentals) {
        let item = videos[r.movieID];
        let videoAmount = 0;
    if(item.code == 'regular'){
        videoAmount = 2;
        if (r.days > 2) {
            videoAmount += (r.days - 2) * 1.5;
        }
    } else if(item.code == 'new'){
            videoAmount = r.days * 3;
    } else if(item.code == 'childrens'){
        videoAmount = 1.5;
        if (r.days > 3) {
            videoAmount += (r.days - 3) * 1.5;
        }
    };
    frequentRenterPoints++;
    if(item.code === "new" && r.days > 2) {
        frequentRenterPoints++;
    }
    receipt += `<h5>\t${item.title}\t${videoAmount}\n</h5>` ;
    totalAmount += videoAmount;
};

receipt += `<h3>Amount owed is ${totalAmount}\n</h3>`;
receipt += `<h4>You earned ${frequentRenterPoints} frequent renter points\n</h4>`;
document.querySelector('.main').innerHTML = receipt;


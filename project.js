
// Declare a count
let count = 0;


// Function to update the counter
function updateCount(){
    document.querySelector("#count").innerHTML = count;
}


// Function to increase the counter
function increaseCount(){
    count++;
    updateCount();
}

// Function to decrease the counter
function decreaseCount(){
    count--;
    updateCount();
}

// Function to reset the counter
function resetCount(){
    count = 0;
    updateCount();
}

// Function to save the counter
function saveCount(){
    localStorage.setItem("count",count);
}

// Function to load the counter
function loadCount(){
    let saved = localStorage.getItem("count");
    if(save !== null){
        count = Number(saved);
    }

    updateCount();
}







// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};


// Function to display menu items by category
function displayMenuItems(menu) {
    const menu_container = document.getElementById('menu')
    const order_list = document.querySelector('#order-list')

    Object.keys(menu).forEach(e => {
        const h3 = document.createElement('h3')
        h3.textContent = e
        menu_container.appendChild(h3)
        const ul = document.createElement('ul')
        menu_container.appendChild(ul)

        menu[e].forEach(item => {
            const li = document.createElement('li')
            li.textContent = item
            ul.appendChild(li)
            li.addEventListener('click', ()=> {
                addToOrder(item)
            })
        })
    })            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const order_list = document.querySelector('#order-items')
    let order_total = document.getElementById('order-total')
    // Create a list item for the order
    const li = document.createElement('li')
    // Set the text content of the list item to the item name
    li.textContent = itemName
    // Append the list item to the order items list
    order_list.appendChild(li)
    // Calculate and update the total price
     order_total.textContent = `${order_list.children.length * 60}.00`
    // Update the text content of the order total element with the new total
   
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu)
}

// Start the menu system by calling the init function
initMenuSystem(menu);

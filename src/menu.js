 
function menuLoad() 
{
    const content = document.getElementById("content");
    content.innerHTML = "";

    const menu = document.createElement("div");
    
    const item1 = document.createElement("div");
    const title1 = document.createElement("h2");
    title1.textContent = "Chicken Shawarma";
    const desc1 = document.createElement("p");
    desc1.textContent = "Juicy, spiced chicken shawarma wrapped in warm bread, served with crispy golden chips and a side of flavor-packed sauces—comfort food with a Middle Eastern twist!";
    item1.appendChild(title1);
    item1.appendChild(desc1);

    const item2 = document.createElement("div");
    const title2 = document.createElement("h2");
    title2.textContent = "Falafel Platter";
    const desc2 = document.createElement("p");
    desc2.textContent = "Golden, crispy falafel served with fresh salad, fluffy pita bread, creamy hummus, and a drizzle of tangy tahini—plant-based perfection on a plate!";
    item2.appendChild(title2);
    item2.appendChild(desc2);

    menu.appendChild(item1);
    menu.appendChild(item2);

    content.appendChild(menu);
    
}

export default menuLoad;
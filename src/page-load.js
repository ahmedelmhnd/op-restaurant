import shopImage from "./home.jpg";


function pageLoad() 
{
    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Bob's Kebabs!";
    content.appendChild(title);
    
    const imageContainer = document.createElement("div");
    const homeImage = document.createElement("img");
    homeImage.classList = "home-img";
    homeImage.src = shopImage;
    imageContainer.appendChild(homeImage);
    content.appendChild(imageContainer);

    const description = document.createElement("p");
    description.textContent = "Bob's Kebab Shop: Where the skewers are hotter than the sun, the sauces flow like gossip at a family reunion, and every bite is a meat-lover's mic drop. Serving kebabs so good, you'll swear Bob's got a secret recipe (spoiler: it's love and a little extra garlic).";
    content.appendChild(description);

    


}

export default pageLoad;
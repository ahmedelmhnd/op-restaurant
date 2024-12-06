 
function aboutLoad() 
{
    const content = document.getElementById("content");
    content.innerHTML = "";

    const about = document.createElement("div");
    
    const name = document.createElement("h2");
    name.textContent = "Bob Kebab jr.";
    const email = document.createElement("p");
    email.textContent = "bob.shawarama@falafel.com";
    const number = document.createElement("p");
    number.textContent = "123-456-789";
    about.appendChild(name);
    about.appendChild(email);
    about.appendChild(number);

    content.appendChild(about);
    
}

export default aboutLoad;
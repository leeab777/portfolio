//javascript to add social media icons with links
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");

    // Create a container for the social icons on the right
    const socialIcons = document.createElement("div");
    socialIcons.id = "social-icons";
    socialIcons.innerHTML = `
        <a href="https://facebook.com" target="_blank" title="Facebook" aria-label="Facebook">
            <img src="socialmedia/facebook.svg" alt="Facebook">
        </a>
        <a href="https://x.com/LBuckley94373" target="_blank" title="X" aria-label="X">
            <img src="socialmedia/x.svg" alt="X">
        </a>
        <a href="https://instagram.com/bkly2025" target="_blank" title="Instagram" aria-label="Instagram">
            <img src="socialmedia/instagram.svg" alt="Instagram">
        </a>
        <a href="https://linkedin.com/in/lee-buckley-40b482336" target="_blank" title="LinkedIn" aria-label="Linkedin">
            <img src="socialmedia/linkedin.svg" alt="LinkedIn">
        </a>
    `;

    // Create a container for the email and CV icons on the left
    const leftIcons = document.createElement("div");
    leftIcons.id = "left-icons";
    leftIcons.innerHTML = `
        <a href="mailto:lee.a.buckley123@outlook.com" title="Email Me" aria-label="Email Me">
            <img src="socialmedia/mail.svg" alt="Email">
        </a>
        <a href="/socialmedia/Lee Buckley CV.doc" download="Lee_Buckley_CV" title="Download My CV" aria-label="Download My CV">
            <img src="socialmedia/cv.svg" alt="CV">
        </a>
    `;

    // Create the logo image element separately for independent styling
    const logo = document.createElement("img");
    logo.src = "socialmedia/logo1.svg";
    logo.alt = "My Logo";
    logo.id = "my-logo";

    // Append the social icons, logo, and left icons containers to the body
    document.body.appendChild(leftIcons);
    document.body.appendChild(socialIcons);
    document.body.appendChild(logo);  // Appending logo separately
});

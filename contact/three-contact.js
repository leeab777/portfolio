// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById('threejs-container').appendChild(renderer.domElement);

// Add a plane for shadows
const planeGeometry = new THREE.PlaneGeometry(500, 500);
const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;
plane.receiveShadow = true;
scene.add(plane);

// Add light sources
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(5, 5, 4);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.radius = 10;
directionalLight.shadow.bias = -0.001
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Create the card
const cardGroup = new THREE.Group();
scene.add(cardGroup);

// Card dimensions
const cardWidth = 3.4;
const cardHeight = 2.2;
const cardDepth = 0.02;

// Front side of the card
const canvasFront = document.createElement('canvas');
canvasFront.width = 600;
canvasFront.height = 300;
const ctxFront = canvasFront.getContext('2d');

// Draw the front details
ctxFront.fillStyle = '#ffffff'; // Background color
ctxFront.fillRect(0, 0, canvasFront.width, canvasFront.height);
ctxFront.fillStyle = '#000000';
ctxFront.font = '30px Arial';
ctxFront.textAlign = 'left';
ctxFront.textBaseline = 'alphabetic';
ctxFront.lineWidth = 2;
const padding = 20;
ctxFront.fillText('Lee A Buckley', padding, canvasFront.height - padding - 120);
ctxFront.fillText('Tel: 07513 XXXXXX', padding, canvasFront.height - padding -80);

ctxFront.fillText('Email: lee.a.buckley123@outlook.com', padding, canvasFront.height - padding);




//remove
ctxFront.strokeStyle = 'red'; // Set the stroke color
ctxFront.lineWidth = 2; // Line thickness
ctxFront.strokeRect(470, 20, 100, 100); // Draw a red rectangle around the logo

//remove





// Add space for a logo
const logoImg = new Image();
logoImg.src = './logo.svg'; // Add your logo file path here
logoImg.onload = () =>{
    console.log('logo loaded successfully');   
    ctxFront.drawImage(logoImg, 470, 20, 100, 100);
};
logoImg.onerror = () => {
    console.error('Error loading logo');
};

const frontTexture = new THREE.CanvasTexture(canvasFront);
frontTexture.minFilter = THREE.LinearFilter;
frontTexture.magFilter = THREE.LinearFilter;
frontTexture.encoding = THREE.sRGBEncoding;
const frontMaterial = new THREE.MeshStandardMaterial({ map: frontTexture });

// Rear side of the card
const canvasBack = document.createElement('canvas');
canvasBack.width = 400;
canvasBack.height = 512;
const ctxBack = canvasBack.getContext('2d');

// Draw the rear design
ctxBack.fillStyle = '#f4a261'; // Background color
ctxBack.fillRect(0, 0, canvasBack.width, canvasBack.height);
ctxBack.fillStyle = '#ffffff';
ctxBack.font = '32px Arial';
ctxBack.fillText('Software Development', 40, 256);

const backTexture = new THREE.CanvasTexture(canvasBack);
const backMaterial = new THREE.MeshStandardMaterial({ map: backTexture });

// Create card geometry
const cardGeometry = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);
const cardMaterials = [
    backMaterial, // Left (not used)
    backMaterial, // Right (not used)
    backMaterial, // Top (not used)
    backMaterial, // Bottom (not used)
    frontMaterial, // Front
    backMaterial, // Back
];
const cardMesh = new THREE.Mesh(cardGeometry, cardMaterials);
cardMesh.castShadow = true;
cardGroup.add(cardMesh);

// Camera position
camera.position.z = 5;

// Animation and interaction
let isHovered = false;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

// Add hover effect to stop rotation
document.getElementById('threejs-container').addEventListener('mouseover', () => {
    isHovered = true;
    cardMesh.rotation.y = 0; // Show contact details
});

document.getElementById('threejs-container').addEventListener('mouseout', () => {
    isHovered = false;
});

// Add drag-to-rotate functionality
renderer.domElement.addEventListener('mousedown', () => { isDragging = true; });
renderer.domElement.addEventListener('mouseup', () => { isDragging = false; });
renderer.domElement.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaMove = {
            x: event.offsetX - previousMousePosition.x,
            y: event.offsetY - previousMousePosition.y,
        };
        cardGroup.rotation.y += deltaMove.x * 0.01;
        cardGroup.rotation.x += deltaMove.y * 0.01;
    }
    previousMousePosition = { x: event.offsetX, y: event.offsetY };
});

// Responsive rendering
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (!isHovered) {
        cardMesh.rotation.y += 0.01; // Continuous rotation
    }

    renderer.render(scene, camera);
}

animate();


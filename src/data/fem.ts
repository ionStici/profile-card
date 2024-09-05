import { Project } from "@/types/project";

// type Project = {

//   dateCreated?: string; // The data (ISO) when the project was started or completed. Useful for sorting projects chronologically. d

//   level?: string; // The level of the project from frontend mentor
//   fem?: string; // URL to the Frontend Mentor challenge submission
// };

// type ProjectAdditionalProperties = {
//   status: "completed" | "in-progress" | "planned"; // Indicates the current status of the project
// };

export const projects: Project[] = [
  // newbie
  {
    id: "n-1",
    name: "QR Code Component",
    about:
      "A simple HTML/CSS project featuring a clean, responsive QR code card.",
    image: "qr-code-component.jpg",
    techStack: ["HTML", "CSS"],
    repo: "https://github.com/ionStici/qr-code-component",
    demo: "https://ionstici.github.io/qr-code-component",
    fem: "https://www.frontendmentor.io/solutions/qr-code-component-lJIKgfg68b",
    level: "newbie",
    dateCreated: "2022-12-06T22:00:00.000Z",
  },
  {
    id: "n-2",
    name: "Product Preview Card Component",
    about:
      "A stylish product preview card showcasing a perfume, featuring responsive design.",
    image: "product-preview-card-component.jpg",
    level: "newbie",
    techStack: ["HTML", "CSS"],
    repo: "https://github.com/ionStici/product-preview-card-component",
    demo: "https://ionstici.github.io/product-preview-card-component",
    fem: "https://www.frontendmentor.io/solutions/product-preview-card-component-aA55zfxN6_",
    dateCreated: "2022-12-06T22:00:00.000Z",
  },
  {
    id: "n-3",
    name: "Interactive Rating Component",
    about:
      "An interactive rating component built with HTML and CSS, featuring a sleek design to gather user feedback.",
    image: "interactive-rating-component.jpg",
    level: "newbie",
    techStack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/ionStici/interactive-rating-component",
    demo: "ionstici.github.io/interactive-rating-component",
    fem: "https://www.frontendmentor.io/solutions/interactive-rating-component-EnkotiS3jo",
    dateCreated: "2022-12-08T22:00:00.000Z",
  },
  {
    id: "n-4",
    name: "Skilled e-Learning Landing Page",
    about: "A modern eLearning landing page designed with HTML and CSS.",
    image: "skilled-elearning-landing-page.jpg",
    level: "newbie",
    techStack: ["HTML", "CSS"],
    repo: "https://github.com/ionStici/skilled-elearning-landing-page",
    demo: "https://ionstici.github.io/skilled-elearning-landing-page",
    fem: "https://www.frontendmentor.io/solutions/skilled-elearning-landing-page-M8TAeGlpyl",
    dateCreated: "2022-12-10T22:00:00.000Z",
  },
  {
    id: "n-5",
    name: "NFT Preview Card Component",
    about:
      "Responsive HTML/CSS NFT preview card with clean design and hover effects.",
    image: "nft-preview-card-component.jpg",
    level: "newbie",
    techStack: ["HTML", "CSS"],
    repo: "https://github.com/ionStici/nft-preview-card-component",
    demo: "https://ionstici.github.io/nft-preview-card-component",
    fem: "https://www.frontendmentor.io/solutions/nft-preview-card-component-RQ_BplDOD1",
    dateCreated: "2022-12-10T22:00:00.000Z",
  },
  // junior
  {
    id: "j-32",
    name: "Product List with Cart",
    about:
      "A visually appealing dessert shop interface showcasing a product list and an integrated cart component.",
    image: "product-list-with-cart.jpg",
    level: "junior",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/ionStici/product-list-with-cart",
    demo: "https://ionstici.github.io/product-list-with-cart",
    fem: "https://www.frontendmentor.io/solutions/product-list-with-cart-Alfq6Q_r9K",
    dateCreated: "2024-07-20T21:00:00.000Z",
  },
];

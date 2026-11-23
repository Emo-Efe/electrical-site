// Add real projects here. While this list is empty, the Projects page
// hides the project gallery automatically.
//
// Example:
// {
//   title: "Shopping plaza wiring supply",
//   location: "Ojo, Lagos",
//   description: "Supplied cables, breakers and distribution boards.",
//   image: "/images/projects/plaza.jpg", // optional, file in public/images/projects/
// },

export type Project = {
  title: string;
  location: string;
  description: string;
  image?: string;
};

export const projects: Project[] = [];
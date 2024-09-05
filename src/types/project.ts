export type Project = {
  id: string | number; // unique identifier
  name: string; // project title
  about: string; // short summary
  image: string; // preview image
  techStack: string[]; // technologies used in the project
  repo: string; // url to the project's github repository
  demo: string; // url to a live demo of the project

  dateCreated: string; // the date (iso) when the project was started or completed

  fem?: string;
  level?: string;
};

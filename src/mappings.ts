import { ProjectId } from "./components/projects/projects";

export const HOME_URL = "/";
export const ABOUT_URL = "/about";
export const PROJECTS_URL = "/projects";
export const PROJECT_URL = (id: ProjectId) => `${PROJECTS_URL}/${id}`;
export const CONTACT_URL = "/contact";
export const NOT_FOUND_URL = "/404";
export const PROJECTS_IMAGES_PATH = "/images/projects";

export const GITHUB_URL = "https://github.com/njuro";
export const WEB_URL = "https://noge.dev";
export const LINKEDIN_URL = "https://www.linkedin.com/in/juraj-noge";
export const GOODREADS_URL =
  "https://www.goodreads.com/user/show/80333251-njuro";
export const EMAIL_ADDRESS = "juraj@noge.dev";
export const RESUME_URL = "/juraj-noge-resume.pdf";

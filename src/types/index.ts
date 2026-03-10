export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string | null;
  image: string;
  featured: boolean;
}

export interface Certification {
    title: string;
    issuer: string;
    issuedOn: string;
    expiresOn: string | null;
    expiredOn: string | null;
    verifyUrl: string | null;  
    status: "active" | "expired";
}
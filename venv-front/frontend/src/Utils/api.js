const domain = import.meta.env.VITE_API_DOMAIN;

const api = `${domain ?? `http://localhost:3080`}/api/v1`;

export { api }


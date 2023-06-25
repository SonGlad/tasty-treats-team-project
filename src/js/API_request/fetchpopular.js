export const fetchPopular = () => {
    return fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/popular`)
        .then(response => {
            if (response.status === 404) {
                throw new Error(response.status);
            }
            return response.json();
        });
};
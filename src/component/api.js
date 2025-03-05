const api_key = "b0f44254786d6ba00216937a2260e18f"
const base_url = "https://api.themoviedb.org/3"

// export const Getpopularmovie = async () => {
//     const response = await fetch(`${base_url}/movie/popular?api_key=${api_key}`);
//     const data = await response.json();
//     return data.result;
// };
export async function Getpopularmovie() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b0f44254786d6ba00216937a2260e18f`);

        if (!response.ok) throw new Error("Failed to fetch movies");

        const data = await response.json();
        console.log("Fetched Movies:", data.results); // ✅ Check API response in Console
        return data.results || []; // ✅ Always return an array
    } catch (error) {
        console.error("Error fetching movies:", error);
        return []; // ✅ Return empty array to prevent errors
    }
}


export const searchMovies = async (query) => {
    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.result;
};
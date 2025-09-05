import axios from "axios";

const BASE_URL = "https://cveawg.mitre.org/api/cve";

export async function fetchRecentCVEs() {
 try {
 const response = await axios.get(`${BASE_URL}?limit=10`);
 return response.data.vulnerabilities;
 } catch (error) {
 console.error("Erro ao buscar CVEs:", error);
 return [];
 }
}
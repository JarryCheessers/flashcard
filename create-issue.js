const https = require("https");
const token = process.env.GITHUB_TOKEN;

// You'll need to replace OWNER and REPO with your actual GitHub username and repository name
const owner = "JarryCheessers";
const repo = "flashcard";

const data = JSON.stringify({ title: "test" });

const options = {
  hostname: "api.github.com",
  path: `/repos/${owner}/${repo}/issues`,
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Node.js",
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  let body = "";
  res.on("data", (chunk) => (body += chunk));
  res.on("end", () => {
    const response = JSON.parse(body);
    if (res.statusCode === 201) {
      console.log("✓ Issue created successfully!");
      console.log(`Issue #${response.number}: ${response.title}`);
      console.log(`URL: ${response.html_url}`);
    } else {
      console.log("Error:", response.message);
    }
  });
});

req.on("error", (e) => console.error("Request error:", e));
req.write(data);
req.end();

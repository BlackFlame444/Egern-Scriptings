
// API URL to update IP
const apiUrl = "https://www.smartdnsproxy.com/api/IP/update/1e945f643220410";

function updateIP() {
  http.get(apiUrl, (response) => {
    if (response.status === 200) {
      console.log("IP address updated successfully.");
    } else {
      console.error("Failed to update IP: " + response.status);
    }
  });
}

// Schedule the task to run every hour using a cron expression
cron("0 * * * *", updateIP);

const https = require("https");

exports.handler = async (event) => {
  const code = event.queryStringParameters.code;

  const tokenData = JSON.stringify({
    client_id: process.env.OAUTH_CLIENT_ID,
    client_secret: process.env.OAUTH_CLIENT_SECRET,
    code: code,
  });

  const accessToken = await new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "github.com",
        path: "/login/oauth/access_token",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": tokenData.length,
          Accept: "application/json",
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data).access_token);
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on("error", reject);
    req.write(tokenData);
    req.end();
  });

  const authMessage = `authorization:github:success:${JSON.stringify({ token: accessToken, provider: "github" })}`;

  const script = `
    <script>
      (function() {
        var message = ${JSON.stringify(authMessage)};
        if (window.opener) {
          window.opener.postMessage(message, window.location.origin);
          document.body.innerHTML = "<p style='font-family:sans-serif;text-align:center;margin-top:40px'>تم تسجيل الدخول، يمكنك إغلاق هذه الصفحة.</p>";
        } else {
          localStorage.setItem("gh_auth_pending", message);
          document.body.innerHTML = "<p style='font-family:sans-serif;text-align:center;margin-top:40px'>تم تسجيل الدخول! ارجع إلى التبويب الأول وانتظر ثانيتين.</p>";
        }
      })();
    </script>
  `;

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: script,
  };
};
